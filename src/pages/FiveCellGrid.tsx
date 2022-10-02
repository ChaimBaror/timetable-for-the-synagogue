import React from 'react'
import ClockAnalog from '../components/ClockAnalog'
import ItemList from '../components/ItemList'
import ScreenKosherZmanim from '../components/ScreenKosherZmanim'
import { list_zmanim_Tfila } from '../utils/module'
import "../styles/ScreenKosherZmanim.scss";
import HebcalZmanim from '../components/HebcalZmanim'

const FiveCellGrid = () => {
    return (
        <div className='continer'>
            <div className='list_of_zmanim'>
                <h1 className='date_information'>זמני תפילה</h1>
                {list_zmanim_Tfila.map(({ name, zmanim }) => (
                    <ItemList key={name} name={`${name}:`} zmanim={zmanim} />)
                )}
            </div>
            <div>
            <HebcalZmanim />
                <div className="ClockAnalog">
                    <ClockAnalog />
                </div>
            </div>
            <div><ScreenKosherZmanim /></div>
        </div >
    )
}

export default FiveCellGrid