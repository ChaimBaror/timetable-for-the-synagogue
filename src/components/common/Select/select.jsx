import React, { useState } from 'react'
import { locationAdded } from '../../../store/usersReducer';
import { useDispatch } from 'react-redux';
import { locations } from '../../../utils/locations.module'


const Select = () => {
    const dispatch = useDispatch()
    const [selected, setSelected] = useState();

    const items = Object.keys(locations).map(v => ({
        key: v,
    }));

    const handleChange = (e) => {
        setSelected(e.target.value);
        const select = locations[e.target.value];
        dispatch(locationAdded({
            name:e.target.value,
            Latitude: select.Lat,
            Longitude: select.Lng
            ,
        }))
    }

    return (
        <>
            <select onChange={(e) => handleChange(e)}>
                {items.map((option) => (
                    <option value={option.key}>{option.key}</option>
                ))}
            </select>
            <h1>selected : {selected}</h1>
        </>
    )

}

export default Select
