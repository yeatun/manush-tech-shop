
import './App.css';
import Header from './Components/Header/Header';
import Shops from './Components/Shop/Shops';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './Components/Review/Review';
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
          <Route path="/review">
            <Review></Review>
          </Route>
          {/* <PrivateRoute path="/inventory">
            <Inventory></Inventory>
          </PrivateRoute> */}
          {/* <Route path="/login">
            <Login></Login>
          </Route> */}
          {/* <PrivateRoute path="/shipment">
            <Shipment></Shipment>
          </PrivateRoute> */}
          <Route exact path="/">
            <Shops></Shops>
          </Route>
          {/* <Route path="/product/:id">
            <ProductDetail></ProductDetail>
          </Route> */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
   {/* <Header></Header>
   <Shops></Shops> */}
    </div>
  );
}

export default App;
