import React, { useState } from 'react'
import '../styles/Clock.scss'

const Clock: React.FC = () => {
    const [newTime, setNewTime] = useState('');

    const displayClock = () => {
        const display = new Date().toLocaleTimeString();
        setNewTime(display);
    }
    setTimeout(displayClock, 1000);
    return (
        <div className='clock'>
            {newTime}
        </div>

    )
}

export default Clock;