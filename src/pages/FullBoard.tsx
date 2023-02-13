import React, { useEffect, useState } from 'react'
import Clock from '../components/Clock';
import ClockAnalog from '../components/ClockAnalog';
import Draggable from '../components/common/Draggable/Draggable';
import { HebcalZmanimList } from '../components/HebcalZmanimList';
import ScreenKosherZmanim from '../components/ScreenKosherZmanim';
import ZmanimDay from '../components/ZmanimDay';
import "../styles/FullBoard.scss";
import BoxLogo from '../components/BoxLogo';
import MyClock from '../components/MyClock';

export default function FullBoard() {
    const [ifClock, setIfClock] = useState(true)
    const [myClock, setmyClock] = useState(false)
    const [clockAnalog, setClockAnalog] = useState(false)
    const [ifHebcalZmanimList, setIfHebcalZmanimList] = useState(false)
    const [KosherZmanim, setScreenKosherZmanim] = useState(false);
    const [logo, setlogo] = useState(true);
    const [listday, setlistday] = useState(true);
    const [listshbatt, setlistshbatt] = useState(true)
    const [buttons, setbuttons] = useState(true);

    useEffect(() => {
        console.log(buttons);
    }, [buttons])


    return (
        <div className="fullBoard">
            <div className="box">
                <div className={`${buttons ? "" : "buttons-bord"}`}>
                    <button onClick={() => setIfClock(!ifClock)}>ifClock</button>
                    <button onClick={() => setmyClock(!myClock)}>myClock</button>
                    <button onClick={() => setClockAnalog(!clockAnalog)}>ClockAnalog</button>
                    <button onClick={() => setIfHebcalZmanimList(!ifHebcalZmanimList)}>ifHebcalZmanimList</button>
                    <button onClick={() => setScreenKosherZmanim(!KosherZmanim)}>KosherZmanim</button>
                    <button onClick={() => setlogo(!logo)}>logo</button>
                    <button onClick={() => setlistday(!listday)}>listday</button>
                    <button onClick={() => setlistshbatt(!listshbatt)}>listshbatt</button>
                </div>
                <div className='buttonhide' onClick={() => setbuttons(!buttons)}></div>
                {myClock && (
                    <Draggable key={"MyClock"}>
                        <MyClock />
                    </Draggable>)}
                {clockAnalog && (
                    <Draggable key={"ClockAnalog"}>
                        <ClockAnalog />
                    </Draggable>)}
                {ifHebcalZmanimList &&
                    <Draggable key={"HebcalZmanimList"}>
                        <HebcalZmanimList />
                    </Draggable>}
                {KosherZmanim &&
                    <Draggable key={"ScreenKosherZmanim"}>
                        <ScreenKosherZmanim />
                    </Draggable>}
                {ifClock && (
                    <Draggable key={"Clock"}>
                        <Clock />
                    </Draggable>)}
                {logo &&
                    <Draggable key={"logo"} >
                        <BoxLogo key={7567} title={"בית הכנסת סיני "} />
                    </Draggable>}
                {listday &&
                    <Draggable key={"ZmanimDayh"} >
                        <ZmanimDay key={"ZmanimDayholl"} title={"זמני תפילה חול"} />
                    </Draggable>}
                {listshbatt &&
                    <Draggable key={"ZmanimDay"} >
                        <ZmanimDay key={"onShbatt"} title={"זמני תפילה שבת"} type={'shbatt'} />
                    </Draggable>}
            </div>

        </div>
    )
}
