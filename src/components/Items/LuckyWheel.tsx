import React, { useEffect, useState, useRef, useCallback } from 'react';
import "./LuckyWheel.css";

// Define types
interface Prize {
  title: string;
  prize: string;
}

interface MessageToNative {
  type: string;
  index?: number;
  prize?: Prize;
}

interface NativeMessage {
  type: string;
  count?: number;
}

const LuckyWheel: React.FC = () => {
  // Constants
  const PRIZES: Prize[] = [
    {
      title: 'Good luck! Congratulations on winning',
      prize: 'DOMOVERSE',
    },
    {
      title: 'Good luck! Congratulations on winning',
      prize: 'DOMODOCX',
    },
    {
      title: 'Good luck! Congratulations on winning',
      prize: 'DOMAAS',
    },
    {
      title: 'Try again next time',
      prize: 'INFOBEAM',
    },
  ];

  const COLORS = ["#F48064", "#fff7d7", "#a71d77", "#4A82C4"];
  const TEXT_COLORS = ["#f3f1f1", "#a8213c", "#f3f1f1"];
  const ROTATE_Z = 360;
  const ROTATE_Z_COUNT = 10;
  const RUN_TIME = 6;
  const PRIZE_COUNT = PRIZES.length;
  const PRIZE_ANGLE = 360 / PRIZE_COUNT;
  const ROTATE_Z_POSITIONS = Array.from({ length: PRIZE_COUNT }, (_, i) => {
    return i * PRIZE_ANGLE + PRIZE_ANGLE / 2;
  });

  // State variables
  const [gameState, setGameState] = useState<boolean>(false);
  const [luckDrawCount, setLuckDrawCount] = useState<number>(3);
  const [currentRotation, setCurrentRotation] = useState<number>(0);
  const [lastRotation, setLastRotation] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>('');
  
  const lastClickTimeRef = useRef<number>(0);
  const wheelRef = useRef<HTMLDivElement>(null);

  // Security check

  // Send message to native app
  const sendMessageToNative = useCallback((message: MessageToNative) => {
    try {
      if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.native) {
        window.webkit.messageHandlers.native.postMessage(message);
      } else if ((window as any).Android && typeof (window as any).Android.sendMessage === 'function') {
        (window as any).Android.sendMessage(message);
      } else {
        console.log('No native environment detected', message);
      }
    } catch (error) {
      console.error('Error sending message to native:', error);
    }
  }, []);

  // Game action execution
  const gameAction = useCallback((rotateZPositionIndex: number) => {
    const targetAngle = ROTATE_Z_POSITIONS[rotateZPositionIndex];
    const additionalRotation = ROTATE_Z * ROTATE_Z_COUNT;
    const totalRotation = currentRotation - additionalRotation - targetAngle + lastRotation;
    
    if (wheelRef.current) {
      requestAnimationFrame(() => {
        if (wheelRef.current) {
          wheelRef.current.style.transform = `rotate(${totalRotation}deg)`;
        }
      });
    }
    
    setCurrentRotation(totalRotation);
    setLastRotation(targetAngle);
    setLuckDrawCount(prevCount => prevCount - 1);
    
    const handleTransitionEnd = () => {
      if (wheelRef.current) {
        wheelRef.current.removeEventListener('transitionend', handleTransitionEnd);
      }
      setGameState(false);
      onDrawComplete(rotateZPositionIndex);
    };

    if (wheelRef.current) {
      wheelRef.current.addEventListener('transitionend', handleTransitionEnd, { once: true });
    }
  }, [currentRotation, lastRotation, ROTATE_Z_POSITIONS]);

  // Handle draw completion
  const onDrawComplete = useCallback((rotateZPositionIndex: number) => {
    const message = `${PRIZES[rotateZPositionIndex].title}\r\n${PRIZES[rotateZPositionIndex].prize}`;
    setModalMessage(message);
    setShowModal(true);

    sendMessageToNative({
      type: 'drawResult',
      index: rotateZPositionIndex,
      prize: PRIZES[rotateZPositionIndex]
    });
  }, [PRIZES, sendMessageToNative]);

  // Handle arrow click to start game
  const handleArrowClick = useCallback((e: React.MouseEvent) => {
    const now = Date.now();
    if (now - lastClickTimeRef.current < 1000) {
      e.preventDefault();
      return;
    }
    lastClickTimeRef.current = now;

    if (gameState) return;
    
    if (luckDrawCount <= 0) {
      setModalMessage('Sorry, you have no more draw chances');
      setShowModal(true);
      return;
    }

    setGameState(true);
    const rotateZPositionIndex = Math.floor(Math.random() * PRIZE_COUNT);
    gameAction(rotateZPositionIndex);
  }, [gameState, luckDrawCount, PRIZE_COUNT, gameAction]);

  // Handle modal close
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Set up static width - Define this function to maintain compatibility with references
//   const handleResize = useCallback(() => {
//     const gameContainer = document.querySelector('.game');
//     if (gameContainer) {
//       // Set a fixed width for your game container
//       (gameContainer as HTMLElement).style.width = '640px';
//       (gameContainer as HTMLElement).style.margin = '0 auto'; // Center the container
//     }
    
