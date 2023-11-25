import Navbar from './Navbar';
import Home from './Home';
import Check from './Check';
import Cart from './Cart';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className = "content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path='/cart'>
              <Cart/>
            </Route>
            <Route path='/checkout'>
              <Check/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
