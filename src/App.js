import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import BusinessSummary from "./Pages/Home/BusinessSummary";
import Chart from "./Pages/Home/Chart";
import Home from "./Pages/Home/Home";
import Reviews from "./Pages/Home/Reviews";
import Tools from "./Pages/Home/Tools";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import Navbar from "./Pages/Shared/Navbar";
import NotFound from "./Pages/Shared/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/summary" element={<BusinessSummary />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/review" element={<Reviews />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
