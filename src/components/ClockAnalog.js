import React, { useState, useEffect } from 'react';
import AnalogClock from 'analog-clock-react';

const ClockAnalog = () => {
    const [options, setOptions] = useState({
        // useCustomTime: true,
        width: "300px",
        border: true,
        borderColor: "#50bfff",
        baseColor: "#99daff",
        centerColor: "#99daff",
        centerBorderColor: "#50bfff",
        handColors: {
            second: "#d81c7a",
            minute: "#ffffff",
            hour: "#ffffff"
        },
    })



    // useEffect(() => {

    //     const ausTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Jerusalem" });
    //     const date = new Date(ausTime);
    //     setOptions((pev)=>pev , {
    //         seconds: date.getSeconds(),
    //         minutes: date.getMinutes(),
    //         hours: date.getHours()})

    // },)

    // const options = {
    //     // useCustomTime: true,
    //     width: "150px",
    //     border: true,
    //     borderColor: "#50bfff",
    //     baseColor: "#99daff",
    //     centerColor: "#99daff",
    //     centerBorderColor: "#50bfff",
    //     handColors: {
    //         second: "#d81c7a",
    //         minute: "#ffffff",
    //         hour: "#ffffff"
    //     },
    //     seconds: date.getSeconds(),
    //     minutes: date.getMinutes(),
    //     hours: date.getHours()
    // };

    return (
        <div className='continer'>
            <AnalogClock {...options} />
        </div >
    )
}

export default ClockAnalog;
