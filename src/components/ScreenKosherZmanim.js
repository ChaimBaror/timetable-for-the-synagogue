import React, { useEffect } from "react";
import moment from "moment";
import "../styles/ScreenKosherZmanim.scss";
import ItemList from "./common/list/ItemList";
import { list_zmanim, list_zmanim_Tfila } from '../utils/module'
import FromKosherZmanim from "../hooks/useFromKosherZmanim";


const ScreenKosherZmanim = () => {

    return (
        <div className='continer'>
            <div className='list_of_zmanim'>
                <h1 className='date_information'>זמני היום</h1>
                {list_zmanim.map(({ name, zmanim }) => (
                    <ItemList key={name} name={`${name}:`} zmanim={moment(FromKosherZmanim([zmanim])).format(' HH:mm:ss ')} />)
                )}
            </div>
        </div >
    )
}

export default ScreenKosherZmanim;
