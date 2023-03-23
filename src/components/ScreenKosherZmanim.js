import React, { useEffect } from "react";
import moment from "moment";
import "../styles/loop.scss";
import ItemList from "./common/list/ItemList";
import FromKosherZmanim from "../hooks/useFromKosherZmanim";


const list_zmanim = [
    { name: "עלות השחר", zmanim: "AlosHashachar" },
    { name: "זריחה", zmanim: "Sunrise" },
    { name: 'סוף זמן ק"ש מג"א', zmanim: "SofZmanShmaMGA" },
    { name: 'סוף זמן ק"ש הגר"א', zmanim: "SofZmanShmaGRA" },
    { name: 'סוף זמן תפילה מג"א', zmanim: "SofZmanTfilaMGA" },
    { name: 'סוף זמן תפילה הגר"א', zmanim: "SofZmanTfilaGRA" },
    { name: 'מנחה קטנה', zmanim: "MinchaKetana" },
    { name: 'פלג המנחה', zmanim: "PlagHamincha" },
    { name: "בין השמשות (18 דקות) ", zmanim: "BainHasmashosYereim18Minutes" },
    { name: "הדלקת נרות", zmanim: "CandleLighting" },
    { name: "שקיעה", zmanim: "Sunset" },
    { name: "צאת הכוכבים", zmanim: "TzaisGeonim4Point37Degrees" },
    { name: 'את הכוכבים בעל התני"א', zmanim: "TzaisBaalHatanya" },
    { name: 'צאת הכוכבים ר"ת', zmanim: "Tzais72" },

]

const ScreenKosherZmanim = () => {

    return (
        <div className='bodydiv1'>
            <div dir="rtl" className='div-lo'>
                {/* <h1 className='date_information'>זמני היום</h1> */}
                {list_zmanim.map(({ name, zmanim }) => (
                    <div className="ploop"> {name} : {moment(FromKosherZmanim([zmanim])).format(' HH:mm ')} </div>)
                    // <ItemList key={name} name={`${name}:`} zmanim={moment(FromKosherZmanim([zmanim])).format(' HH:mm:ss ')} />)
                )}
            </div>
        </div >
    )
}

export default ScreenKosherZmanim;
