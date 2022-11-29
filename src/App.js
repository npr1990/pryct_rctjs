import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartScreen from "./components/CartScreen";
import { CartProvider } from "./components/CartContext";

function App() {
  return (
    <Router>
      <div className="App flex-column">
      <CartProvider>
        <NavBar />
        <div className="w-100 h-100">
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartScreen />} />
            </Routes>
        </div>
          </CartProvider>
      </div>
    </Router>
  );
}

export default App;
