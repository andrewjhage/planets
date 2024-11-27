import React from "react";
import PlanetCards from './PlanetCards';

const planetData = [
    {
        "name": "Neptune",
        "mass": 0.0537,
        "radius": 0.346,
        "period": 59800,
        "semi_major_axis": 30.07,
        "temperature": 72,
        "distance_light_year": 0.000478,
        "host_star_mass": 1,
        "host_star_temperature": 6000
    }
];

const PlanetModal = () => {
    return (
    <>
        <div className="planet_container">
            <h1>Planet Details</h1>
        </div>
        <PlanetCards planets={planetData} />
    </>
    );
};

export default PlanetModal;
