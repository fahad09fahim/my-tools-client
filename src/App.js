import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import BusinessSummary from "./Pages/Home/BusinessSummary";
import Chart from "./Pages/Home/Chart";
import Home from "./Pages/Home/Home";
import Purchase from "./Pages/Home/Purchase";
import Reviews from "./Pages/Home/Reviews";
import Tools from "./Pages/Home/Tools";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import SignUp from "./Pages/Login/SignUp";
import MyPortfolio from "./Pages/Home/MyPortfolio";
import Navbar from "./Pages/Shared/Navbar";
import NotFound from "./Pages/Shared/NotFound";
import Blogs from "./Pages/Home/Blogs";
import DashBoard from "./Pages/Shared/DashBoard";
import MyProfile from "./Pages/Shared/MyProfile";
import MyReview from "./Pages/Shared/MyReview";
import MyOrder from "./Pages/Shared/MyOrder";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import User from "./Pages/Shared/User";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route
          path="/purchase"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route path="/summary" element={<BusinessSummary />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/review" element={<Reviews />} />
        <Route path="/portfolio" element={<MyPortfolio />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <DashBoard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <User></User>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