//     // Use a fixed font size instead of dynamic calculation
//     // document.documentElement.style.fontSize = '1px'; // Adjust this value to your needs
//   }, []);

  // Handle network status changes
  useEffect(() => {
    const handleOnline = () => console.log('Network connected');
    const handleOffline = () => {
      setModalMessage('Network disconnected, please check your network settings');
      setShowModal(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Listen for native app messages
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const data = event.data as NativeMessage;
      if (data.type === 'luckDrawCount' && typeof data.count === 'number') {
        setLuckDrawCount(data.count);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  // Initialize on load
//   useEffect(() => {
//     // Apply static width settings
//     handleResize();
    
//     // Add resize listener to maintain fixed width on window resize
//     window.addEventListener('resize', handleResize);
    
//     // Security check
//     securityCheck();
    
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [handleResize, securityCheck]);

  // Render wheel sectors
  const renderWheelSectors = () => {
    return PRIZES.map((prize, index) => {
      const perAngle = 360 / PRIZES.length;
      const rotateAngle = perAngle / 2 - 90 + perAngle * index;
      
      // Set sector area
      const p = perAngle / 2;
      const d = Math.tan(p * Math.PI / 180) * 100;
      const x = (100 - d) / 2;
      const clipPath = `polygon(0% 50%, 100% ${x}%, 100% ${100 - x}%)`;

      return (
        <div 
          key={index}
          className="prize-part"
          style={{
            transform: `rotateZ(${rotateAngle}deg)`,
            clipPath,
          }}
        >
          <div 
            className="prize-bg"
            style={{ background: COLORS[index % COLORS.length] }}
          />
          <div 
            className="prize-text"
            style={{ color: TEXT_COLORS[index % TEXT_COLORS.length] }}
          >
            {prize.prize}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="game">
      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <p>{modalMessage}</p>
          </div>
        </div>
      )}
      
      <div className="luckDrawCount">You have <span>{luckDrawCount}</span> draw chances</div>
      
      <div className="wheel-box">
        <div
          id="wheel"
          ref={wheelRef}
          style={{
            transition: `transform ${RUN_TIME}s cubic-bezier(0.15, 0.85, 0.3, 1)`
          }}
        >
          <div className="wheel-inner">
            {renderWheelSectors()}
          </div>
        </div>
        <div id="arrow" onClick={handleArrowClick}></div>
      </div>
    </div>
  );
};

export default LuckyWheel;

// Add these definitions for native communication
declare global {
  interface Window {
    webkit?: {
      messageHandlers: {
        native: {
          postMessage: (message: any) => void;
        };
      };
    };
  }
}