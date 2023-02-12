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
import { LoopInfiniti } from '../components/LoopInfiniti';

export default function FullBoard() {
    const [ifClock, setIfClock] = useState(true)
    const [myClock, setmyClock] = useState(false)
    const [clockAnalog, setClockAnalog] = useState(false)
    const [ifHebcalZmanimList, setIfHebcalZmanimList] = useState(false)
    const [KosherZmanim, setScreenKosherZmanim] = useState(false);
    const [logo, setlogo] = useState(true);
    const [listday, setlistday] = useState(false);
    const [listshbatt, setlistshbatt] = useState(false)
    const [buttons, setbuttons] = useState(true);

    useEffect(() => {
        console.log(buttons);
    }, [buttons])


    return (
        <div className="fullBoard">
            <div className="box">
                <div className={`${buttons ? "buttons-grups" : "buttons-bord"}`}>
                    <button className={ifClock ? "button active " :'button'} onClick={() => setIfClock(!ifClock)}>ifClock</button>
                    <button className={myClock ? "button active" :'button'} onClick={() => setmyClock(!myClock)}>myClock</button>
                    <button className={clockAnalog ? "button active" :'button'} onClick={() => setClockAnalog(!clockAnalog)}>ClockAnalog</button>
                    <button className={ifHebcalZmanimList ? "button active" :'button'} onClick={() => setIfHebcalZmanimList(!ifHebcalZmanimList)}>ifHebcalZmanimList</button>
                    <button className={KosherZmanim ? "button active" :'button'} onClick={() => setScreenKosherZmanim(!KosherZmanim)}>KosherZmanim</button>
                    <button className={logo ? "button active" :'button'} onClick={() => setlogo(!logo)}>logo</button>
                    <button className={listday ? "button active" :'button'} onClick={() => setlistday(!listday)}>listday</button>
                    <button className={listshbatt ? "button active" :'button'} onClick={() => setlistshbatt(!listshbatt)}>listshbatt</button>
                </div>
                <div className='buttonhide' onClick={() => setbuttons(!buttons)} />

                {myClock && (
                    <Draggable key={"MyClock"}>
                        {/* <MyClock /> */}
                        <LoopInfiniti/>
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
