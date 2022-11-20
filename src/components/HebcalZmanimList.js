import React from 'react'
import Hebcal from "hebcal";
import { hebcal_list } from '../utils/module';
import moment from "moment";
import ItemList from './common/list/ItemList';
import { useSelector } from 'react-redux';
import Select from './common/Select/select';

export const HebcalZmanimList = () => {

    const { location } = useSelector(state => state)


    let city = location.name;
    const myDate = new Date();
    const Latitude = location.Latitude;
    const Longitude = location.Longitude;
    const hebcal = new Hebcal.HDate(myDate);
    hebcal.setCity(city);
    hebcal.setLocation(Latitude, Longitude);
    let Zemanim = hebcal.getZemanim('h')

    return (
        <div className='continer'>
            <div className='list_of_zmanim'>
            <div>בחר מיקום
                <Select name={"lok"}></Select>
            </div>
                <h1 className='date_information'>זמני היום {city}</h1>
                {hebcal_list.map(({ name, zmanim }) => (
                    <ItemList key={name} name={`${name}:`} zmanim={moment(new Date(Zemanim[zmanim])).format(' HH:mm:ss ')} />)
                )}
            </div>
        </div >)
}
