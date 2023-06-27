import "./App.css";
import SearchFood from "./components/SearchFood";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="website-banner"> 
        EXPLORE FOODS!
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchFood />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
