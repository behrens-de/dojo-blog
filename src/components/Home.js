import { useState, useEffect } from "react"
import BlogList from "./BlogList"
import Err from "./Err"
import Loading from "./Loading"
const Home = () => {

    // useState Hook
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect
    // Wird beim jeden neuen render vorgang ausgeführt 
    useEffect(() => {
        // zum beispiel um daten zu fetchen
        fetch('http://localhost:8000/blogs') // <= API ENDPOINT
            .then(response => {
                if (!response.ok) throw Error('Response is not ok');
                return response.json();
            })
            .then(data => {

                setBlogs(data);
                setIsLoading(false);
            }).catch(error => {
                setError(error.message);
                setIsLoading(false);
            })

    }, []); // <= beim ersten laden 








    const jsx = (<div className="Home">
        <div className="container">
            {error && <Err />}
            {isLoading && <Loading />}
            {blogs && <BlogList blogs={blogs} title={'Alle Blogs'} />}
        </div>
    </div>);


    return jsx;
}

export default Home;