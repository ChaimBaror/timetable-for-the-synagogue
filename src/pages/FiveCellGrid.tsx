import React from 'react'
import ClockAnalog from '../components/ClockAnalog'
import ItemList from '../components/common/list/ItemList'
import ScreenKosherZmanim from '../components/ScreenKosherZmanim'
import { list_zmanim_Tfila } from '../utils/module'
import "../styles/ScreenKosherZmanim.scss";
import HebcalZmanim from '../components/HebcalZmanim'
import Clock from '../components/Clock'

const FiveCellGrid: React.FC = () => {
    const footertext = 'הלימוד והתפילות לע"נ יצחק מנדל בן ר אהרון * הברכות להצלחת חיים מרדכי בן ר יוסף  * הלימוד לרפואת אילן ישי בן שושנה'
    return (
        <>

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
                        <Clock />
                        <ClockAnalog />
                    </div>
                </div>
                <div><ScreenKosherZmanim /></div>
            </div >
            <div className='footer'>
                <div className="marquee-section">
                    <div className="marquee-div">
                        <div className="marquee loop">
                            &bull; {footertext}   &bull;  {footertext} &bull;  {footertext} &bull;</div>
                    </div>
                </div>
            </div>
                <div className="loop ">
                    <div className="bg-marquee"></div>
                </div>
        </>

    )
}

export default FiveCellGrid