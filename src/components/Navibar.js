const Navbar = props => {

    const { name } = props;

    const jsx = (
        <div className="container">
            <nav className="navbar">
                <h1>{name ?? 'NO NAMED'}</h1>
                <ul className="liks">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Add New!</a></li>
                </ul>
            </nav>
        </div>
    )

    return jsx;
}

export default Navbar;