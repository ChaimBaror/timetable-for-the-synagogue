import React, { useEffect } from "react";
import Hebcal from "hebcal";

// import * as KosherZmanim from "kosher-zmanim";
import {
    Calendar,
    Daf,
    getZmanimJson,
    HebrewDateFormatter,
    JewishCalendar,
    JewishDate,
    Options,
    YerushalmiYomiCalculator,
    YomiCalculator,
    Zman,
    Parsha
} from "kosher-zmanim";
import moment from "moment";
import ClockAnalog from "./ClockAnalog";
import "../styles/ScreenKosherZmanim.scss";

const ScreenKosherZmanim = () => {
    const myDate = new Date();
    // myDate.setDate(myDate.getDate() + 2);
    const location = '32.074663';
    const jewishCalendar = new JewishCalendar(myDate);
    // const jewishDate = new JewishDate(myDate);
    const hebrewDateFormatter = new HebrewDateFormatter();
    // console.log(HebrewDateFormatter.hebrewDaysOfWeek);
    // console.log(jewishCalendar.getDayOfWeek());
    // console.log(">>> ", Daf);

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
            <div className='date_information'>
                <div className='date_information_text'>
                    יום {HebrewDateFormatter.hebrewDaysOfWeek[hebcal.getDay()]} {hebcal.toString('h')} ({moment(myDate).format('DD/MM/YYYY ')})
                </div>
                <div className='date_information_text'>
                    פרשת {hebcal.getSedra('h')}
                </div>
                {/* <div>
                    <ClockAnalog />
                </div> */}
            </div>
            {/* <SpinnerOnly />  */}

            <div className='list_of_zmanim'>
                <div className='list_item'>
                    <div className='item_time'>
                        {moment(new Date(basicZmanim.AlosHashachar)).format(' HH:mm:ss ')}
                    </div>
                    <div dir='auto' className='item_text'>
                        עלות השחר:
                    </div>
                </div >
                <div className='list_item'>
                    <div className='item_time'>
                        {moment(new Date(basicZmanim.Sunrise)).format(' HH:mm:ss ')}
                    </div>
                    <div dir='auto' className='item_text'>
                        זריחה:
                    </div>
                </div >
                <div className='list_item'>
                    <div className='item_time'>
                        {moment(new Date(basicZmanim.SofZmanShmaMGA)).format(' HH:mm:ss ')}
                    </div>
                    <div dir='auto' className='item_text'>
                        סוף זמן שמע מג"א:
                    </div>
                </div >
                <div className='list_item'>
                    <div className='item_time'>
                        {moment(new Date(basicZmanim.SofZmanShmaGRA)).format(' HH:mm:ss ')}
                    </div>
                    <div dir='auto' className='item_text'>
                        סוף זמן שמע גר"א/בעל התניא:
                    </div>
                </div >
                <div className='list_item'>
                    <div className='item_time'>
                        {moment(new Date(basicZmanim.SofZmanTfilaMGA)).format(' HH:mm:ss ')}
                    </div>
                    <div dir='auto' className='item_text'>
                        סוף זמן תפילה מג"א:
                    </div>
                </div >
                <div className='list_item'>
                    <div className='item_time'>
                        {moment(new Date(basicZmanim.SofZmanTfilaGRA)).format(' HH:mm:ss ')}
                    </div>
                    <div dir='auto' className='item_text'>
                        סוף זמן תפלה בעל התניא /גר"א:
                    </div>
                </div >
                <div className='list_item'>
                    <div className='item_time'>
                        {moment(new Date(basicZmanim.BainHasmashosYereim18Minutes)).format(' HH:mm:ss ')}
                    </div>
                    <div dir='auto' className='item_text'>
                        בין השמשות (18 דקות):
                    </div>
                </div >
                {jewishCalendar.getDayOfWeek() == 6 && <div className='list_item'>
                    <div className='item_time'>
                        {moment(new Date(basicZmanim.CandleLighting)).format(' HH:mm:ss ')}
                    </div>
                    <div dir='auto' className='item_text'>
                        הדלקת נרות:
                    </div>
                </div >}
                <div className='list_item'>
                    <div className='item_time'>
                        {moment(new Date(basicZmanim.Sunset)).format(' HH:mm:ss ')}
                    </div>
                    <div dir='auto' className='item_text'>
                        שקיעת החמה:
                    </div>
                </div >
                <div className='list_item'>
                    <div className='item_time'>
                        {moment(new Date(basicZmanim.TzaisGeonim4Point37Degrees)).format(' HH:mm:ss ')}
                    </div>
                    <div dir='auto' className='item_text'>
                        צאת הכוכבים גאונים (4 נקודות 7 מעלות):
                    </div>
                </div >
                <div className='list_item'>
                    <div className='item_time'>
                        {moment(new Date(basicZmanim.TzaisBaalHatanya)).format(' HH:mm:ss ')}
                    </div>
                    <div dir='auto' className='item_text'>
                        צאת הכוכבים בעל התניא:
                    </div>
                </div >
                <div className='list_item'>
                    <div className='item_time'>
                        {moment(new Date(basicZmanim.Tzais72)).format(' HH:mm:ss ')}
                    </div>
                    <div dir='auto' className='item_text'>
                        צאת הכוכבים ר"ת (72):
                    </div>
                </div >
                <div className='list_item'>
                    <div class="w-50 text-center">
                        {hebcal.dafyomi('h')}
                    </div>
                    <div dir='auto' class="w-50 text-rigth">
                        דף יומי:
                    </div>
                </div >
                <div class="w-100 center-all">


                </div>

            </div >
        </div >
    )
}

export default ScreenKosherZmanim;
