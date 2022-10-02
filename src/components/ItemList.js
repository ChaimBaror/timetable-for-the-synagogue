import React from 'react'

const ItemList = ({ name, zmanim }) => {
    return (
        <div className='list_item'>
            <div className='item_time'>
                {zmanim}
            </div>
            <div dir='auto' className='item_text'>
                {name}
            </div>
        </div >
    )
}

export default ItemList;