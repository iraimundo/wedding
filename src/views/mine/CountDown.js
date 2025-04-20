import React, { useState, useEffect } from 'react';
const Countdown = () => {

    const calculateTimeLeft = () => {
        const dataCasamento = new Date(2025, 7, 16);
        const hoje = new Date();
        const difference = dataCasamento-hoje;

        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
                horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutos: Math.floor((difference / 1000 / 60) % 60)
            };
        }
        return timeLeft;
    };
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });
    const timerComponents = [];
    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }
        timerComponents.push(
            <span key={interval}>
                <div className="box1">
                    <h3 className="time-numbers">{timeLeft[interval]}</h3>
                    <h4 className="time-words">{interval}{" "}</h4>
                </div>

            </span>
        );
    });
    return (
        <div>
            <span className="h3-mine" id="hoje"></span>
            {timerComponents.length ? timerComponents : <span>É hoje!</span>}
        </div>
    );
    };
    export default Countdown;