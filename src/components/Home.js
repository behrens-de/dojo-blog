const Home = () => {

    // Variablen sebst sind nicht reactiv
    let name = 'Mario';

    const handleClickEvent = (event) => {
        console.log('EVENT: ', event)
    }

    const handleClickParam = (param) => {
        console.log('PARAM: ', param)
    }

    return (<div className="Home">
        <div className="container">

        <h1>HALLO ich bin HOME</h1>
        <p>{name}</p>
        <button onClick={handleClickEvent}>Event: Click me!</button>
        <button onClick={()=>handleClickParam('Argument')}>Param: Click me!</button>
        </div>
    </div>);
}

export default Home;