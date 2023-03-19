import React from 'react';
import './SalonMenu.css';
import Logbar from "../../../Components/Header/Logbar/Logbar";
import Navbar from "../../../Components/Header/Navbar/Navbar";
function SalonMenu() {
    return (
        <>
        <Logbar/>
        <Navbar/>
        <div className="image-matrix">
            <div className="row">
                <div className="column">
                    <img src="https://i.pinimg.com/236x/11/10/44/1110449b36d3a81915e5fe43aa8fb491.jpg" alt="di1" />
                    <button>Item S1</button>
                </div>
                <div className="column">
                    <img src="https://images.pexels.com/photos/3762871/pexels-photo-3762871.jpeg?auto=compress&cs=tinysrgb&w=600" alt="di 2"/>
                    <button>Item S2</button>
                </div>
                <div className="column">
                    <img src="https://images.pexels.com/photos/2732197/pexels-photo-2732197.jpeg?auto=compress&cs=tinysrgb&w=600" alt="di 3" />
                    <button>Item S3</button>
                </div>
                <div className="column">
                    <img src="https://images.pexels.com/photos/2442898/pexels-photo-2442898.jpeg?auto=compress&cs=tinysrgb&w=600" alt="di 4" />
                    <button>Item S4</button>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <img src="https://i.pinimg.com/236x/e2/bd/41/e2bd41e8ebb4b07923704d6451924bd8.jpg" alt="di 5" />
                    <button>Item S5</button>
                </div>
                <div className="column">
                    <img src="https://i.pinimg.com/236x/7d/0e/09/7d0e09782390c170e6930c6a45c33ef4.jpg" alt="di 6" />
                    <button>Item S6</button>
                </div>
                <div className="column">
                    <img src="https://i.pinimg.com/236x/29/13/48/2913485c7ffedfefb8ba7a1ce8033d36.jpg" alt="di 7" />
                    <button>Item S7</button>
                </div>
                <div className="column">
                    <img src="https://i.pinimg.com/236x/8c/56/06/8c5606a7ad9fac9b46fcbef30dc6ed66.jpg" alt="di 8" />
                    <button>Item S8</button>
                </div>
            </div>

        </div>
        </>
    );
}

export default SalonMenu;
