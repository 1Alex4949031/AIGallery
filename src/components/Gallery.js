import React from 'react';
import GalleryItem from "./GalleryItem";

import natureImg1 from "../assets/Nature1.png"
import natureImg2 from "../assets/Nature2.png"
import natureImg3 from "../assets/Nature3.png"
import medievalImg1 from "../assets/Medieval1.png"
import medievalImg2 from "../assets/Medieval2.png"
import medievalImg3 from "../assets/Medieval3.png"
import dinosaursImg1 from "../assets/Dinosaurs1.png"
import dinosaursImg2 from "../assets/Dinosaurs2.png"
import dinosaursImg3 from "../assets/Dinosaurs3.png"
import futureImg1 from "../assets/Future1.png"
import futureImg2 from "../assets/Future2.png"
import futureImg3 from "../assets/Future3.png"


const collection = [
    {
        title: "Nature",
        pictures: [
            {
                header: "Winter Idyll",
                description: "A landscape with snow-covered mountains and forest, a cozy cottage with smoke rising from the chimney. Snowy paths lead into the forest, creating a fairy-tale winter atmosphere.",
                image: natureImg1
            },
            {
                header: "Alpine Lake",
                description: "A summer landscape with green mountains, blooming meadows, and a crystal-clear lake. The vibrant colors of nature create a picturesque scene of tranquility and beauty.",
                image: natureImg2
            },
            {
                header: "Mountain Dawn",
                description: "A morning landscape with mist-covered mountains and a river surrounded by forest. The warm light of dawn bathes the nature, creating a magical and peaceful atmosphere.",
                image: natureImg3
            }
        ]
    },
    {
        title: "Medieval Time",
        pictures: [
            {
                header: "Medieval Marketplace",
                description: "A bustling medieval marketplace set against the backdrop of an impressive castle. Merchants sell their goods while townspeople and visitors mingle, creating a lively and vibrant scene.",
                image: medievalImg1
            },
            {
                header: "Castle on the River",
                description: "A majestic castle situated on the banks of a winding river. Surrounded by lush green hills, the castle stands as a formidable fortress with a busy dock and market below, showcasing the prosperity and strategic importance of the location.",
                image: medievalImg2
            },
            {
                header: "Village Fair",
                description: "A quaint village fair with timber-framed houses and thatched roofs. The scene is filled with villagers engaging in various activities, from blacksmithing to selling fresh produce, capturing the charm and simplicity of medieval village life.",
                image: medievalImg3
            }
        ]
    },
    {
        title: "Dinosaurs",
        pictures: [
            {
                header: "Jurassic Oasis",
                description: "A lush, prehistoric jungle teems with life under the golden rays of the sun. Tall sauropods stretch their necks to feast on the treetops, while smaller dinosaurs roam the verdant undergrowth. This vibrant ecosystem showcases the diversity and splendor of the Jurassic period, where every corner bursts with the wonders of ancient nature.",
                image: dinosaursImg1
            },
            {
                header: "Cretaceous Coastline",
                description: "Under a bright, clear sky, the tranquil waters of a prehistoric beach sparkle in the sunlight. Dinosaurs, both herbivores and carnivores, coexist along the shoreline, while pterosaurs glide gracefully above. This idyllic coastal scene highlights the beauty and harmony of life during the Cretaceous period, with towering palm trees and majestic mountains in the background.",
                image: dinosaursImg2
            },
            {
                header: "Eruption of Doom",
                description: "A dramatic scene unfolds as a volcano violently erupts, spewing lava and ash into the sky. In the midst of this chaos, a Triceratops family struggles to find safety amidst the burning forest and flowing lava. The painting captures the raw power of nature and the desperate fight for survival in a world on the brink of catastrophe.",
                image: dinosaursImg3
            }
        ]
    },
    {
        title: "Future",
        pictures: [
            {
                header: "Futuristic Cityscape",
                description: "A stunning view of a futuristic city with towering skyscrapers, flying cars, and advanced technology. The city is alive with activity, showcasing the seamless integration of innovation and urban life.",
                image: futureImg1
            },
            {
                header: "High-Tech Metropolis",
                description: "A vibrant metropolis filled with towering buildings, illuminated billboards, and high-speed transport systems. Drones and flying vehicles navigate the sky, highlighting the advanced technological infrastructure.",
                image: futureImg2
            },
            {
                header: "Skyline of Tomorrow",
                description: "An awe-inspiring skyline featuring interconnected highways, futuristic buildings, and advanced aerial vehicles. The cityscape reflects a vision of the future where technology and architecture have reached new heights.",
                image: futureImg3
            }
        ]
    }
]


const Gallery = () => {
    return (
        <div className="gallery_items">
            {collection.map((galleryItem, index) => (
                <GalleryItem key={index} title={galleryItem.title} pictures={galleryItem.pictures}/>
            ))}
        </div>
    );
};

export default Gallery;