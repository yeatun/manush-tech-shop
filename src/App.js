
import './App.css';
import Header from './Components/Header/Header';
import Shops from './Components/Shop/Shops';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NotFound from './Components/NotFound/NotFound';



function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/shop">
            <Shops></Shops>
          </Route>
         
         
          <Route exact path="/">
            <Shops></Shops>
          </Route>
         
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
