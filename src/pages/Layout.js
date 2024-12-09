import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
    <>
        <Header fontFamily="Arial" />
        <nav className="bg-gray-800 text-white">
        <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <button
            className="md:hidden block text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
            <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
            </svg>
            </button>
        </div>

        <div
            className={`${
                isMenuOpen ? "block" : "hidden"
            } md:flex md:items-center md:justify-center md:space-x-4 bg-gray-800`}
        >
            <ul className="flex flex-col md:flex-row">
                <li className="py-2 md:py-0">
                    <Link
                    to="/"
                    className="block px-4 py-2 hover:bg-gray-700 md:hover:bg-transparent"
                >
                    Home
                    </Link>
                </li>
                <li className="py-2 md:py-0">
                    <Link
                    to="/about"
                    className="block px-4 py-2 hover:bg-gray-700 md:hover:bg-transparent"
                    >
                    About
                    </Link>
                </li>
                <li className="py-2 md:py-0">
                    <Link
                    to="/contact"
                    className="block px-4 py-2 hover:bg-gray-700 md:hover:bg-transparent"
                    >
                    Contact
                    </Link>
                </li>
            </ul>
        </div>
        </nav>
        <Outlet />
    </>
    );
};

export default Layout;
