import React from 'react';
import './About.css'
import Logbar from "../Components/Header/Logbar/Logbar";
import Navbar from "../Components/Header/Navbar/Navbar";

const AboutUs = () => {
    return (
        <>

            <Logbar/>
            <Navbar/>
            <section className="about-us">
                <div className="background-overlay">
                    <h1>About Us</h1>
                    <p>
                        Salon Divine is a luxurious beauty salon located in the heart of the city. Our team of highly skilled and experienced professionals is dedicated to providing our clients with the best beauty treatments and services.
                    </p>
                    <p>
                        Our salon offers a wide range of services including hair styling, makeup, facials, and nail treatments. We use only the highest quality products and tools to ensure that our clients get the best results.
                    </p>
                    <p>
                        At Salon Divine, we believe that beauty is not just about how you look, but also how you feel. That's why we provide a relaxing and comfortable environment where our clients can unwind and feel pampered.
                    </p>
                    <h2>What Our Customers Say</h2>
                    <div className="customer-comments">
                        <div className="customer-comment">
                            <p>"I had a great experience at Salon Divine. The staff was friendly and professional, and my haircut turned out amazing!"</p>
                            <span>- Jane D.</span>
                        </div>
                        <div className="customer-comment">
                            <p>"I love this salon! I always feel so relaxed and pampered when I leave. Plus, my hair has never looked better!"</p>
                            <span>- Sarah K.</span>
                        </div>
                        <div className="customer-comment">
                            <p>"The facial I had at Salon Divine was the best I've ever had. My skin looks and feels amazing!"</p>
                            <span>- Emily M.</span>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default AboutUs;



