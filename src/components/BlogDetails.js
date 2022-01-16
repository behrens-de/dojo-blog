import {useParams} from 'react-router-dom'
const BlogDetails = () => {

    const {id} = useParams();

    return (<div className="container">
        <h2>Blog Details - ID:{id}</h2>
    </div>);
}

export default BlogDetails;