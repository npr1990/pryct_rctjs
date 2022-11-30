import Cart from "../Cart";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <header className="w-100">
      <nav className="navbar-expand-md navbar-dark bg-dark d-flex flex-row px-3">
        <Link  className="navbar-brand" to="/">
          MicroProblems
        </Link>
        <div className="d-flex flex-row justify-content-between w-100 align-items-center">
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/category/electronics">
                Electronics
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/category/jewelery">
                Jewelery
              </Link>
            </li>
          </ul>
          <Cart/>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
