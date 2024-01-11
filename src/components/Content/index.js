import React from "react"
import { useState } from "react";
import '../../index.css';

function Content(props){
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);

    const [pause, setPause] = useState("0px solid white")

    const [hoursDisplay, setHoursDisplay] = useState("none");
    const [minutesDisplay, setMinutesDisplay] = useState("none");
    const [resetButtonDispaly, setResetButtonDispaly] = useState("none")

    const [startStopButton, setStartStopButton] = useState("Start")
    const [intervalID, setIntervalID] = useState(null);

    let secondsCounter = 0;
    let minutesCounter = 0;
    
    const increment = () => {
        if(secondsCounter === 59){
            secondsCounter = 0;
            setSeconds(0);
            setMinutes(minutes => minutes + 1);
            setMinutesDisplay("flex");
            minutesCounter++;
        }
        else{
            setSeconds(seconds => seconds + 1);
            secondsCounter++;
        }

        if (minutesCounter === 59){
            minutesCounter = 0;
             setMinutes(0);
             setHours(hours => hours + 1);
             setHoursDisplay("flex");
        }
    }

    const stopwatchStartStop = () => {
        if (startStopButton === "Start"){
            setStartStopButton("Stop");
            setResetButtonDispaly("flex");
            setSeconds(0);
            setMinutes(0);
            setHours(0);
            setHoursDisplay("none");
            setMinutesDisplay("none");
            setPause("0px solid white");
            if (intervalID === null) setIntervalID(setInterval(increment, 1000));
        }
        else{
            setStartStopButton("Start"); 
            setResetButtonDispaly("none");
            secondsCounter = 0;
            minutesCounter = 0;
            clearInterval(intervalID); 
            setIntervalID(null);
        }
    }
    const stopwatchReset = () => {
        setSeconds(0);
        setMinutes(0);
        setHours(0);
        setHoursDisplay("none");
        setMinutesDisplay("none");
        setPause("0px solid white");
        clearInterval(intervalID); 
        setIntervalID(setInterval(increment, 1000));
    }
    const stopwatchPause = () => {
        switch(pause){
            case "0px solid white":
                setPause("5px solid white");
                clearInterval(intervalID); 
                break;
            case "5px solid white":
                setPause("0px solid white");
                setIntervalID(setInterval(increment, 1000));
                break;
        }
    }
    return(
        <div className='stopwatchContainer'>
            <div className='stopwatch' onClick={stopwatchPause}>
                <div className='time' style={{border:pause}}>
                    <p className='hours' style={{display:hoursDisplay}}>{hours}:</p> 
                    <p className='minutes' style={{display:minutesDisplay}}>{minutes}:</p> 
                    <p className='seconds'>{seconds}</p> 
                </div>
            </div>
        
            <div className='stopwatchButtonsContainer'>
                <button className='stopwatchButtons' onClick={stopwatchStartStop}>{startStopButton}</button>
                <button className='stopwatchButtons' onClick={stopwatchReset} style={{display:resetButtonDispaly}}>Reset</button>
            </div>
        </div>
    )
}

export default Content;