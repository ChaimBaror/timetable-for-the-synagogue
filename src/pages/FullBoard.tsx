import React from 'react'
import Clock from '../components/Clock';
import ClockAnalog from '../components/ClockAnalog';
import "../styles/FullBoard.scss";
import { list_zmanim_Tfila, list_zmanim_Tfila_on_shbatt } from '../utils/module';

export default function FullBoard() {
    return (
        <div className="fullBoard">

            <div className="box">

                <div className='logo'>
                <Clock />
                    <div className="circle-logo">
                        <div className="box-logo">
                            <div className='shadow'> בית הכנסת סיני</div>
                        </div>
                    </div>
                <Clock />
                </div>

                <h1 className='title-zaman shadow '>זמני תפילה חול</h1>
                <div className='flex'>
                    {list_zmanim_Tfila.map(({ name, zmanim }) => (
                        <div>
                            <div className="title">{name} </div>
                            <div className="boxSub">{zmanim}</div>
                        </div>)
                    )}
                </div>

                <h1 className='title-zaman shadow '>זמני תפילה שבת</h1>
                <div className='flex'>
                    {list_zmanim_Tfila_on_shbatt.map(({ name, zmanim }) => (
                        <div>
                            <div className="title">{name} </div>
                            <div className="boxSub">{zmanim}</div>
                        </div>)
                    )}
                </div>
            </div>

        </div>
    )
}
