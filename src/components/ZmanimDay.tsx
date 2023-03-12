import moment from 'moment';
import React, { useEffect, useState } from 'react'
import useFromKosherZmanim from '../hooks/useFromKosherZmanim';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Popup from 'reactjs-popup';
import ItemList from './common/list/ItemList';
import '../styles/PopupStyle.scss'
import PopupEdit from './common/popup/PopupEdit';

interface Title {
    title: string;
    type?: string;
}

export default function ZmanimDay(props: Title): JSX.Element {
    const { title, type = "Zmanim_Tfila" } = props;
    const [zmanim_Tfila, setZmanim_Tfila] = useState<any[]>([]);
    const Sunset = useFromKosherZmanim("Sunset")
    const CandleLighting = useFromKosherZmanim("CandleLighting")
    const TzaisGeonim = useFromKosherZmanim("TzaisGeonim4Point37Degrees");
    const [Zmanim_Day, setZmanim_Day] = useLocalStorage("Zmanim_Tfila", "");
    const [shbatt, setShbatt] = useLocalStorage("shbatt", "");


    useEffect(() => {
        if (type == "Zmanim_Tfila") {
            if (!Zmanim_Day) {
                setZmanim_Day([
                    { name: "שחרית", zmanim: "6:15" },
                    { name: "שחרית", zmanim: "8:10" },
                    { name: "מנחה", zmanim: sunsetPlusMinutes(-10) },
                    { name: 'ערבית', zmanim: sunsetPlusMinutes(20) },
                ])
            }
            setZmanim_Tfila([...Zmanim_Day])
        }
        if (type == "shbatt") {
            if (!shbatt) {

                setShbatt(
                    [
                        { name: 'הדלקת נרות', zmanim: CandleLightingPlusMinutes(0) },
                        { name: 'מנחה ערב שבת', zmanim: CandleLightingPlusMinutes(5) },
                        { name: 'ערבית שבת', zmanim: CandleLightingPlusMinutes(45) },
                        { name: "שחרית שבת", zmanim: "8:00" },
                        { name: "מנחה שבת", zmanim: CandleLightingPlusMinutes(-15) },
                        { name: 'ערבית צאת שבת', zmanim: CandleLightingPlusMinutes(55) },
                    ])
            }
            setZmanim_Tfila([...shbatt])
        }

    }, [])

    const sunsetPlusMinutes = (minutes: number) => {
        return moment(new Date(Sunset)).add(minutes, 'minutes').format(' HH:mm ')
    }
    const CandleLightingPlusMinutes = (minutes: number) => {
        return moment(new Date(CandleLighting)).add(minutes, 'minutes').format(' HH:mm ')
    }
    const TzaisGeonimPlusMinutes = (minutes: number) => {
        return moment(new Date(TzaisGeonim)).add(minutes, 'minutes').format(' HH:mm ')
    }


    return (
        <>

            <PopupEdit title={title} zmanim_Tfila={zmanim_Tfila} type={type} />
            <div className='flex' >
                {zmanim_Tfila.map(({ name, zmanim }) => (
                    <div key={name + zmanim}>
                        <div key={name} className="title">{name} </div>
                        <div key={zmanim} className="boxSub">{zmanim}</div>
                    </div>
                )
                )}
            </div>
        </>
    )
}
