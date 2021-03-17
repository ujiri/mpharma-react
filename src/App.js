import Header from './components/Header'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Products from './components/Products';
import NewProduct from './components/NewProduct';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <div className="mx-auto" style={{ width: "700px" }}>
            <Switch>
                <Route exact path="/">
                  <Products />
                </Route>
                <Route path="/new-product">
                  <NewProduct />
                </Route>
                <Route path="/edit-product/:id">
                  <NewProduct />
                </Route>
            </Switch>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
