import React, { useEffect, useState, useRef, useCallback } from "react";
import "./LuckyWheel.css";
import Navbar from "../navbar";
import Footer from "../footer";
import Confetti from "react-confetti";

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
        webkit: any;
    }
}

const LuckyWheel: React.FC = () => {
    // Constants - Make sure the order matches the wheel's visual representation
    const PRIZES: Prize[] = [
        {
            title: "Good luck! Congratulations on winning",
            prize: "DOMOVERSE",
        },
        {
            title: "Good luck! Congratulations on winning",
            prize: "DOMODOCX",
        },
        {
            title: "Good luck! Congratulations on winning",
            prize: "DOMAAS",
        },
        {
            title: "Good luck! Congratulations on winning",
            prize: "INFOBEAM",
        },
    ];

    const COLORS = ["#F48064", "#fff7d7", "#a71d77", "#4A82C4"];
    const TEXT_COLORS = ["#f3f1f1", "#a8213c", "#f3f1f1"];
    const ROTATE_Z = 360;
    const ROTATE_Z_COUNT = 10;
    const RUN_TIME = 7;
    const PRIZE_COUNT = PRIZES.length;
    const PRIZE_ANGLE = 350 / PRIZE_COUNT;
    const ROTATE_Z_POSITIONS = Array.from({ length: PRIZE_COUNT }, (_, i) => {
        console.log(i * PRIZE_ANGLE + PRIZE_ANGLE / 2);
        return i * PRIZE_ANGLE + PRIZE_ANGLE / 2;
    });

    // State avariables
    const [gameState, setGameState] = useState<boolean>(false);
    const [luckDrawCount, setLuckDrawCount] = useState<number>(3);
    const [currentRotation, setCurrentRotation] = useState<number>(0);
    const [lastRotation, setLastRotation] = useState<number>(0);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalMessage, setModalMessage] = useState<string>("");
    const [playCount, setPlayCount] = useState<number>(0);
    const [selectedPrize, setSelectedPrize] = useState<Prize | null>(null);

    const lastClickTimeRef = useRef<number>(0);
    const wheelRef = useRef<HTMLDivElement>(null);

    // Force modal to show the actual prize, override any substitution
    useEffect(() => {
        if (selectedPrize) {
            const correctMessage = `${selectedPrize.title}\r\n${selectedPrize.prize}`;
            setModalMessage(correctMessage);
        }
    }, [selectedPrize]);

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (showModal) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }

        return () => {
            document.body.classList.remove("modal-open");
        };
    }, [showModal]);

    // Send message to native app
    const sendMessageToNative = useCallback((message: MessageToNative) => {
        try {
            if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.native) {
                window.webkit.messageHandlers.native.postMessage(message);
            } else if (
                (window as any).Android &&
                typeof (window as any).Android.sendMessage === "function"
            ) {
                (window as any).Android.sendMessage(message);
            } else {
                console.log("No native environment detected", message);
            }
        } catch (error) {
            console.error("Error sending message to native:", error);
        }
    }, []);

    // Game action execution
    const gameAction = useCallback(
        (randomIndex: number) => {
            // Store the selected prize directly
            let prize;
            if (randomIndex == 3) {
                prize = PRIZES[randomIndex - randomIndex];
                setSelectedPrize(prize);
            } else {
                prize = PRIZES[randomIndex + 1];
                setSelectedPrize(prize);
            }

            console.log("Selected prize:", prize?.prize, "Index:", randomIndex);

            const targetAngle = ROTATE_Z_POSITIONS[randomIndex];
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
            setLuckDrawCount((prevCount) => prevCount - 1);

            const handleTransitionEnd = () => {
                if (wheelRef.current) {
                    wheelRef.current.removeEventListener("transitionend", handleTransitionEnd);
                }
                setGameState(false);

                // Use the stored prize directly
                onDrawComplete(prize, randomIndex);
            };

            if (wheelRef.current) {
                wheelRef.current.addEventListener("transitionend", handleTransitionEnd, { once: true });
            }
        },
        [currentRotation, lastRotation, ROTATE_Z_POSITIONS, PRIZES],
    );

    // Handle draw completion
    const onDrawComplete = useCallback(
        (prize: Prize, index: number) => {
            console.log("Draw complete - Prize:", prize.prize, "Index:", index);

            // Set the modal message directly from the prize
            const message = `${prize.title}\r\n${prize.prize}`;
            setModalMessage(message);
            setShowModal(true);

            // Send the exact prize to the native app
            sendMessageToNative({
                type: "drawResult",
                index: index,
                prize: prize,
            });
        },
        [sendMessageToNative],
    );

    // Handle arrow click to start game
    const handleArrowClick = useCallback(
        (e: React.MouseEvent) => {
            const now = Date.now();
            if (now - lastClickTimeRef.current < 1000) {
                e.preventDefault();
                return;
            }
            lastClickTimeRef.current = now;

            if (gameState) return;

            if (luckDrawCount <= 0) {
                setModalMessage("Sorry, you have no more draw chances");
                setShowModal(true);
                return;
            }

            setGameState(true);

            // For testing purposes, force INFOBEAM (index 3)
            // const rotateZPositionIndex = 3; // INFOBEAM

            // For normal use, uncomment this:
            const rotateZPositionIndex = Math.floor(Math.random() * PRIZE_COUNT);
            console.log(rotateZPositionIndex + 1);

            gameAction(rotateZPositionIndex + 1);
            setPlayCount((prevCount) => prevCount + 1);
        },
        [gameState, luckDrawCount, PRIZE_COUNT, gameAction],
    );

    // Handle modal close
    const handleCloseModal = () => {
        setShowModal(false);
        if (luckDrawCount <= 0 && playCount >= 3) {
            setModalMessage("Do you want to play again?");
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
            const d = Math.tan((p * Math.PI) / 180) * 100;
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
                    <div className="prize-bg" style={{ background: COLORS[index % COLORS.length] }} />
                    <div className="prize-text" style={{ color: TEXT_COLORS[index % TEXT_COLORS.length] }}>
                        {prize.prize}
                    </div>
                </div>
            );
        });
    };

    return (
        <div className="">
            <Navbar activeNav="luckywheel" />
            <div className="game">
                {/* Modal - Force the correct prize to be displayed */}
                {showModal && (
                    <div className="modal-overlay">
                        <Confetti />
                        <div className="modal-content">
                            <span className="close" onClick={handleCloseModal}>
                                &times;
                            </span>
                            <p className="modal-message">
                                {/* Never substitute the prize name */}
                                {selectedPrize && luckDrawCount < 3
                                    ? `${selectedPrize.title}\r\n${selectedPrize.prize}`
                                    : modalMessage}
                            </p>
                            {luckDrawCount <= 0 && playCount >= 3 ? (
                                <>
                                    <p>Are you want to Play Again?</p>
                                    <button className="modal-button mb-3" onClick={handlePlayAgain}>
                                        Yes
                                    </button>
                                    <button
                                        className="modal-button"
                                        onClick={() => {
                                            setLuckDrawCount(0);
                                            setShowModal(false);
                                        }}
                                    >
                                        No
                                    </button>
                                </>
                            ) : (
                                <button className="modal-button" onClick={handleCloseModal}>
                                    OK
                                </button>
                            )}
                        </div>
                    </div>
                )}

                <div className="luckDrawCount">
                    You have <span>{luckDrawCount}</span> draw chances
                </div>

                <div className="wheel-box">
                    <div
                        id="wheel"
                        ref={wheelRef}
                        style={{
                            transition: `transform ${RUN_TIME}s cubic-bezier(0.15, 0.85, 0.3, 1)`,
                        }}
                    >
                        <div className="wheel-inner">{renderWheelSectors()}</div>
                    </div>
                    <div id="arrow" onClick={handleArrowClick}></div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LuckyWheel;
