import { Link } from "react-router-dom";

const Error404 = () => {
    return (<div className="container">
        <h2>404! Page not found</h2>
        <p>The Page can not found</p>
        <Link to="/">Back to the Homepage</Link>
    </div>);
}

export default Error404;