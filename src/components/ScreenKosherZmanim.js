import React, { useEffect } from "react";
import { getZmanimJson, HebrewDateFormatter, JewishCalendar, } from "kosher-zmanim";
import Hebcal from "hebcal";
import moment from "moment";
import "../styles/ScreenKosherZmanim.scss";
import ItemList from "./common/list/ItemList";
import { list_zmanim, list_zmanim_Tfila } from '../utils/module'


const ScreenKosherZmanim = () => {
    const myDate = new Date();
    const Latitude= 32.0833;
    const Longitude= 34.8333;
    const jewishCalendar = new JewishCalendar(myDate);
    const hebrewDateFormatter = new HebrewDateFormatter();
    const hebcal = new Hebcal.HDate(myDate);
    hebcal.setLocation(Latitude, Longitude);

    const options = {
        date: myDate,
        latitude: Latitude,
        longitude: Longitude,
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
