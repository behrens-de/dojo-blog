import { useState } from "react/cjs/react.development";

const Create = () => {


    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Anna');
    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        //Creat a blog Item 
        setIsLoading(true)
        setTimeout(() => {
            const blogItem = { title, body, author };
            // Send a Post Request to JSON Server
            const endpoint = 'http://localhost:8000/blogs'
            fetch(endpoint, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(blogItem)
            }).then(() => {
                console.log('New Blog Added');
                setIsLoading(false);

            })
        }, 1000);

    }

    return (<div className="container create">


        <h2>Add a new Blog :)</h2>
        <form onSubmit={handleSubmit} className="add-blog-form">
            <label>Blog Title</label>
            <input
                required
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label>Blog Body</label>
            <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}>
            </textarea>
            <label>Blog Author</label>
            <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            >
                <option value="Jan">Jan</option>
                <option value="Anna">Anna</option>
                <option value="Tom">Tom</option>
            </select>

            {!isLoading ? (<button>Add Blog!</button>) : (<button disabled="disabled">... warten</button>)}
        </form>

        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
    </div>);
}

export default Create;