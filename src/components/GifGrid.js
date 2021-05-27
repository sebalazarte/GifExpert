import React, {Fragment } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GiftGridItem } from './GiftGridItem';

export const GifGrid = ({ category, limit }) => {

    const {data: images, loading} = useFetchGifs(category, limit);

    return (
        <Fragment>
            <h3 className="animate__animated animate__faden">{category}</h3>
            
            {loading && <p className="animate__animated animate__flash">Cargando...</p>}

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
