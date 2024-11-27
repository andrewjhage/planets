import "../App.css";

function Header (props) {
    return (
        <header>
            <h1>{props.headingText}</h1>
        </header>
    );
}

export default Header;