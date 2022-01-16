import BlogList from "./components/BlogList"
import Err from "./components/Err"
import Loading from "./components/Loading"
import useFetch from "./hooks/useFetch"
const Home = () => {

    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');
    
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