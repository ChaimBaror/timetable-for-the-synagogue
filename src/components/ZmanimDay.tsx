import moment from 'moment';
import React, { useEffect, useState } from 'react'
import useFromKosherZmanim from '../hooks/useFromKosherZmanim';

interface Title {
    title: string
}

export default function ZmanimDay(props: Title): JSX.Element {
    const { title } = props;
    const [zmanim_Tfila, setZmanim_Tfila] = useState<any[]>([]);
    const Sunset = useFromKosherZmanim("Sunset")

    useEffect(() => {
        setZmanim_Tfila(
            [
                { name: "שחרית", zmanim: "8:00" },
                { name: "מנחה", zmanim: (moment(new Date(Sunset)).add(-10, 'minutes').format(' HH:mm ')) },
                { name: 'ערבית', zmanim: (moment(new Date(Sunset)).add(20, 'minutes').format(' HH:mm ')) },
            ]
        )
    }, [])

    const skeahPlisMinuts = (minutes: number) => {
        return moment(new Date(Sunset)).add(minutes, 'minutes').format(' HH:mm ')
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
