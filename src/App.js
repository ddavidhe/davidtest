import "./App.css";
import SearchFood from "./components/SearchFood";
import GetFruits from "./components/GetFruits";
import GetVegetables from "./components/GetVegetables";
import GetGrains from "./components/GetGrains";
import GetDairy from "./components/GetDairy";
import GetMeat from "./components/GetMeat";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import NoPage from "./components/NoPage";
import { useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<SearchFood />} />
            <Route path="/fruits/*" element={<GetFruits />} />
            <Route path="/vegetables/*" element={<GetVegetables />} />
            <Route path="/grains/*" element={<GetGrains />} />
            <Route path="/dairy/*" element={<GetDairy />} />
            <Route path="/meat/*" element={<GetMeat />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Layout() {
  let navigate = useNavigate();

  function RouteHome() {
    navigate("/");
  }

  return (
    <>
      <div className="website-banner">
        Snack Track
        <br></br>
        <button className="FIX CSS" onClick={RouteHome}>
          <span class="text">Home</span>
        </button>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;