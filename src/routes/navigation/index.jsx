import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

const Navigation = () => {
  return (
    <>
      <nav className="navigation-container">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <CrwnLogo className="logo" />
          </Link>
        </div>
        <ul className="navigation-list">
          <li className="navigation-item">
            <Link to="/" className="navigation-link">
              Home
            </Link>
          </li>
          <li className="navigation-item">
            <Link to="/shop" className="navigation-link">
              Shop
            </Link>
          </li>
          <li className="navigation-item">
            <Link to="/sign-in" className="navigation-link">
              Sign In
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Navigation;
