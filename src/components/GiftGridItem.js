import React from 'react'

export const GiftGridItem = ({id, title, url}) => {
    // console.log(props);
    return (
        <div className="card animate__animated animate__bounceIn">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
