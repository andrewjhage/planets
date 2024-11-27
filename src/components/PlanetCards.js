import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PlanetCards = () => {
    const [planets, setPlanets] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
    const [expandedCard, setExpandedCard] = useState(null); 

    const API_URL = "https://api.le-systeme-solaire.net/rest/bodies";

    const planetImages = {
        Mercury: '/images/mercury.jpeg',
        Venus: '/images/venus.jpg',
        Earth: '/images/earth.jpg',
        Mars: '/images/mars.png',
        Jupiter: '/images/jupiter.png',
        Saturn: '/images/saturn.png',
        Uranus: '/images/uranus.png',
        Neptune: '/images/neptune.png',
    };

    useEffect(() => {
        const fetchPlanets = async () => {
            try {
                const response = await axios.get(API_URL, {
                    params: { 'filter[]': 'isPlanet,eq,true' }, 
                });
                setPlanets(response.data.bodies); 
            } catch (err) {
                console.error('API Error:', err.message);
                setError('Error fetching data');
            } finally {
                setLoading(false);
            }
        };

        fetchPlanets();
    }, []);

    // Toggle expanded card
    const toggleCard = (index) => {
        setExpandedCard(expandedCard === index ? null : index);
    };

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
                            <img
                                src={planetImages[planet.englishName] || '/images/planets/default.jpg'}
                                alt={planet.englishName}
                                style={{
                                    width: '100%',
                                    height: '150px',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                    marginBottom: '10px',
                                }}
                            />
                            <h2 style={{ fontSize: '1.5rem', margin: '0 0 10px' }}>
                                {planet.englishName || planet.name}
                            </h2>
                            <button
                                onClick={() => toggleCard(index)}
                                style={{
                                    background: '#007BFF',
                                    color: 'white',
                                    padding: '10px',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                }}
                            >
                                {expandedCard === index ? 'Hide Details' : 'Show Details'}
                            </button>
                            {expandedCard === index && (
                                <div style={{ marginTop: '10px', textAlign: 'left' }}>
                                    <p><strong>Mass:</strong> {planet.mass?.massValue || 'Unknown'} x10^{planet.mass?.massExponent || '0'} kg</p>
                                    <p><strong>Mean Radius:</strong> {planet.meanRadius || 'Unknown'} km</p>
                                    <p><strong>Orbital Period:</strong> {planet.sideralOrbit || 'Unknown'} days</p>
                                    <p><strong>Gravity:</strong> {planet.gravity || 'Unknown'} m/s²</p>
                                </div>
                            )}
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
