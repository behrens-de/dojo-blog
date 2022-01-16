import Navbar from "./components/Navibar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from "./Create";

function App() {

  const title = 'Dojo Blog!'


  const routes = [{
    path: '/',
    componete: 'Home'
  }, {
    path: '/create',
    componete: 'Create'
  }
  ]


  const jsx = (
    <Router>
      <div>
        <Navbar name={title} />

        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>

          <Route path="/create" >
            <Create />
          </Route>
        </Switch>

      </div>
    </Router>

  );

  return jsx;
}

export default App;
