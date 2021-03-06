import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../Hook/useAdmin";

const DashBoard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <h2 className="text-2xl font-bold text-secondary">
          Welcome to your Dashboard
        </h2>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          {admin && (
            <li>
              <Link to="/dashboard/users">All Users</Link>
            </li>
          )}
          <li>
            <Link to="/dashboard/profile">My Profile</Link>
          </li>
          {!admin && (
            <li>
              <Link to="/dashboard">My Orders</Link>
            </li>
          )}
          {!admin && (
            <li>
              <Link to="/dashboard/review">My Reviews</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
