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
import { Home } from "react-feather";
import HomeButton from "./components/HomeButton";

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
      <div class="block px-10 pb-10 text-black text-5xl font-serif font-medium leading-tight bg-center bg-no-repeat bg-cover bg-guardian md:px-5 md:py-5 lg:px-10 lg:py-10">
        Snack Track
        <br></br>
        <HomeButton
          onClick={RouteHome}
          text="Home"
          class="absolute top-8 left-10 h-16 w-16 text-xl"
        >
          <Home size={65} />
        </HomeButton>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
