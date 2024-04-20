import React, { useState } from 'react';
const Stopwatch = () => {
const [timer, setTimer] = useState(0);
const [isRunning, setIsRunning] = useState(false);
const [timerId, setTimerId] = useState(null);
const startTimer = () => {
setIsRunning(true);
const id = setInterval(() => {
setTimer((prevTimer) => prevTimer + 1);
}, 1000);
setTimerId(id);
};
const stopTimer = () => {
clearInterval(timerId);
setIsRunning(false);
};
const resetTimer = () => {
clearInterval(timerId);
setTimer(0);
};
const formatTime = (time) => {
const minutes = Math.floor(time / 60);
const seconds = time % 60;
return `${minutes.toString().padStart(2,
'0')}:${seconds.toString().padStart(2, '0')}`;
};
return (
<div>
Timer: {formatTime(timer)}<br />

{isRunning ? (
<button onClick={stopTimer}>Stop</button>
) : (
<button onClick={startTimer}>Start</button>
)}
<button onClick={resetTimer}>Reset</button>
</div>
);
};
export default Stopwatch;