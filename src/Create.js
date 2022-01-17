import { useState } from "react/cjs/react.development";

const Create = () => {


    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Anna');


    return (<div className="container create">
        <h2>Add a new Blog :)</h2>
        <form className="add-blog-form">
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

            <button>Add Blog!</button>
        </form>

        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
    </div>);
}

export default Create;