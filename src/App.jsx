import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import ProductCard from "./ProductCard";
import { Route, Switch} from 'wouter';
import RegisterPage from "./RegisterPage";
import ShoppingCartPage from "./ShoppingCartPage";
import ProductPage from "./ProductPage";
import Navbar from "./Navbar";

export default function App() {


  return <>

    <Navbar/>

   {/* Part of the component that will be changed by the URL */}
    <Switch>
          <Route path="/" component={HomePage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/register" component={RegisterPage}/>
          <Route path="/cart" component={ShoppingCartPage}/>
          <Route path="/products" component={ProductPage}/>
    </Switch>

    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p>&copy; 2023 E-Shop. All rights reserved.</p>
      </div>
    </footer>
  </>
}