import React from 'react';
import './Makeap.css';
import {Link} from "react-router-dom";

function AppointmentButton() {
    return (
        <div className="appointment-button">
            <div className="OverlayLine"></div>
            <button className="Button">
                <Link to="/Appointment" className="makeap">
                Appointment</Link></button>
        </div>
    );
}

export default AppointmentButton;
