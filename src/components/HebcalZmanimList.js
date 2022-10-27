import React from 'react'
import Hebcal from "hebcal";
import { hebcal_list } from '../utils/module';
import moment from "moment";
import ItemList from './ItemList';

export const HebcalZmanimList = () => {
    let city = 'bnei brak';
    const myDate = new Date();
    const Latitude = 32.0833;
    const Longitude = 34.8333;
    const hebcal = new Hebcal.HDate(myDate);
    hebcal.setCity(city);
    hebcal.setLocation(Latitude, Longitude);
    let Zemanim = hebcal.getZemanim('h')

    return (
        <div className='continer'>
            <div className='list_of_zmanim'>
                <h1 className='date_information'>זמני היום {city}</h1>
                {hebcal_list.map(({ name, zmanim }) => (
                    <ItemList key={name} name={`${name}:`} zmanim={moment(new Date(Zemanim[zmanim])).format(' HH:mm:ss ')} />)
                )}
            </div>
        </div >)
}
