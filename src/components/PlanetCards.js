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
        <div>
            <h1>Planets</h1>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && planets.length > 0 ? (
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                        gap: '20px',
                    }}
                >
                    {planets.map((planet, index) => (
                        <div
                            key={index}
                            style={{
                                border: '1px solid #ddd',
                                borderRadius: '8px',
                                padding: '16px',
                                backgroundColor: '#f9f9f9',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <h2>{planet.englishName || planet.name}</h2>
                            <p><strong>Mass:</strong> {planet.mass?.massValue || 'Unknown'} x10^{planet.mass?.massExponent || '0'} kg</p>
                            <p><strong>Mean Radius:</strong> {planet.meanRadius || 'Unknown'} km</p>
                            <p><strong>Orbital Period:</strong> {planet.sideralOrbit || 'Unknown'} days</p>
                            <p><strong>Gravity:</strong> {planet.gravity || 'Unknown'} m/s²</p>
                        </div>
                    ))}
                </div>
            ) : (
                !loading && !error && <p>No planets found.</p>
            )}
        </div>
    );
};

export default PlanetCards;
