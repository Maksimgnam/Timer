import "./Timer.css"

import React, { useState, useEffect } from "react";



function Timer() {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                if (seconds === 59) {
                    setMinutes((minutes) => minutes + 1);
                    setSeconds(0);
                } else {
                    setSeconds((seconds) => seconds + 1);
                }
            }, 1000);
        } else if (!isActive && (minutes !== 0 || seconds !== 0)) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, minutes, seconds]);

    function handleStart() {
        setIsActive(true);
    }

    function handleStop() {
        setIsActive(false);
    }

    function handleClear() {
        setIsActive(false);
        setMinutes(0);
        setSeconds(0);
    }

    return (
        <div className="Timer">
            <div className="time__block">
                <h1>
                    Timer: {minutes < 10 ? "0" + minutes : minutes}:
                    {seconds < 10 ? "0" + seconds : seconds}
                </h1>
            </div>
            {!isActive ? (
                <button onClick={handleStart}>Start</button>
            ) : (
                <>
                    <button onClick={handleStop}>Stop</button>
                    <button onClick={handleClear}>Clear</button>
                </>
            )}
        </div>
    );
}

export default Timer;



