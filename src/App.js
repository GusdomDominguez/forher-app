import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Gifts from './pages/Gifts/index';
import Travels from './pages/Travels/index';
import Memories from './pages/Memories/index';
import Home from './pages/Home/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/gifts">
          <Gifts />
        </Route>
        <Route path="/travels">
          <Travels />
        </Route>
        <Route path="/memories">
          <Memories />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
