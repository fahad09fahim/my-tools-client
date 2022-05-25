import { Route, Routes } from "react-router-dom";
import Chart from "./Pages/Home/Chart";
import Home from "./Pages/Home/Home";
import Tools from "./Pages/Home/Tools";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
    </div>
  );
}

export default App;
