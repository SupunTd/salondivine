import React from 'react';
import './SpaMenu.css';
import Logbar from "../../../Components/Header/Logbar/Logbar";
import Navbar from "../../../Components/Header/Navbar/Navbar";
function SpaMenu() {
    return (
        <>
        <Logbar/>
        <Navbar/>
        <div className="image-matrix">
            <div className="row">
                <div className="column">
                    <img src="https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=600" alt="di1" />
                    <button>Item SP1</button>
                </div>
                <div className="column">
                    <img src="https://images.pexels.com/photos/4004122/pexels-photo-4004122.jpeg?auto=compress&cs=tinysrgb&w=600" alt="di 2"/>
                    <button>Item SP2</button>
                </div>
                <div className="column">
                    <img src="https://images.pexels.com/photos/3852204/pexels-photo-3852204.jpeg?auto=compress&cs=tinysrgb&w=600" alt="di 3" />
                    <button>Item SP3</button>
                </div>
                <div className="column">
                    <img src="https://images.pexels.com/photos/4210657/pexels-photo-4210657.jpeg?auto=compress&cs=tinysrgb&w=600" alt="di 4" />
                    <button>Item SP4</button>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <img src="https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=600" alt="di 5" />
                    <button>Item SP5</button>
                </div>
                <div className="column">
                    <img src="https://images.pexels.com/photos/5240817/pexels-photo-5240817.jpeg?auto=compress&cs=tinysrgb&w=600" alt="di 6" />
                    <button>Item SP6</button>
                </div>
                <div className="column">
                    <img src="https://images.pexels.com/photos/5069406/pexels-photo-5069406.jpeg?auto=compress&cs=tinysrgb&w=600" alt="di 7" />
                    <button>Item SP7</button>
                </div>
                <div className="column">
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img src="https://images.pexels.com/photos/5069609/pexels-photo-5069609.jpeg?auto=compress&cs=tinysrgb&w=600" alt="di 8" />
                    <button>Item SP8</button>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <img src="https://i.pinimg.com/236x/5d/e8/f7/5de8f7e322f7dd4793fc44af244ddf71.jpg" alt="di 9" />
                    <button>Item SP9</button>
                </div>
                <div className="column">
                    <img src="https://i.pinimg.com/236x/cc/1a/79/cc1a793942c4429918a2199bc0c1df20.jpg" alt= "di 10" />
                    <button>Item SP10</button>
                </div>
                <div className="column">
                    <img src="https://images.pexels.com/photos/4126730/pexels-photo-4126730.jpeg?auto=compress&cs=tinysrgb&w=600" alt="di 11" />
                    <button>Item SP11</button>
                </div>
                <div className="column">
                    <img src="https://images.pexels.com/photos/5069612/pexels-photo-5069612.jpeg?auto=compress&cs=tinysrgb&w=600" alt="di 12" />
                    <button>Item SP12</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default SpaMenu;
