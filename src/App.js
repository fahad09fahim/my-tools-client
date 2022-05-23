import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Tools from "./Pages/Home/Tools";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tools" element={<Tools />}></Route>
      </Routes>
    </div>
  );
}

export default App;
