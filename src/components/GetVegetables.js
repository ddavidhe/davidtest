import React from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import NoPage from "./NoPage";
import GetBellPepper from "../foodCategories/vegetables/bellpepper";
import GetBroccoli from "../foodCategories/vegetables/broccoli";
import GetCarrot from "../foodCategories/vegetables/carrot";
import GetCauliflower from "../foodCategories/vegetables/cauliflower";
import GetCucumber from "../foodCategories/vegetables/cucumber";
import GetLettuce from "../foodCategories/vegetables/lettuce";
import GetOnion from "../foodCategories/vegetables/onion";
import GetPotato from "../foodCategories/vegetables/potato";
import GetTomato from "../foodCategories/vegetables/tomato";
import GetZucchini from "../foodCategories/vegetables/zucchini";

function GetVegetables() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<VegetableList />} />
          <Route path="/bellpepper" element={<GetBellPepper />} />
          <Route path="/broccoli" element={<GetBroccoli />} />
          <Route path="/carrot" element={<GetCarrot />} />
          <Route path="/cauliflower" element={<GetCauliflower />} />
          <Route path="/cucumber" element={<GetCucumber />} />
          <Route path="/lettuce" element={<GetLettuce />} />
          <Route path="/onion" element={<GetOnion />} />
          <Route path="/potato" element={<GetPotato />} />
          <Route path="/tomato" element={<GetTomato />} />
          <Route path="/zucchini" element={<GetZucchini />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </>
  );
}

function VegetableList() {
  let navigate = useNavigate();

  function RouteBellPepper() {
    navigate("/vegetables/bellpepper");
  }
  function RouteBroccoli() {
    navigate("/vegetables/broccoli");
  }
  function RouteCarrot() {
    navigate("/vegetables/carrot");
  }
  function RouteCauliflower() {
    navigate("/vegetables/cauliflower");
  }
  function RouteCucumber() {
    navigate("/vegetables/cucumber");
  }
  function RouteLettuce() {
    navigate("/vegetables/lettuce");
  }
  function RouteOnion() {
    navigate("/vegetables/onion");
  }
  function RoutePotato() {
    navigate("/vegetables/potato");
  }
  function RouteTomato() {
    navigate("/vegetables/tomato");
  }
  function RouteZucchini() {
    navigate("/vegetables/zucchini");
  }

  return (
    <>
      <div>
        <button className="FIX CSS" onClick={RouteBellPepper}>
          <span class="text">Bell Pepper</span>
        </button>
        <button className="FIX CSS" onClick={RouteBroccoli}>
          <span class="text">Broccoli</span>
        </button>
        <button className="FIX CSS" onClick={RouteCarrot}>
          <span class="text">Carrot</span>
        </button>
        <button className="FIX CSS" onClick={RouteCauliflower}>
          <span class="text">Cauliflower</span>
        </button>
        <button className="FIX CSS" onClick={RouteCucumber}>
          <span class="text">Cucumber</span>
        </button>
        <button className="FIX CSS" onClick={RouteLettuce}>
          <span class="text">Lettuce</span>
        </button>
        <button className="FIX CSS" onClick={RouteOnion}>
          <span class="text">Onion</span>
        </button>
        <button className="FIX CSS" onClick={RoutePotato}>
          <span class="text">Potato</span>
        </button>
        <button className="FIX CSS" onClick={RouteTomato}>
          <span class="text">Tomato</span>
        </button>
        <button className="FIX CSS" onClick={RouteZucchini}>
          <span class="text">Zucchini</span>
        </button>
      </div>
    </>
  );
}

export default GetVegetables;
