import moment from 'moment';
import React, { useEffect, useState } from 'react'
import useFromKosherZmanim from '../hooks/useFromKosherZmanim';
import { useLocalStorage } from '../hooks/useLocalStorage';
import '../styles/PopupStyle.scss'
import PopupEdit from './common/popup/PopupEdit';
import { Day, SHABAAT } from '../utils/module';

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
    const [zmanim, setZmanim] = useLocalStorage(type, "");

    useEffect(() => {
        if (!zmanim) {
            setZmanim(type == "shbatt" ? SHABAAT : Day)
        }
        setZmanim_Tfila([...zmanim])

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
        return list.map(({ id, name, time, select, Permanent }) => {
            const zmain = select == 'Permanent' || !select ? Permanent : convertToZman[select as keyof typeof convertToZman](time);

            return (<div key={id}>
                <div key={name} className="title">{name} </div>
                <div key={zmain} className="boxSub">{zmain}</div>
            </div>
            )
        })
    }

    return (
        <>
            <PopupEdit title={title} type={type} />
            <div className='flex' >
                {listOfTime(zmanim_Tfila)}
            </div>
        </>
    )
}
