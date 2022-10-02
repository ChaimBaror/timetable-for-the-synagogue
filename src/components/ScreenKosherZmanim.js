import React, { useEffect } from "react";
import { getZmanimJson, HebrewDateFormatter, JewishCalendar, } from "kosher-zmanim";
import Hebcal from "hebcal";
import moment from "moment";
import "../styles/ScreenKosherZmanim.scss";
import ItemList from "./ItemList";
import { list_zmanim, list_zmanim_Tfila } from '../utils/module'


const ScreenKosherZmanim = () => {
    const myDate = new Date();
    const location = '32.074663';
    const jewishCalendar = new JewishCalendar(myDate);
    const hebrewDateFormatter = new HebrewDateFormatter();
    const hebcal = new Hebcal.HDate(myDate);
    hebcal.setLocation(+location.latitude, +location.longitude);

    const options = {
        date: myDate,
        latitude: location,
        longitude: location,
        complexZmanim: true,
        timeZoneId: "Asia/Jerusalem",
        locationName: "Asia/Jerusalem",
        elevation: 0,
    }

    const zmanim = getZmanimJson(options);

    const basicZmanim = zmanim.Zmanim;

    return (
        <div className='continer'>
            <div className='list_of_zmanim'>
                <h1 className='date_information'>זמני היום</h1>
                {list_zmanim.map(({ name, zmanim }) => (
                    <ItemList key={name} name={`${name}:`} zmanim={moment(new Date(basicZmanim[zmanim])).format(' HH:mm:ss ')} />)
                )}
            </div>
        </div >
    )
}

export default ScreenKosherZmanim;
