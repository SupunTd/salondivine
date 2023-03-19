import React, { useState } from 'react';
import './Services.css';
import * as PropTypes from "prop-types";
import Fade from 'react-reveal/Fade';

const servicesData = [
    {
        name: 'Haircut',
        image: 'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Our experienced hairdressers can give you a new stylish look that suits you perfectly.'
    },
    {
        name: 'Coloring',
        image: 'https://i.pinimg.com/236x/a7/5c/4f/a75c4fedce4b4c7f96003222c12d798d.jpg',
        description: 'We offer a wide range of hair coloring services, from subtle highlights to bold fashion colors.'
    },
    {
        name: 'Facials',
        image: 'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'Get a relaxing and rejuvenating facial that leaves your skin feeling fresh and radiant.'
    },
    {
        name: 'Manicure',
        image: 'https://i.pinimg.com/236x/7e/3a/a8/7e3aa88cdf92e82f9eec0e6b942ffaa0.jpg',
        description: 'Pamper your hands with our professional manicure services, including nail shaping, cuticle care, and polish.'
    },
    {
        name: 'Pedicure',
        image: 'https://i.pinimg.com/236x/d9/42/58/d942582404abf72baf7b6454536fb3e7.jpg',
        description: 'Treat your feet to a relaxing and refreshing pedicure that includes nail trimming, filing, and buffing.'
    },
    {
        name: 'Waxing',
        image: 'https://i.pinimg.com/236x/d1/25/51/d1255148f0747db69b5c47bdb793c5eb.jpg',
        description: 'Say goodbye to unwanted hair with our safe and effective waxing services for all parts of the body.'
    }
];


Fade.propTypes = {
    left: PropTypes.bool,
    children: PropTypes.node
};

function Services() {
    const [selectedService, setSelectedService] = useState(servicesData[0]);

    return (
        <div className="HomePage">
            <div className="Services">
                <h2 className="ServicesHeader">Our Services</h2>
                <p className="ServicesDescription">Welcome to our salon services! We offer a wide range of beauty treatments to help you look and feel your best.</p>
                <div className="ServicesIcons">
                    {servicesData.map(service => (
                        <div
                            key={service.name}
                            className={service === selectedService ? 'ServiceIcon Selected' : 'ServiceIcon'}
                            onClick={() => setSelectedService(service)}
                        >
                            <p>{service.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="ServiceDetails">
                <img src={selectedService.image} alt={selectedService.name} />
                <h3>{selectedService.name}</h3>

                <p>{selectedService.description}</p>

            </div>
        </div>
    );
}

export default Services;