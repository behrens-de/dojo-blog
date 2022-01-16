const BlogList = props => {

    const { blogs, title } = props;

    const jsx = (<div className="block-list">
        <h2>{title ?? 'Unknown'}</h2>
        {blogs.map(blog => {
            const { id, title, body, author } = blog;
            return <div className="blog-preview" key={id}>
                <h2>{title}</h2>
                <p>{body}</p>
                <span>von: {author}</span>
            </div>
        })}

    </div>);

    const error = () => {
        console.warn('<BLOCKLIST/> Error:', props);
        return null;
    }

    return blogs.length > 0 ? jsx : error();
}

export default BlogList;