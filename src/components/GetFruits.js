import React from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import GetApple from "../foodCategories/fruits/apple";
import NoPage from "./NoPage";
import GetBanana from "../foodCategories/fruits/banana";
import GetAvocado from "../foodCategories/fruits/avocado";
import GetGrape from "../foodCategories/fruits/grape";
import GetKiwi from "../foodCategories/fruits/kiwi";
import GetMango from "../foodCategories/fruits/mango";
import GetOrange from "../foodCategories/fruits/orange";
import GetPineapple from "../foodCategories/fruits/pineapple";
import GetStrawberry from "../foodCategories/fruits/strawberry";
import GetWatermelon from "../foodCategories/fruits/watermelon";

function GetFruits() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<FruitList />} />
          <Route path="/apple" element={<GetApple />} />
          <Route path="/banana" element={<GetBanana />} />
          <Route path="/avocado" element={<GetAvocado />} />
          <Route path="/grape" element={<GetGrape />} />
          <Route path="/kiwi" element={<GetKiwi />} />
          <Route path="/mango" element={<GetMango />} />
          <Route path="/orange" element={<GetOrange />} />
          <Route path="/pineapple" element={<GetPineapple />} />
          <Route path="/strawberry" element={<GetStrawberry />} />
          <Route path="/watermelon" element={<GetWatermelon />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </>
  );
}

function FruitList() {
  let navigate = useNavigate();

  function RouteApple() {
    navigate("/fruits/apple");
  }
  function RouteBanana() {
    navigate("/fruits/banana");
  }
  function RouteAvocado() {
    navigate("/fruits/avocado");
  }
  function RouteGrape() {
    navigate("/fruits/grape");
  }
  function RouteKiwi() {
    navigate("/fruits/kiwi");
  }
  function RouteMango() {
    navigate("/fruits/mango");
  }
  function Routeorange() {
    navigate("/fruits/orange");
  }
  function RoutePineapple() {
    navigate("/fruits/pineapple");
  }
  function RouteStrawberry() {
    navigate("/fruits/strawberry");
  }
  function RouteWatermelon() {
    navigate("/fruits/watermelon");
  }

  return (
    <>
      <div>
        <button className="FIX CSS" onClick={RouteApple}>
          <span class="text">Apple</span>
        </button>
        <button className="FIX CSS" onClick={RouteBanana}>
          <span class="text">Banana</span>
        </button>
        <button className="FIX CSS" onClick={RouteAvocado}>
          <span class="text">Avocado</span>
        </button>
        <button className="FIX CSS" onClick={RouteGrape}>
          <span class="text">Grape</span>
        </button>
        <button className="FIX CSS" onClick={RouteKiwi}>
          <span class="text">Kiwi</span>
        </button>
        <button className="FIX CSS" onClick={RouteMango}>
          <span class="text">Mango</span>
        </button>
        <button className="FIX CSS" onClick={Routeorange}>
          <span class="text">Orange</span>
        </button>
        <button className="FIX CSS" onClick={RoutePineapple}>
          <span class="text">Pineapple</span>
        </button>
        <button className="FIX CSS" onClick={RouteStrawberry}>
          <span class="text">Strawberry</span>
        </button>
      </div>
    </>
  );
}

export default GetFruits;
