import { useState, useEffect } from "react"
import BlogList from "./BlogList"
const Home = () => {

    // useState Hook
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // useEffect
    // Wird beim jeden neuen render vorgang ausgeführt 
    useEffect(() => {
        // zum beispiel um daten zu fetchen
        fetch('http://localhost:8000/blogs') // <= API ENDPOINT
            .then(response => response.json())
            .then(data => {

                setBlogs(data);
                setIsLoading(false)


            });

    }, []); // <= beim ersten laden 





    const jsx = (<div className="Home">
        <div className="container">
            {isLoading && <div>Loading...</div>}
            {/* Bloglist wird erst ausgeführt wenn blogs !== null */}
            {blogs && <BlogList blogs={blogs} title={'Alle Blogs'} />}
        </div>
    </div>);

    return jsx;
}

export default Home;