import React, { useEffect, useState, useRef, useCallback } from 'react';
import "./LuckyWheel.css";
import Navbar from '../navbar';
import Footer from '../footer';
import Confetti from 'react-confetti';

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

declare global {
    interface Window {
      webkit: any; // Use a more specific type if you know the structure of `webkit`
    }
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
            title: 'Good luck! Congratulations on winning',
            prize: 'INFOBEAM', // Keeping INFOBEAM as a prize
        },
    ];

    const COLORS = ["#F48064", "#fff7d7", "#a71d77", "#4A82C4"];
    const TEXT_COLORS = ["#f3f1f1", "#a8213c", "#f3f1f1"];
    const ROTATE_Z = 360;
    const ROTATE_Z_COUNT = 10;
    const RUN_TIME = 7;
    const PRIZE_COUNT = PRIZES.length;
    const PRIZE_ANGLE = 360 / PRIZE_COUNT; // Full circle divided by number of prizes
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
    const [playCount, setPlayCount] = useState<number>(0);

    const lastClickTimeRef = useRef<number>(0);
    const wheelRef = useRef<HTMLDivElement>(null);

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (showModal) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }

        // Cleanup function
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [showModal]);

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

            // Ensure the wheel has fully settled before determining the prize
            const settledRotation = (totalRotation % 360 + 360) % 360; // Normalize to 0-360 degrees
            const prizeIndex = Math.floor((settledRotation / 360) * PRIZE_COUNT) % PRIZE_COUNT;
            onDrawComplete(prizeIndex);
        };

        if (wheelRef.current) {
            wheelRef.current.addEventListener('transitionend', handleTransitionEnd, { once: true });
        }
    }, [currentRotation, lastRotation, ROTATE_Z_POSITIONS, PRIZE_COUNT]);

    // Handle draw completion
    const onDrawComplete = useCallback((rotateZPositionIndex: number) => {
        const message = `${PRIZES[rotateZPositionIndex].title}\r\n${PRIZES[rotateZPositionIndex].prize}`;
        setModalMessage(message);
        setShowModal(true);

        // Special case: If INFOBEAM is selected, change the output to DOMODOCX in the result
        const resultPrize = {...PRIZES[rotateZPositionIndex]};
        console.log(resultPrize);
        // if (resultPrize.prize === 'INFOBEAM') {
        //     resultPrize.prize = 'DOMODOCX';
        // }

        sendMessageToNative({
            type: 'drawResult',
            index: rotateZPositionIndex,
            prize: resultPrize
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
        setPlayCount(prevCount => prevCount + 1);
    }, [gameState, luckDrawCount, PRIZE_COUNT, gameAction]);

    // Handle modal close
    const handleCloseModal = () => {
        setShowModal(false);
        if (luckDrawCount <= 0 && playCount >= 3) {
            setModalMessage('Do you want to play again?');
            setShowModal(true);
        }
    };

    // Handle play again
    const handlePlayAgain = () => {
        setLuckDrawCount(3);
        setPlayCount(0);
        setShowModal(false);
    };

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
        <div className=''>
            <Navbar activeNav="luckywheel" />
            <div className="game">
                {/* Modal */}
                {showModal && (
                    <div className="modal-overlay">
                        <Confetti />
                        <div className="modal-content">
                            <span className="close" onClick={handleCloseModal}>&times;</span>
                            <p className="modal-message">
                                {/* Modified modal message to always show DOMODOCX instead of INFOBEAM */}
                                {modalMessage.includes('INFOBEAM') 
                                    ? modalMessage.replace('INFOBEAM', 'DOMODOCX') 
                                    : modalMessage}
                            </p>
                            {luckDrawCount <= 0 && playCount >= 3 ? (
                                <>
                                    <p>Are you want to Play Again?</p>
                                    <button className="modal-button mb-3" onClick={handlePlayAgain}>Yes</button>
                                    <button className="modal-button" onClick={() => {
                                        setLuckDrawCount(0);
                                        setShowModal(false);
                                    }}>No</button>
                                </>
                            ) : (
                                <button className="modal-button" onClick={handleCloseModal}>OK</button>
                            )}
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
            <Footer />
        </div>
    );
};

export default LuckyWheel;