import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Deals from './components/Deals/Deals';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider'
import ViewProduct from './components/ViewProduct/ViewProduct';
import CartPage from './components/Cart/CartPage';

function App() {
  return (
    <div className="App">
      <main>
        <Router>
          <Header />
          <div className="main-content">
            <Switch>
              <Route path="/view-product">
                <ViewProduct />
              </Route>
              <Route path="/view-cart">
                <CartPage />
              </Route>
              <Route exact path="/">
                <Slider />
                <Deals />
              </Route>
            </Switch>
          </div>
        </Router>
      </main>
    </div>
  );
}

export default App;
