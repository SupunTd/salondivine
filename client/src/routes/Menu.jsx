import React from "react";
import "./Menu.css"
import Navbar from "../Components/Header/Navbar/Navbar";
import Logbar from "../Components/Header/Logbar/Logbar";
import {Link} from "react-router-dom";


const Menu = () => {
    return(
        <>
                <Logbar/>
                <Navbar/>


            <div className="image-matrix">
                <div className="row">
                    <div className="column">
                        <div className="Menuimg">
                        <img  src="https://i.pinimg.com/564x/65/e2/a8/65e2a80bb0b094bf32bdbf7440128b86.jpg" alt="di1" />
                    </div>
                        <div className="Menub">
                        <button><Link to="/DressMenu" className="menu-items">Dressing Menu</Link></button>
                        </div>
                    </div>
                    <div className="column">
                        <div className="Menuimg">
                        <img src="https://i.pinimg.com/564x/f6/e5/d8/f6e5d8a939d33f19f3e79e4f1203c465.jpg" alt="di 2"/>
                        </div>
                        <div className="Menub">
                            <button><Link to="/SalonMenu" className="menu-items">Salon Menu</Link></button>
                        </div>
                    </div>
                    <div className="column">
                        <div className="Menuimg">
                        <img src="https://i.pinimg.com/564x/df/bb/64/dfbb6480dfeb47971a334429d6bac57b.jpg" alt="di 3" />
                        </div>
                        <div className="Menub">
                            <button><Link to="/SpaMenu" className="menu-items">Spa Menu</Link></button>
                        </div>
                    </div>
                    <div className="column">
                        <div className="Menuimg">
                        <img src="https://i.pinimg.com/564x/0e/18/e3/0e18e391686861f10455018047cc4ad8.jpg" alt="di 4" />
                        </div>
                        <div className="Menub">
                            <button><Link to="/PackageMenu" className="menu-items">Special Package Menu</Link></button>
                        </div>
                    </div>
                </div>
                </div>
        </>
);
};

export default Menu;
