import Hebcal from "hebcal";
import moment from "moment";
import { useSelector } from 'react-redux';

export const GetZmanHebcal = ({ name, zmanim }) => {

    const { location } = useSelector(state => state)

    const myDate = new Date();
    const Latitude = location.Latitude;
    const Longitude = location.Longitude;

    const hebcal = new Hebcal.HDate(myDate);
    hebcal.setCity(location.name);
    hebcal.setLocation(Latitude, Longitude);
    const Zemanim = hebcal.getZemanim('h')

    return (
        <div>
            {name}
            {moment(new Date(Zemanim[zmanim])).format(' HH:mm ')}
        </div >

    )
}
