import React from 'react';
import './Appointment.css';
import Navbar from "../../Components/Header/Navbar/Navbar";
import Logbar from "../../Components/Header/Logbar/Logbar";

const Appointment = () => {


    return (
        <>
            <Logbar/>
            <Navbar/>

            <div className="appointment-container">
                <h2 className="appointment-heading">Appointment</h2>
                <table className="appointment-table">
                    <thead>
                    <tr>
                        <th>Image</th>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>

                        <tr >
                            <td>image</td>
                            <td>item</td>
                            <td><button>Quantity</button></td>
                            <td><button>Edit</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
                <div className="appointment-details">
                    <div className="date-time-panel">
                        <p>Select Date and Time</p>
                        {/* Add a date/time picker here */}
                    </div>
                    <div className="message-panel">
                        <p>Enter your message</p>
                        <textarea rows="5" cols="30"></textarea>
                    </div>
                    <div className="total-price">
                        <p>Total: Total</p>
                    </div>
                    <div className="payment">
                        <p>Payment</p>
                        {/* Add a payment form here */}
                        <div className="payment-receipt">
                            <p>Upload your payment receipt:</p>
                            <input type="file" />
                        </div>
                    </div>
                </div>
                <button className="submit-button">Submit</button>
                {/* Add a popup message here */}
            </div>
        </>
    );
}

export default Appointment;
