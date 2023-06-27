import "./App.css";
import SearchFood from "./components/SearchFood";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FoodCategories from "./components/home";
import NoPage from "./components/NoPage";

function App() {
  return (
    <div className="App">
      <div className="website-banner">Snack Track!</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchFood />}>
            <Route index element={<FoodCategories />} />
            <Route path="foods" element={<FoodCategories />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
