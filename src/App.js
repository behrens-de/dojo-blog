import Navbar from "./components/Navibar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from "./Create";
import BlogDetails from "./components/BlogDetails";
import Error404 from "./components/Error404";

function App() {

  const title = 'Dojo Blog!'


 
  const jsx = (
    <Router>
      <div>
        <Navbar name={title} />

        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route path="/create" component={Create} /> 
          <Route path="/blog/:id" component={BlogDetails} /> 
          <Route path="*" component={Error404} /> 
        </Switch>

      </div>
    </Router>

  );

  return jsx;
}

export default App;
