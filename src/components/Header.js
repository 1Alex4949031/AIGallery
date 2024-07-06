import React from 'react';
import GalleryImg from '../assets/Gallery.png'
import "../styles/Header.css"
import {TypeAnimation} from 'react-type-animation';


const Header = () => {
    return (
        <div className="header">
            <img className="header__image" src={GalleryImg} alt="AI Gallery"/>
            <TypeAnimation
                sequence={[
                    'AI Gallery',
                    7000,
                    'Creativity Enhanced by Technology',
                    2000,
                    'Unlocking Imagination with AI',
                    1000,
                    'Future of Art, Powered by AI',
                    1000,
                ]}
                speed={25}
                className="header__text"
                repeat={Infinity}
            />
        </div>
    );
};

export default Header;