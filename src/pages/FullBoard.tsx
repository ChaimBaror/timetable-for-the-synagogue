import React from 'react'
import Clock from '../components/Clock';
import ClockAnalog from '../components/ClockAnalog';
import Draggable from '../components/common/Draggable/Draggable';
import { HebcalZmanimList } from '../components/HebcalZmanimList';
import "../styles/FullBoard.scss";
import { list_zmanim_Tfila, list_zmanim_Tfila_on_shbatt } from '../utils/module';

export default function FullBoard() {

    return (
        <div className="fullBoard">

            <div className="box">
                <div className='logo'>
                    <Draggable >
                        <HebcalZmanimList />
                    </Draggable>
                    <Draggable >

                        <Clock />
                    </Draggable>
                    <Draggable key={"0999"} >

                        <div className="circle-logo">
                            <div className="box-logo">
                                <div className='shadow'> בית הכנסת סיני</div>
                            </div>
                        </div>
                    </Draggable>
                    <Draggable key={"0332"} >
                        <Clock />
                    </Draggable>

                </div>

                <Draggable key={"0932"} >
                    <>
                        <div className='title-zaman shadow '>זמני תפילה חול</div>
                        <div className='flex'>
                            {list_zmanim_Tfila.map(({ name, zmanim }) => (
                                <div>
                                    <div className="title">{name} </div>
                                    <div className="boxSub">{zmanim}</div>
                                </div>
                            )
                            )}
                        </div>
                    </>
                </Draggable>
                <Draggable key={"0932"} >
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
                </Draggable>
            </div>

        </div>
    )
}
