import React from 'react'
import "../styles/FullBoard.scss";
import { list_zmanim_Tfila, list_zmanim_Tfila_on_shbatt } from '../utils/module';

export default function FullBoard() {
    return (
        <div className="fullBoard">

            <div className="box">
            <div className='logo'>
                <div className="circle-logo">
                    <div className="box-logo">
                        <h3 className='shadow'> בית הכנסת סיני</h3>
                    </div>
                </div>
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
