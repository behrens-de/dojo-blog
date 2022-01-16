import { Link } from "react-router-dom";

const Navbar = props => {

    const { name } = props;

    const jsx = (
        <div className="container">
            <nav className="navbar">
                <h1>{name ?? 'NO NAMED'}</h1>
                <ul className="liks">
                    <li>
                        <Link to="/">Home</Link>
                        {/* <a href="/">Home</a> */}
                    </li>
                    <li>
                        <Link to="/create">Add New!</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )

    return jsx;
}

export default Navbar;