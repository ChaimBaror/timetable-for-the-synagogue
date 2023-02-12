import React from 'react'
import Hebcal from "hebcal";
import { HebrewDateFormatter, } from "kosher-zmanim";
import moment from "moment";
import { useSelector } from 'react-redux'
import Selectlocations from './common/Select/selectlocations';

const HebcalZmanim = () => {
    const { location } = useSelector(state => state)

    const myDate = new Date();
    const Latitude = location.Latitude;
    const Longitude = location.Longitude;
    const hebcal = new Hebcal.HDate(myDate);
    hebcal.setCity(location.name);
    hebcal.setLocation(Latitude, Longitude);

    let Zemanim = hebcal.getZemanim('h')

    console.log("hebcal :", hebcal.getYearObject("h"));


    return (
        <div>
            <div className='date_information'>
                <div className='date_information_text'>
                    יום {HebrewDateFormatter.hebrewDaysOfWeek[hebcal.getDay()]} {hebcal.toString('h')} ({moment(myDate).format('DD/MM/YYYY ')})
                </div>
                <div className='date_information_text'>
                    פרשת {hebcal.getSedra('h')}
                </div>
                <div className='list_item'>
                    <div dir='auto' className="w-50 text-rigth">
                        דף יומי:
                    </div>
                    <div className="w-50 text-center">
                        {hebcal.dafyomi('h')}
                    </div>
                </div >
            </div>

        </div>
    )
}

export default HebcalZmanim;