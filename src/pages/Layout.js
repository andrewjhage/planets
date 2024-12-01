import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
    return (
        <>
        <Header fontFamily ="Arial" />
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default Layout;