import Navbar from "./components/Navibar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  const title = 'Dojo Blog!'


  const jsx = (
    <Router>
      <div>
        <Navbar name={title} />

        <Switch>
          <Route path="/" >
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>

  );

  return jsx;
}

export default App;
