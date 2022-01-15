import Navbar from "./components/Navibar";
import Home from "./components/Home";

function App() {

  const title = 'Dojo Blog!'


  const jsx = (
    <div>
      <Navbar name={title} />
      <Home />
    </div>
  );

  return jsx;
}

export default App;
