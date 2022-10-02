import React, { useState, useEffect } from 'react';
import AnalogClock from 'analog-clock-react';

const ClockAnalog = () => {
    const [options, setOptions] = useState({
        // useCustomTime: true,
        width: "250px",
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


    return (
        <div className='continer'>
            <AnalogClock {...options} />
        </div >
    )
}

export default ClockAnalog;
