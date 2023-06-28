import React from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import NoPage from "./NoPage";
import GetButter from "../foodCategories/dairy/butter";
import GetCheese from "../foodCategories/dairy/cheese";
import GetCottageCheese from "../foodCategories/dairy/cottagecheese";
import GetCream from "../foodCategories/dairy/cream";
import GetCreamCheese from "../foodCategories/dairy/creamcheese";
import GetIceCream from "../foodCategories/dairy/icecream";
import GetMilk from "../foodCategories/dairy/milk";
import GetSourCream from "../foodCategories/dairy/sourcream";
import GetYogurt from "../foodCategories/dairy/yogurt";

function GetDairy() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<DairyList />} />
          <Route path="/butter" element={<GetButter />} />
          <Route path="/cheese" element={<GetCheese />} />
          <Route path="/cottagecheese" element={<GetCottageCheese />} />
          <Route path="/cream" element={<GetCream />} />
          <Route path="/creamcheese" element={<GetCreamCheese />} />
          <Route path="/icecream" element={<GetIceCream />} />
          <Route path="/milk" element={<GetMilk />} />
          <Route path="/sourcream" element={<GetSourCream />} />
          <Route path="/yogurt" element={<GetYogurt />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </>
  );
}

function DairyList() {
  let navigate = useNavigate();

  function RouteButter() {
    navigate("/dairy/butter");
  }
  function RouteCheese() {
    navigate("/dairy/cheese");
  }
  function RouteCottageCheese() {
    navigate("/dairy/cottagecheese");
  }
  function RouteCream() {
    navigate("/dairy/cream");
  }
  function RouteCreamCheese() {
    navigate("/dairy/creamcheese");
  }
  function RouteIceCream() {
    navigate("/dairy/icecream");
  }
  function RouteMilk() {
    navigate("/dairy/milk");
  }
  function RouteSourCream() {
    navigate("/dairy/sourcream");
  }
  function RouteYogurt() {
    navigate("/dairy/yogurt");
  }

  return (
    <>
      <div>
        <button className="FIX CSS" onClick={RouteButter}>
          <span class="text">Butter</span>
        </button>
        <button className="FIX CSS" onClick={RouteCheese}>
          <span class="text">Cheese</span>
        </button>
        <button className="FIX CSS" onClick={RouteCottageCheese}>
          <span class="text">Cottage Cheese</span>
        </button>
        <button className="FIX CSS" onClick={RouteCream}>
          <span class="text">Cream</span>
        </button>
        <button className="FIX CSS" onClick={RouteCreamCheese}>
          <span class="text">Cream Cheese</span>
        </button>
        <button className="FIX CSS" onClick={RouteIceCream}>
          <span class="text">Ice Cream</span>
        </button>
        <button className="FIX CSS" onClick={RouteMilk}>
          <span class="text">Milk</span>
        </button>
        <button className="FIX CSS" onClick={RouteSourCream}>
          <span class="text">Sour Cream</span>
        </button>
        <button className="FIX CSS" onClick={RouteYogurt}>
          <span class="text">Yogurt</span>
        </button>
      </div>
    </>
  );
}

export default GetDairy;
