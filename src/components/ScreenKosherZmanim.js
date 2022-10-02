import React, { useEffect } from "react";
import { getZmanimJson, HebrewDateFormatter, JewishCalendar, } from "kosher-zmanim";
import Hebcal from "hebcal";
import moment from "moment";
import "../styles/ScreenKosherZmanim.scss";
import ItemList from "./ItemList";

const list_zmanim = [
    { name: "עלות השחר", zmanim: "AlosHashachar" },
    { name: "זריחה", zmanim: "Sunrise" },
    { name: 'סוף זמן ק"ש מג"א', zmanim: "SofZmanShmaMGA" },
    { name: 'סוף זמן ק"ש הגר"א', zmanim: "SofZmanShmaGRA" },
    { name: 'סוף זמן תפילה מג"א', zmanim: "SofZmanTfilaMGA" },
    { name: 'סוף זמן תפילה הגר"א', zmanim: "SofZmanTfilaGRA" },
    { name: "בין השמשות (18 דקות) ", zmanim: "BainHasmashosYereim18Minutes" },
    { name: "הדלקת נרות", zmanim: "CandleLighting" },
    { name: "שקיעה", zmanim: "Sunset" },
    { name: "צאת הכוכבים", zmanim: "TzaisGeonim4Point37Degrees" },
    { name: 'את הכוכבים בעל התני"א', zmanim: "TzaisBaalHatanya" },
    { name: 'צאת הכוכבים ר"ת', zmanim: "Tzais72" },
    

]

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
    console.log("basicZmanim : ",basicZmanim);

    return (
        <div className='continer'>
            <div className='date_information'>
                <div className='date_information_text'>
                    יום {HebrewDateFormatter.hebrewDaysOfWeek[hebcal.getDay()]} {hebcal.toString('h')} ({moment(myDate).format('DD/MM/YYYY ')})
                </div>
                <div className='date_information_text'>
                    פרשת {hebcal.getSedra('h')}
                </div>
            </div>
            <div className='list_of_zmanim'>
                {list_zmanim.map(({ name, zmanim }) => (
                    <ItemList key={name} name={`${name}:`} zmanim={moment(new Date(basicZmanim[zmanim])).format(' HH:mm:ss ')} />)
                )}

                <div className='list_item'>
                    <div class="w-50 text-center">
                        {hebcal.dafyomi('h')}
                    </div>
                    <div dir='auto' className="w-50 text-rigth">
                        דף יומי:
                    </div>
                </div >
            </div>
        </div >
    )
}

export default ScreenKosherZmanim;
