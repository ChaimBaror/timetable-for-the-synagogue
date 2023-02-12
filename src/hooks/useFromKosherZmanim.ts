import { getZmanimJson } from "kosher-zmanim";
import { useEffect } from "react";
import { useSelector } from "react-redux";


export default function useFromKosherZmanim(getZmanim: string) {
    const { location } = useSelector((state: any) => state)
    useEffect(() => {
        console.log(getZmanim);
    }, [getZmanim])


    const myDate = new Date();

    const options = {
        date: myDate,
        latitude: location.Latitude,
        longitude: location.Longitude,
        complexZmanim: true,
        timeZoneId: "Asia/Jerusalem",
        locationName: "Asia/Jerusalem",
        elevation: 0,
    }

    const zmanim = getZmanimJson(options);

    const basicZmanim = zmanim.Zmanim;

    return basicZmanim[getZmanim as keyof typeof basicZmanim]

}

