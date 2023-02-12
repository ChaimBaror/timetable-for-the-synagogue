import moment from 'moment';
import React, { useEffect, useState } from 'react'
import useFromKosherZmanim from '../hooks/useFromKosherZmanim';

interface Title {
    title: string;
    type?: string;
}

export default function ZmanimDay(props: Title): JSX.Element {
    const { title, type } = props;
    const [zmanim_Tfila, setZmanim_Tfila] = useState<any[]>([]);
    const Sunset = useFromKosherZmanim("Sunset")
    const CandleLighting = useFromKosherZmanim("CandleLighting")
    const TzaisGeonim = useFromKosherZmanim("TzaisGeonim4Point37Degrees")

    useEffect(() => {
        if (!type) {
            setZmanim_Tfila(
                [
                    { name: "שחרית", zmanim: "6:15" },
                    { name: "שחרית", zmanim: "8:10" },
                    { name: "מנחה", zmanim: sunsetPlusMinutes(-10) },
                    { name: 'ערבית', zmanim: sunsetPlusMinutes(20) },
                ]
            )
        }
        if (type == "shbatt") {
            setZmanim_Tfila(
                [
                    { name: 'הדלקת נרות', zmanim: CandleLightingPlusMinutes(0) },
                    { name: 'מנחה ערב שבת', zmanim: CandleLightingPlusMinutes(5) },
                    { name: 'ערבית שבת', zmanim: CandleLightingPlusMinutes(45) },
                    { name: "שחרית שבת", zmanim: "8:00" },
                    { name: "מנחה שבת", zmanim: CandleLightingPlusMinutes(-15) },
                    { name: 'ערבית צאת שבת', zmanim: CandleLightingPlusMinutes(55) },
                ])
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
            <div className='title-zaman shadow '>{title}</div>
            <div className='flex'>
                {zmanim_Tfila.map(({ name, zmanim }) => (
                    <div>
                        <div className="title">{name} </div>
                        <div className="boxSub">{zmanim}</div>
                    </div>
                )
                )}
            </div>
        </>
    )
}
