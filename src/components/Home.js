import { useState, useEffect } from "react"
import BlogList from "./BlogList"
const Home = () => {

    // useState Hook
    const [blogs, setBlogs] = useState([
        { id: 1, title: 'my new website', body: 'lorem ipsum', author: 'Jan Behrens' },
        { id: 2, title: 'wilcome party!', body: 'lorem ipsum', author: 'Tom Buretti' },
        { id: 3, title: 'Web dev tips', body: 'lorem ipsum', author: 'Jan Behrens' },
        { id: 4, title: 'Schminksachen', body: 'lorem ipsum', author: 'Anna Boroday' },
        { id: 5, title: 'Haushalts Dinge', body: 'lorem ipsum', author: 'Anna Boroday' },
    ])

    // useEffect
    // Wird beim jeden neuen render vorgang ausgeführt 
    useEffect(()=>{
        // zum beispiel um daten zu fetchen
        console.log('useEffect ran');
        console.log(blogs);
        
        
    })


    const handleClickEvent = (event) => {
        console.log('EVENT: ', event)
    }

    const handleClickParam = (param) => {
        console.log('PARAM: ', param)
    }

    const filterdBlogs = (author, explicit=false) => {
        return blogs.filter(blog => { 
            if(explicit) return blog.author === author;
            return blog.author.toLowerCase().includes(author.toLowerCase()) 
        });
    }

    const handleDelete = (id) => {
        // Removed Blog Item by ID
        setBlogs(blogs.filter(blog => blog.id !== id));
    }

    const jsx = (<div className="Home">
        <div className="container">
            <h1>HALLO ich bin HOME</h1>

            <BlogList blogs={blogs} title={'Alle Blogs'} handleDelete={handleDelete} />
            {/* <BlogList blogs={filterdBlogs("jan")} title={'Jans Blogs'} />
            <BlogList blogs={filterdBlogs('Tom')} title={'Toms Blogs'} />
            <BlogList blogs={filterdBlogs('Anna')} title={'Annas Blogs'} /> */}

            <button onClick={handleClickEvent}>Event: Click me!</button>
            <button onClick={() => handleClickParam('Argument')}>Param: Click me!</button>
        </div>
    </div>);

    return jsx;
}

export default Home;