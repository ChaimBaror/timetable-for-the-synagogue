import React, { useState } from 'react'
import { locationAdded } from '../../../store/usersReducer';
import { useDispatch } from 'react-redux';
import { locations } from '../../../utils/locations.module'


const Selectlocations = () => {
    const dispatch = useDispatch()
    const items = Object.keys(locations).map(v => ({
        key: v,
    }));

    const handleChange = (e) => {
        const { Lat, Lng } = locations[e.target.value];
        dispatch(locationAdded({
            name: e.target.value,
            Latitude: Lat,
            Longitude: Lng
            ,
        }))
    }

    return (
        <select onChange={(e) => handleChange(e)}>
            {items.map((option) => (
                <option key={option.key} value={option.key}>{option.key}</option>
            ))}
        </select>
    )

}

export default Selectlocations
