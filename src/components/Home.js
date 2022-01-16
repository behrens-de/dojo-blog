import { useState, useEffect } from "react"
import BlogList from "./BlogList"
import Err from "./Err"
import Loading from "./Loading"
import useFetch from "../useFetch"
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