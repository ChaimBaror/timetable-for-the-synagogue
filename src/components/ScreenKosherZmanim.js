import React, { useEffect } from "react";
import moment from "moment";
import "../styles/loop.scss";
import ItemList from "./common/list/ItemList";
import { list_zmanim, list_zmanim_Tfila } from '../utils/module'
import FromKosherZmanim from "../hooks/useFromKosherZmanim";


const ScreenKosherZmanim = () => {

    return (
        <div className='bodydiv1'>
            <div className='div-lo'>
                {/* <h1 className='date_information'>זמני היום</h1> */}
                {list_zmanim.map(({ name, zmanim }) => (
                    <p className="ploop"> {name} : {moment(FromKosherZmanim([zmanim])).format(' HH:mm ')} </p>)
                    // <ItemList key={name} name={`${name}:`} zmanim={moment(FromKosherZmanim([zmanim])).format(' HH:mm:ss ')} />)
                )}
            </div>
        </div >
    )
}

export default ScreenKosherZmanim;
