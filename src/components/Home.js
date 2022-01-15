import { useState } from "react"
const Home = () => {

    // useState Hook
    const [name, setName] = useState({ firstname: 'Jan', lastname: 'Behrens' })
    const [blogs, setBlogs] = useState([
        { id: 1, title: 'my new website', body: 'lorem ipsum', author: 'Jan Behrens' },
        { id: 2, title: 'wilcome party!', body: 'lorem ipsum', author: 'Jan Behrens' },
        { id: 3, title: 'Web dev tips', body: 'lorem ipsum', author: 'Jan Behrens' },
    ])


    const handleClickEvent = (event) => {
        console.log('EVENT: ', event)
        setName({ ...name, lastname: 'Buretti' })
    }

    const handleClickParam = (param) => {
        console.log('PARAM: ', param)
    }

    return (<div className="Home">
        <div  className="container">
            <h1>HALLO ich bin HOME</h1>
            
            {blogs.map(blog => {
               return  <div className="blog-preview" key={blog.id}>™
                   <h2>{blog.title}</h2>
                   <p>{blog.body}</p>
                   <span>von: {blog.author}</span>
                   </div>
            })}

            <p>{name.firstname} {name.lastname}</p>
            <button onClick={handleClickEvent}>Event: Click me!</button>
            <button onClick={() => handleClickParam('Argument')}>Param: Click me!</button>
        </div>
    </div>);
}

export default Home;