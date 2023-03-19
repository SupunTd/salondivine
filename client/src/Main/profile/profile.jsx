import React, { useState, useEffect } from 'react';
import "./Profile.css"
import Logbar from "../../Components/Header/Logbar/Logbar";
import Navbar from "../../Components/Header/Navbar/Navbar";
const Profile = () => {
    const [isDetailsOpen, setIsDetailsOpen] = useState(true);
    const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [userData, setUserData] = useState(null);
    const [user, ] = useState(JSON.parse(localStorage.getItem('user')));

    useEffect(() => {
        fetch("/api/profile")
            .then(response => response.json())
            .then(data => setUserData(data))
            .catch(error => console.error(error));
    }, []);



    const handleDetailsClick = () => {

        setIsDetailsOpen(true);
        setIsAppointmentOpen(false);
        setIsCartOpen(false);
    };

    const handleAppointmentClick = () => {
        setIsDetailsOpen(false);
        setIsAppointmentOpen(true);
        setIsCartOpen(false);
    };

    const handleCartClick = () => {
        setIsDetailsOpen(false);
        setIsAppointmentOpen(false);
        setIsCartOpen(true);
    };



    return (
        <>
            <Logbar/>
            <Navbar/>
            <div className="profile-container">
                <div className="left-panel">
                    <img src="https://i.pinimg.com/236x/03/b8/dc/03b8dce687670fa254e90e7fb3705d02.jpg" alt="Profile" />
                </div>
                <div className="right-panel">
                    <div className="button-panel">
                        <button onClick={handleDetailsClick}>Details</button>
                        <button onClick={handleAppointmentClick}>Appointment</button>
                        <button onClick={handleCartClick}>Cart</button>
                    </div>
                    {isDetailsOpen && (
                        <div className="details-panel">
                            <h2>Details</h2>
                            <ul>
                                <li>
                                    First Name: <span>{user?.firstName}</span>
                                </li>
                                <li>
                                    Last Name: <span>{user?.lastName}</span>
                                </li>

                                <li>
                                    Email: <span>{user?.email}</span>
                                </li>

                                <li>
                                    Password: <span>{user?.password}</span>
                                </li>
                                <li>
                                    <button>Edit</button>
                                </li>
                            </ul>
                        </div>
                    )}
                    {isAppointmentOpen && (
                    <div className="appointment-panel">
                        <h2>Appointment</h2>
                        <table>
                            <thead>
                            <tr>
                                <th>Items</th>
                                <th>Date and Time</th>
                                <th>Make Changes</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <img src="https://i.pinimg.com/236x/85/1c/61/851c61be8eb30f5528be0273dfa279e8.jpg" alt="Item 1" />
                                    <span>Item 1</span>
                                </td>
                                <td>
                                    <span>Date and Time</span>
                                </td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://i.pinimg.com/236x/85/1c/61/851c61be8eb30f5528be0273dfa279e8.jpg" alt="Item 2" />
                                    <span>Item 2</span>
                                </td>
                                <td>
                                    <span>Date and Time</span>
                                </td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                )}
                {isCartOpen && (
                    <div className="cart-panel">
                        <h2>Cart</h2>
                        <table>
                            <thead>
                            <tr>
                                <th>Image</th>
                                <th>Item Name</th>
                                    <th>Quantity</th>
                                    <th>Edit/Delete</th>

                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <img src="https://i.pinimg.com/236x/85/1c/61/851c61be8eb30f5528be0273dfa279e8.jpg" alt="Item 1" />
                                </td>
                                <td>
                                    <span>Item 1</span>
                                </td>
                                <td>
                                    <span>1</span>
                                </td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://i.pinimg.com/236x/85/1c/61/851c61be8eb30f5528be0273dfa279e8.jpg" alt="Item 2" />
                                </td>
                                <td>
                                    <span>Item 2</span>
                                </td>
                                <td>
                                    <span>2</span>
                                </td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    )}
                    </div>
                    </div>
        </>
                    );
                };

export default Profile;
