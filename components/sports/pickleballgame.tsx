"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ballImg from '@/assets/sports/pickleball.png';

interface BallProps {
    id: number;
    speed: number;
    top: number;
    direction: 'ltr' | 'rtl';
    onPop: (id: number) => void;
    onComplete: (id: number) => void;
}

const SingleBall: React.FC<BallProps> = ({ id, speed, top, direction, onPop, onComplete }) => {
    const ballRef = useRef<HTMLDivElement>(null);

    const onCompleteRef = useRef(onComplete);
    useEffect(() => {
        onCompleteRef.current = onComplete;
    }, [onComplete]);

    useEffect(() => {
        const el = ballRef.current;
        if (!el) return;

        const startX = direction === 'ltr' ? -150 : window.innerWidth + 150;
        const endX = direction === 'ltr' ? window.innerWidth + 150 : -150;

        const tween = gsap.fromTo(el,
            { x: startX, rotation: 0 },
            {
                x: endX,
                rotation: direction === 'ltr' ? 360 * Math.max(1, Math.floor(speed / 2)) : -360 * Math.max(1, Math.floor(speed / 2)),
                duration: speed,
                ease: "none",
                onComplete: () => {
                    onCompleteRef.current(id);
                }
            }
        );

        return () => {
            tween.kill();
        };
    }, []); // Removed [speed, direction, id] to prevent killing tween on re-renders

    return (
        <div
            ref={ballRef}
            className="absolute cursor-pointer w-16 h-16 md:w-20 md:h-20 hover:scale-110 transition-transform z-20 pointer-events-auto left-0"
            style={{ top: `${top}%` }}
            onMouseDown={(e) => {
                e.preventDefault();
                onPop(id);
            }}
            onTouchStart={(e) => {
                e.preventDefault();
                onPop(id);
            }}
        >
            <Image src={ballImg} alt="Pickleball" fill className="object-contain" />
        </div>
    );
};

const PickleballGame = () => {
    const [score, setScore] = useState(0);
    const scoreRef = useRef(0);
    const nextIdRef = useRef(5);

    const createRandomBall = (currentScore: number, existingBalls: { top: number }[]) => {
        const baseSpeed = Math.max(2.5, 5 - (currentScore * 0.2));
        const speed = baseSpeed + (Math.random() * 2);

        let top = 10 + (Math.random() * 70);
        let attempts = 0;

        // Anti-overlap logic to ensure no balls span too close to each other vertically
        while (attempts < 10) {
            const isOverlapping = existingBalls.some(b => Math.abs(b.top - top) < 12);
            if (!isOverlapping) break;
            top = 10 + (Math.random() * 70);
            attempts++;
        }

        const direction = Math.random() > 0.5 ? 'ltr' as const : 'rtl' as const;
        const id = nextIdRef.current++;
        return { id, speed, top, direction };
    };

    const [balls, setBalls] = useState([
        { id: 1, speed: 6, top: 15, direction: 'ltr' as const },
        { id: 2, speed: 7, top: 40, direction: 'rtl' as const },
        { id: 3, speed: 5.5, top: 65, direction: 'ltr' as const },
        { id: 4, speed: 8, top: 80, direction: 'rtl' as const },
    ]);

    const handleBallComplete = (completedId: number) => {
        setBalls(prev => {
            const activeBalls = prev.filter(b => b.id !== completedId);
            if (activeBalls.length === prev.length) return prev; // It was already clicked

            const replacement = createRandomBall(scoreRef.current, activeBalls);
            return [...activeBalls, replacement];
        });
    };

    const handleBallClick = (clickedId: number) => {
        const newScore = scoreRef.current + 1;
        scoreRef.current = newScore;
        setScore(newScore);

        setBalls(prev => {
            const activeBalls = prev.filter(b => b.id !== clickedId);

            // Hard cap at 15
            if (activeBalls.length >= 15) {
                const b1 = createRandomBall(newScore, activeBalls);
                return [...activeBalls, b1];
            }

            const b1 = createRandomBall(newScore, activeBalls);
            const activeWithB1 = [...activeBalls, b1];

            // Check again before adding a second ball
            if (activeWithB1.length >= 15) {
                return activeWithB1;
            }

            const b2 = createRandomBall(newScore, activeWithB1);
            return [...activeWithB1, b2];
        });
    };

    return (
        <section className="relative w-full py-32 bg-white overflow-hidden select-none">

            {/* Background Balls Area */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                {balls.map(ball => (
                    <SingleBall
                        key={ball.id}
                        id={ball.id}
                        speed={ball.speed}
                        top={ball.top}
                        direction={ball.direction}
                        onPop={handleBallClick}
                        onComplete={handleBallComplete}
                    />
                ))}
            </div>

            {/* Center Text Content */}
            <div className="relative z-10 max-w-7xl mx-auto text-center px-4 md:px-8 flex flex-col items-center justify-center pointer-events-none">
                <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-normal text-black mb-6 whitespace-nowrap">
                    Introducing <span className="font-ppe italic font-light text-[#000086]">Pickleball</span>
                </h2>

                <p className="text-gray-800 text-sm md:text-base lg:text-[2rem] leading-[1.2] mb-12">
                    Pickleball, the newest addition to the RAKS sports programme, blends agility, strategy, coordination, and fun while promoting inclusive participation, quick decision-making, strong team communication, and <br /> <span className="font-ppe italic font-lightF">lifelong fitness habits.</span>
                </p>

                <div className="text-2xl md:text-3xl font-ppe italic font-light text-black">
                    Score: {score}
                </div>
            </div>

        </section>
    );
};

export default PickleballGame;