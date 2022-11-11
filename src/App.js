import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar";
import ListItemContainer from "./components/ListItemContainer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <Router>
      <div className="App flex-column">
        <NavBar />
        <div className="w-100 h-100" >
          <Routes>
            <Route
              path="/"
              element={<ListItemContainer greeting="Bienvenido" />}
            />
            <Route
              path="/category/:id"
              element={<ListItemContainer greeting="ItemsCategoria" />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
