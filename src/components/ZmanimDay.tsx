import moment from 'moment';
import React, { useEffect, useState } from 'react'
import useFromKosherZmanim from '../hooks/useFromKosherZmanim';
import { useLocalStorage } from '../hooks/useLocalStorage';
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
                    { id: 1, name: "שחרית", time: "06:15", ZMAN: 'Permanent', category: 'Day' },
                    { id: 2, name: "שחרית", time: "08:10", ZMAN: 'Permanent', category: 'Day' },
                    { id: 3, name: "מנחה", time: '-10', ZMAN: 'sunsetPlusMinutes', category: 'Day' },
                    { id: 4, name: "ערבית", time: '20', ZMAN: 'sunsetPlusMinutes', category: 'Day' },

                ])
            }
            setZmanim_Tfila([...Zmanim_Day])
        }
        if (type == "shbatt") {
            if (!shbatt) {
                setShbatt(
                    [
                        { id: 10, name: 'הדלקת נרות', time: "0", ZMAN: 'CandleLightingPlusMinutes', category: 'SHABAAT' },
                        { id: 11, name: 'מנחה ערב שבת', time: "5", ZMAN: 'CandleLightingPlusMinutes', category: 'SHABAAT' },
                        { id: 12, name: 'ערבית שבת', time: "45", ZMAN: 'CandleLightingPlusMinutes', category: 'SHABAAT' },
                        { id: 13, name: "שחרית שבת", time: "08:00", ZMAN: 'Permanent', category: 'SHABAAT' },
                        { id: 14, name: "מנחה שבת", time: "-15", ZMAN: 'CandleLightingPlusMinutes', category: 'SHABAAT' },
                        { id: 15, name: 'ערבית צאת שבת', time: "55", ZMAN: 'CandleLightingPlusMinutes', category: 'SHABAAT' },

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
    const convertToZman: any = {
        "sunsetPlusMinutes": sunsetPlusMinutes,
        "CandleLightingPlusMinutes": CandleLightingPlusMinutes,
        "TzaisGeonimPlusMinutes": TzaisGeonimPlusMinutes,
    }


    function listOfTime(list: any[]) {
        return list.map(({ name, time, ZMAN }) => {            
            const zmain = ZMAN == 'Permanent' || !ZMAN  ? time : convertToZman[ZMAN as keyof typeof convertToZman](time);

            return (<div key={name + time}>
                <div key={name} className="title">{name} </div>
                <div key={time} className="boxSub">{zmain}</div>
            </div>
            )
        }) 
    }

    return (
        <>
            <PopupEdit title={title} zmanim_Tfila={zmanim_Tfila} type={type} />
            <div className='flex' >
                {listOfTime(zmanim_Tfila)}
            </div>
        </>
    )
}
