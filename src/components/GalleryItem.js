import React from 'react';
import "../styles/GalleryItem.css"
import Picture from "./Picture";

const GalleryItem = (props) => {
    return (
        <div className="gallery_item">
            <div className="gallery_item_text">{props.title}</div>
            <div className="gallery_item_direction">
                {props.pictures.map((pic, index) => (
                    <Picture key={index} image={pic.image} header={pic.header} description={pic.description}/>
                ))}
            </div>
        </div>
    );
};

export default GalleryItem;