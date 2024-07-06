import React from 'react';
import "../styles/Picture.css"

const Picture = (props) => {
    return (
        <div className="picture_item">
            <img className="picture_item_image" src={props.image} alt={props.header}/>
            <div className="picture_item_header">{props.header}</div>
            <div className="picture_item_description">{props.description}</div>
        </div>
    );
};

export default Picture;