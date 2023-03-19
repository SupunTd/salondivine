import React, { useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import  "./Login.css";
import Logbar from "../Header/Logbar/Logbar";
import Navbar from "../Header/Navbar/Navbar";


const Login = () => {

    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [msg,setMsg]=useState("");
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:4000/api/auth";
            const { data: res } = await axios.post(url, data);
            setMsg(res.message);

            localStorage.setItem("token", res.data);
            localStorage.setItem('user', JSON.stringify(res.user));


            //check if user has carted
            const user = JSON.parse(localStorage.getItem('user'));

            console.log(user.firstName);
            console.log(data);
            console.log("User has been Log In");
            console.log(`User ${data._id} has been login`);
            window.location = "/";
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

    axios.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem("token");
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );


    return (
        <>
            <Logbar/>
            <Navbar/>
            <div className="login_container">
            <div className="login_form_container">
                <div className="login_left">
                    <form className="login_form_container" onSubmit={handleSubmit}>
                        <div className="login_head">Login to Your Account</div>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            required
                            className="input_login"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                            required
                            className="input_login"
                        />
                        {error && <div className="login_error_msg">{error}</div>}
                        {msg && <div className="login_success_msg">{msg}</div>}
                        <button type="submit" className="login_green_btn">
                            Log In
                        </button>
                    </form>
                </div>
                <div className="login_right">
                    <h1>New Here ?</h1>
                    <Link to="/signup">
                        <button type="login_button" className="white_btn">
                            Sing Up
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;
