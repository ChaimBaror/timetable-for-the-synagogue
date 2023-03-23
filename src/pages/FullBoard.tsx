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
import Popup from 'reactjs-popup';

export default function FullBoard() {
    const [ifClock, setIfClock] = useState(true)
    const [myClock, setmyClock] = useState(true)
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
                <Popup

                 trigger={
                    <div className='buttonhide' onClick={() => setbuttons(!buttons)} />
                } position="center center">
                    <div className={`${buttons ? "buttons-grups" : "buttons-bord"}`}>
                        <button className={ifClock ? "button active " : 'button'} onClick={() => setIfClock(!ifClock)}>ifClock</button>
                        <button className={myClock ? "button active" : 'button'} onClick={() => setmyClock(!myClock)}>myClock</button>
                        <button className={clockAnalog ? "button active" : 'button'} onClick={() => setClockAnalog(!clockAnalog)}>ClockAnalog</button>
                        <button className={ifHebcalZmanimList ? "button active" : 'button'} onClick={() => setIfHebcalZmanimList(!ifHebcalZmanimList)}>ifHebcalZmanimList</button>
                        <button className={KosherZmanim ? "button active" : 'button'} onClick={() => setScreenKosherZmanim(!KosherZmanim)}>KosherZmanim</button>
                        <button className={logo ? "button active" : 'button'} onClick={() => setlogo(!logo)}>logo</button>
                        <button className={listday ? "button active" : 'button'} onClick={() => setlistday(!listday)}>listday</button>
                        <button className={listshbatt ? "button active" : 'button'} onClick={() => setlistshbatt(!listshbatt)}>listshbatt</button>
                    </div>
                </Popup>


                {myClock && (
                    <Draggable key={"MyClock"} width={'267px'} height={'264px'} x={1597} y={-107} >
                        <MyClock />
                        {/* <LoopInfiniti/> */}
                    </Draggable>)}
                {clockAnalog && (
                    <Draggable key={"ClockAnalog"}>
                        <LoopInfiniti />
                    </Draggable>)}
                {ifHebcalZmanimList &&
                    <Draggable key={"HebcalZmanimList"} x={76} y={-248}>
                        <HebcalZmanimList />
                    </Draggable>}
                {KosherZmanim &&
                    <Draggable key={"ScreenKosherZmanim"} x={76} y={-248}>
                        <ScreenKosherZmanim />
                    </Draggable>}
                {ifClock && (
                    <Draggable key={"Clock"} width={'123px'} height={'51px'} x={1666} y={52}>
                        <Clock />
                    </Draggable>)}
                {logo &&
                    <Draggable key={"logo"} x={808} y={-242} >
                        <BoxLogo key={7567} title={"בית הכנסת סיני "} />
                    </Draggable>}
                {listday &&
                    <Draggable key={"ZmanimDayh"} x={95} y={-40} width={"1665px"}>
                        <ZmanimDay key={"ZmanimDayholl"} title={"זמני תפילה חול"} />
                    </Draggable>}
                {listshbatt &&
                    <Draggable key={"ZmanimDay"} width={'1737px'} x={88} y={136}>
                        <ZmanimDay key={"onShbatt"} title={"זמני תפילה שבת"} type={'shbatt'} />
                    </Draggable>}
            </div>

        </div>
    )
}
