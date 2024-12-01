import "../App.css";

function Header (fontFamily) {
    return (
        <header className="bg-gray-800 text-white p-8 mb-16">
            <h1 className="text-4xl font-bold md:text-5xl"
            style={{fontFamily: `${fontFamily}`}}>
                Andrew's Planetarium
            </h1>
            <p className="text-lg md:text-xl">
                The Greatest Planetarium in the World!
            </p>
        </header>
    );
}

export default Header;