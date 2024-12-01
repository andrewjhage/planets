import "../App.css";

function Header (fontFamily) {
    return (
        <header className="header text-center py-8 bg-cover bg-center text-black">
            <h1 className="text-6xl font-bolder"
            style={{fontFamily: `${fontFamily}`}}>
                Andrew's Planetarium
            </h1>
        </header>
    );
}

export default Header;