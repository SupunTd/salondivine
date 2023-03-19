import React from "react";
import './Packages.css'
import Logbar from "../Components/Header/Logbar/Logbar";
import Navbar from "../Components/Header/Navbar/Navbar";
const Packages = () => {

    const handleBookNow = (image, title) => {
        fetch('/api/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ image, title })
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    };


    return (
        <>
            <Logbar/>
            <Navbar/>

            <div className="salon-packages">
                <div className="package">
                    <img src="https://i.pinimg.com/236x/d5/45/de/d545de0b45dcc80403618d65599b2590.jpg" alt="Package 1" />
                    <h2>Kandyan bride</h2>
                    <p>Sri Lankan Kandyan bride wears a saree variation called Osaria. which is also known more generally as the Kandyan Saree. Kandyan weddings take many cues from Indian Hindu weddings but with Sri Lankan Traditional Poruwa ceremony, they maintain an unmistakable Sri Lankan identity.</p>
                    <h3>$3500</h3>
                    <button>Book Now</button>
                </div>
                <div className="package">
                    <img src="https://i.pinimg.com/236x/f1/cf/dc/f1cfdc7db844f51d8620b19cbe4f1bbb.jpg" alt="Package 2" />
                    <h2>North Indian</h2>
                    <p> Aish Induri's board on "North Indian brides" contains a collection of 704 images showcasing Indian bridal wear. Makeup by Disha offers North Indian bridal makeup services and has a portfolio of bridal looks available for viewing.</p>
                    <h3>$3100</h3>
                    <button>Book Now</button>
                </div>
                <div className="package">
                    <img src="https://i.pinimg.com/236x/5e/99/51/5e9951c2fadfd2c370566ae3ce7e9099.jpg" alt="Package 3" />
                    <h2>South Inain</h2>
                    <p>For a South Indian bride, the bridal attire usually includes a beautiful saree paired with heavy temple-style gold jewelry. The bride's hair is styled in an elaborate manner using flowers or the traditional poolajada. The makeup is minimalistic yet elegant, enhancing the bride's natural beauty. There are various options for bridal wear, including traditional, modern, offbeat, and simple designs, with a range of saree blouse designs, hairstyles, and makeup looks to choose from.</p>
                    <h3>$3200</h3>
                    <button>Book Now</button>
                </div>
                <div className="package">
                    <img src="https://i.pinimg.com/236x/74/1c/5e/741c5ee3ebf21077d419d0f9b6959934.jpg" alt="Package 4" />
                    <h2>Western</h2>
                    <p>The bride may wear a Western-style wedding dress, which could feature unique elements such as tooled heels or cowboy boots.
                        The wedding may incorporate Western-themed elements such as rings or decorations.
                        In a story featuring a Western bride named Abby Winthrop, her character may be described as clever or beautiful.</p>
                    <h3>$3000</h3>
                    <button>Book Now</button>
                </div>
            </div>
        </>
    );
};


export default Packages;
