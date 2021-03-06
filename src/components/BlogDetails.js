import { useHistory, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, isLoading, error } = useFetch('http://localhost:8000/blogs/' + id);

    const history = useHistory();

    const handleClick = () => {
        // Delete the Post
        const endpoint = `http://localhost:8000/blogs/${id}`
        fetch(endpoint,{
            method: 'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }

    const jsx = (<div className="container">
        {isLoading && <div>Loading</div>}
        {error && <div>Error...</div>}
        {blog && (
            <article className='blog-details'>
                <h2>{blog.title}</h2>
                <span className='author'>von: {blog.author}</span>
                <div>{blog.body}</div>
                <button className='delete-button' onClick={handleClick}>Delete</button>
            </article>
        )}
    </div>);

    return jsx;
}

export default BlogDetails;