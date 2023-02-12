import React from 'react'
import "../styles/FullBoard.scss";
import { ListLoop } from '../components/ListLoop';

export default function LoopBord() {

    return (
        <div className="fullBoard">
            <div className="box">
                <div className='list-lo'>
                    <ListLoop />
                </div>
            </div>

        </div>
    )
}
