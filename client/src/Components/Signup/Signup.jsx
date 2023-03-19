import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import  "./Signup.css";
import Logbar from "../Header/Logbar/Logbar";
import Navbar from "../Header/Navbar/Navbar";


const Signup = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [msg,setMsg]=useState("");
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:4000/api/users";
            const { data: res } = await axios.post(url, data);
            setMsg(res.message);
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };


    return (
        <>
            <Logbar/>
            <Navbar/>
        <div className="signup_container">
            <div className="signup_form_container">
                <div className="signup_left">
                    <h1>Welcome Back</h1>
                    <Link to="/login">
                        <button type="signup_button" className="white_btn">
                            Log In
                        </button>
                    </Link>
                </div>
                <div className="signup_right">
                    <form className="signup_form_container" onSubmit={handleSubmit}>
                        <h1>Create Account</h1>
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            onChange={handleChange}
                            value={data.firstName}
                            required
                            className="signup_input"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            onChange={handleChange}
                            value={data.lastName}
                            required
                            className="signup_input"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            required
                            className="signup_input"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                            required
                            className="signup_input"
                        />
                        {error && <div className="signup_error_msg">{error}</div>}
                        {msg && <div className="signup_success_msg">{msg}</div>}
                        <button type="submit" className="signup_green_btn">
                            Sing Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default Signup;
