import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  return (
    <div>
      <div className="navbar bg-primary">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/tools">Tools</Link>
              </li>
              <li>
                <Link to="/review">Reviews </Link>
              </li>
              <li>
                <Link to="/summary">Business Summary</Link>
              </li>
              <li>
                <Link to="/chart">Sales progress</Link>
              </li>
              <li>
                {user ? (
                  <button onClick={logOut} className="btn btn-ghost">
                    Sign Out
                  </button>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost  normal-case text-2xl text-bold pl-10 "
          >
            My Tools
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/tools">Tools</Link>
            </li>
            <li>
              <Link to="/summary">Business Summary</Link>
            </li>
            <li>
              <Link to="/chart">Sales progress</Link>
            </li>
            <li>
              <Link to="/review"> Reviews</Link>
            </li>
            <li>
              {user ? (
                <button onClick={logOut} className="btn btn-ghost">
                  Sign Out
                </button>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
