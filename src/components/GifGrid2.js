import React, { useState, useEffect, Fragment } from 'react'
import { getGifts } from '../helpers/getGifs';
import { GiftGridItem } from './GiftGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(()=>{
        getGifts(category)
            .then( setImages );
    }, [category]);

    return (
        <Fragment>
            <h3>{category}</h3>
            <div className="card-grid">

                {
                    images.map(img =>
                        <GiftGridItem
                            key={img.id}
                            {...img} />)
                }
            </div>
        </Fragment>
    )
}
