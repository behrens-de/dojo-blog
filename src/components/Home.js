import { useState, useEffect } from "react"
import BlogList from "./BlogList"
const Home = () => {

    // useState Hook
    const [blogs, setBlogs] = useState(null);

    // useEffect
    // Wird beim jeden neuen render vorgang ausgeführt 
    useEffect(() => {
        // zum beispiel um daten zu fetchen
        fetch('http://localhost:8000/blogs') // <= API ENDPOINT
            .then(response => response.json())
            .then(data => {
                setBlogs(data);
            });

    }, []); // <= beim ersten laden 


    const handleDelete = (id) => {
        // Removed Blog Item by ID
        setBlogs(blogs.filter(blog => blog.id !== id));
    }

    const jsx = (<div className="Home">
        <div className="container">
            <h1>HALLO ich bin HOME</h1>
            
            {blogs && <BlogList blogs={blogs} title={'Alle Blogs'} handleDelete={handleDelete} />}
        </div>
    </div>);

    return jsx;
}

export default Home;