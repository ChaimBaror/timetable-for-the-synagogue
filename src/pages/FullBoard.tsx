import React, { useEffect, useState } from 'react'
import Clock from '../components/Clock';
import ClockAnalog from '../components/ClockAnalog';
import Draggable from '../components/common/Draggable/Draggable';
import { HebcalZmanimList } from '../components/HebcalZmanimList';
import ScreenKosherZmanim from '../components/ScreenKosherZmanim';
import ZmanimDay from '../components/ZmanimDay';
import "../styles/FullBoard.scss";
import { list_zmanim_Tfila_on_shbatt } from '../utils/module';

export default function FullBoard() {
    const [ifClock, setIfClock] = useState(true)
    const [ifHebcalZmanimList, setIfHebcalZmanimList] = useState(false)
    const [KosherZmanim, setScreenKosherZmanim] = useState(false);
    const [logo, setlogp] = useState(true);
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
                    <button onClick={() => setIfHebcalZmanimList(!ifHebcalZmanimList)}>ifHebcalZmanimList</button>
                    <button onClick={() => setScreenKosherZmanim(!KosherZmanim)}>KosherZmanim</button>
                    <button onClick={() => setlogp(!logo)}>logo</button>
                    <button onClick={() => setlistday(!listday)}>listday</button>
                    <button onClick={() => setlistshbatt(!listshbatt)}>listshbatt</button>
                </div>
                <div className='buttonhide' onClick={() => setbuttons(!buttons)}></div>

                <div className='logo'>
                    {ifHebcalZmanimList &&
                        <Draggable key={"0999d"}>
                            <HebcalZmanimList />
                        </Draggable>}
                    {KosherZmanim &&
                        <Draggable key={"0999s"}>
                            <ScreenKosherZmanim />
                        </Draggable>}
                    {ifClock && (
                        <Draggable key={"0999a"}>
                            <Clock />
                        </Draggable>)}

                    {logo &&
                        <Draggable key={"0999"} >
                            <div className="circle-logo">
                                <div className="box-logo">
                                    <div className='shadow'> בית הכנסת סיני</div>
                                </div>
                            </div>
                        </Draggable>}
                    {ifClock && (
                        <Draggable key={"09991"}>
                            <Clock />
                        </Draggable>)}
                </div>
                {listday &&
                    <Draggable key={"093list"} >
                            <ZmanimDay title={"זמני תפילה חול"} />
                    </Draggable>}
                {listshbatt && <Draggable key={"0932"} >
                    <>
                        <h1 className='title-zaman shadow '>זמני תפילה שבת</h1>
                        <div className='flex'>
                            {list_zmanim_Tfila_on_shbatt.map(({ name, zmanim }) => (
                                <div>
                                    <div className="title">{name} </div>
                                    <div className="boxSub">{zmanim}</div>
                                </div>)
                            )}
                        </div>
                    </>
                </Draggable>}
            </div>

        </div>
    )
}
