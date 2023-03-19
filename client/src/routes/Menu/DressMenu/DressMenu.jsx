import React, {useState} from 'react';
import './DressMenu.css';
import Logbar from "../../../Components/Header/Logbar/Logbar";
import Navbar from "../../../Components/Header/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import axios from "axios";
function DressMenu() {


    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        axios.post('http://localhost:4000/api/cart', { item })
            .then((response) => {
                console.log(response.data);
                // update cart data in state
                setCart([...cart, item]);
            })
            .catch((error) => {
                console.error(error);
            });
    };



    return (
        <>
        <Logbar/>
        <Navbar/>
        <div className="image-matrix">
            <div className="row">
                <div className="column">
                    <img src="https://i.pinimg.com/236x/13/f4/97/13f497245bffcb4f1f20e22bdc049def.jpg" alt="di 1"/>
                    <button onClick={() => addToCart('Item D1')}>Item D1</button>
                </div>
                <div className="column">
                    <img src="https://i.pinimg.com/564x/e8/e8/7a/e8e87a5cb6f0e716ad6eeca0d4fa6422.jpg" alt="di 2"/>
                    <button onClick={() => addToCart('Item D2')}>Item D2</button>
                </div>
                <div className="column">
                    <img src="https://i.pinimg.com/564x/87/f7/d4/87f7d4f0de977014e4ffc5cb30127e82.jpg" alt="di 3" />
                    <button>Item D3</button>
                </div>
                <div className="column">
                    <img src="https://i.pinimg.com/564x/0e/18/e3/0e18e391686861f10455018047cc4ad8.jpg" alt="di 4" />
                    <button>Item D4</button>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <img src="https://i.pinimg.com/564x/4a/ca/70/4aca70b3e309107d408444916e2e2724.jpg" alt="di 5" />
                    <button>Item D5</button>
                </div>
                <div className="column">
                    <img src="https://i.pinimg.com/564x/7b/a2/0e/7ba20e16bc7ec870bd117bdd1ae25721.jpg" alt="di 6" />
                    <button>Item D6</button>
                </div>
                <div className="column">
                    <img src="https://i.pinimg.com/564x/ba/68/68/ba6868b6ddd6b60449c9448a25a0fb34.jpg" alt="di 7" />
                    <button>Item D7</button>
                </div>
                <div className="column">
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img src="https://i.pinimg.com/564x/9a/3d/a6/9a3da642e256a5e7b171989c0e8c6ea0.jpg" alt="di 8" />
                    <button>Item D8</button>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <img src="https://i.pinimg.com/736x/6c/1b/b9/6c1bb97b73861026e7db0b2fb38f8f2e.jpg" alt="di 9" />
                    <button>Item D9</button>
                </div>
                <div className="column">
                    <img src="https://i.pinimg.com/564x/0e/19/1d/0e191d0e77628a9eb225526f08ac6684.jpg" alt= "di 10" />
                    <button>Item D10</button>
                </div>
                <div className="column">
                    <img src="https://i.pinimg.com/564x/d6/77/b5/d677b5c019a01d0410425985e00741de.jpg" alt="di 11" />
                    <button>Item D11</button>
                </div>
                <div className="column">
                    <img src="https://i.pinimg.com/564x/85/10/6f/85106f82565383a226cfba04a9480b8b.jpg" alt="di 12" />
                    <button>Item D12</button>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <img src="https://i.pinimg.com/564x/76/20/9d/76209dea0479dae9ff19cc047db79dea.jpg" alt="di 13" />
                    <button>Item D13</button>
                </div>
                <div className="column">
                    <img src="https://i.pinimg.com/564x/55/59/ce/5559ce39d4be7ab5838ee48bb9896f5c.jpg" alt="di 14" />
                    <button>Item D14</button>
                </div>
                <div className="column">
                    <img src="https://i.pinimg.com/564x/56/19/99/561999a0b4936527bd1e3fee4f143a98.jpg" alt="di 15" />
                    <button>Item D15</button>
                </div>
                <div className="column">
                    <img src="https://i.pinimg.com/564x/67/d0/b4/67d0b4f4b2e4401e521a0ef2994dd740.jpg" alt="di 16" />
                    <button>Item D16</button>
                </div>
            </div>
        </div>
            <Footer/>
        </>
    );
}

export default DressMenu;
