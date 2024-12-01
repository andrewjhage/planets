import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PlanetCards = () => {
    const [planets, setPlanets] = useState([]); // State for planet data
    const [loading, setLoading] = useState(true); // State for loading
    const [error, setError] = useState(null); // State for error handling

    const API_URL = "https://api.le-systeme-solaire.net/rest/bodies";

    useEffect(() => {
        const fetchPlanets = async () => {
        try {
            const response = await axios.get(API_URL, {
            params: { 'filter[]': 'isPlanet,eq,true' }, // Only fetch planets
        });
        setPlanets(response.data.bodies); // Set the fetched planet data
        } catch (err) {
        console.error('API Error:', err.message);
        setError('Error fetching data');
        } finally {
        setLoading(false);
        }
    };

    fetchPlanets();
    }, []);

    return (
        <div className="p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Planets</h1>
        {loading && <p className="text-center text-gray-600">Loading...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}
        {!loading && !error && planets.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {planets.map((planet, index) => (
            <div
                key={index}
                className="border rounded-lg shadow-md bg-white p-4 hover:shadow-lg transition-shadow duration-300"
            >
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{planet.englishName || planet.name}</h2>
                <ul className="text-sm text-gray-600 space-y-1">
                <li>
                    <strong>Mass:</strong>{' '}
                    {planet.mass?.massValue
                    ? `${planet.mass.massValue} x10^${planet.mass.massExponent} kg`
                    : 'Unknown'}
                </li>
                <li>
                    <strong>Mean Radius:</strong>{' '}
                    {planet.meanRadius ? `${planet.meanRadius} km` : 'Unknown'}
                </li>
                <li>
                    <strong>Orbital Period:</strong>{' '}
                    {planet.sideralOrbit ? `${planet.sideralOrbit} days` : 'Unknown'}
                </li>
                <li>
                    <strong>Gravity:</strong>{' '}
                    {planet.gravity ? `${planet.gravity} m/s²` : 'Unknown'}
                </li>
                </ul>
            </div>
            ))}
        </div>
        ) : (
        !loading && !error && <p className="text-center text-gray-600">No planets found.</p>
        )}
    </div>
    );
};

export default PlanetCards;
