import React from "react";

const Footer = () => {
    return (
    <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2021 Andrew's Planetarium. All rights reserved.</p>
        <p>
            The Greatest Planetarium in the World!{' '}
            <a href="https://twitter.com/andrewplanet" className="text-blue-400">
            Twitter
            </a>{' '}
            and{' '}
            <a
            href="https://instagram.com/andrewplanet"
            className="text-blue-400"
        >
            Instagram
            </a>
            .
        </p>
    </footer>
    );
};

export default Footer;
