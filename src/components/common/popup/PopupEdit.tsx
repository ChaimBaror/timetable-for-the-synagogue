import React, { useEffect, useState } from 'react'
import Popup from 'reactjs-popup'
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import Input from '../Input/Input';

interface Props {
    zmanim_Tfila?: any[];
    title: string;
    type?: string
}
export default function PopupEdit(props: Props) {
    const { title, zmanim_Tfila, type } = props;
    const [Zmanim_Day, setZmanim_Day] = useLocalStorage(type, "");

    const [inputs, setInputs] = useState({

    });
    useEffect(() => {
     console.log(Zmanim_Day);
     
    }, [Zmanim_Day])
    


    const handleChange = (event: any) => {
        const { value, name } = event.target;
        // console.log(event.target.value);
        // console.log(event.target.name);
        setInputs(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const saveChange = () => {
        setZmanim_Day([inputs])
    }

    return (
        <Popup
            trigger={
                <div className='title-zaman shadow '>
                    {title}
                </div>
            } position="center center">
            <div className='popup-style'>
                <form onChange={handleChange}>
                    {zmanim_Tfila?.map(({ name, zmanim }) => (
                        <div className='row'>
                            <input name={name} key={zmanim} type='text' defaultValue={zmanim} />
                            <input name={name} key={name + zmanim} type='text' defaultValue={name} />
                        </div>
                    ))}
                </form>
                <button onClick={()=>saveChange()}>save</button>
            </div>
        </Popup>
    )
}
