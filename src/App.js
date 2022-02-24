import "./App.css";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import  {useSelector} from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

function App() {

  const user =useSelector(state=>state.user.currentUser)
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route path="/products/:category">
          <ProductList />
        </Route>
      </Switch>
      <Switch>
        <Route path="/product/:id">
          <Product />
        </Route>
      </Switch>
      <Switch>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
      <Switch>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
      </Switch>
      <Switch>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
