import { useState } from "react"
const Home = () => {

    // useState Hook
    let [name, setName] = useState('Mario')

    const handleClickEvent = (event) => {
        console.log('EVENT: ', event)
        setName('Mario 2')
    }

    const handleClickParam = (param) => {
        console.log('PARAM: ', param)
    }

    return (<div className="Home">
        <div className="container">

            <h1>HALLO ich bin HOME</h1>
            <p>{name}</p>
            <button onClick={handleClickEvent}>Event: Click me!</button>
            <button onClick={() => handleClickParam('Argument')}>Param: Click me!</button>
        </div>
    </div>);
}

export default Home;