import React from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import NoPage from "./NoPage";
import GetBarley from "../foodCategories/grains/barley";
import GetBread from "../foodCategories/grains/bread";
import GetBuckwheat from "../foodCategories/grains/buckwheat";
import GetCereal from "../foodCategories/grains/cereal";
import GetOats from "../foodCategories/grains/oats";
import GetPasta from "../foodCategories/grains/pasta";
import GetQuinoa from "../foodCategories/grains/quinoa";
import GetRice from "../foodCategories/grains/rice";
import GetRye from "../foodCategories/grains/rye";
import GetWheat from "../foodCategories/grains/wheat";

function GetGrains() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<GrainList />} />
          <Route path="/Barley" element={<GetBarley />} />
          <Route path="/bread" element={<GetBread />} />
          <Route path="/buckwheat" element={<GetBuckwheat />} />
          <Route path="/cereal" element={<GetCereal />} />
          <Route path="/oats" element={<GetOats />} />
          <Route path="/pasta" element={<GetPasta />} />
          <Route path="/quinoa" element={<GetQuinoa />} />
          <Route path="/rice" element={<GetRice />} />
          <Route path="/rye" element={<GetRye />} />
          <Route path="/wheat" element={<GetWheat />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </>
  );
}

function GrainList() {
  let navigate = useNavigate();

  function RouteBarley() {
    navigate("/grains/barley");
  }
  function RouteBread() {
    navigate("/grains/bread");
  }
  function RouteBuckwheat() {
    navigate("/grains/buckwheat");
  }
  function RouteCereal() {
    navigate("/grains/cereal");
  }
  function RouteOats() {
    navigate("/grains/oats");
  }
  function RoutePasta() {
    navigate("/grains/pasta");
  }
  function RouteQuinoa() {
    navigate("/grains/quinoa");
  }
  function RouteRice() {
    navigate("/grains/rice");
  }
  function RouteRye() {
    navigate("/grains/rye");
  }
  function RouteWheat() {
    navigate("/grains/wheat");
  }

  return (
    <>
      <div>
        <button className="FIX CSS" onClick={RouteBarley}>
          <span class="text">Barley</span>
        </button>
        <button className="FIX CSS" onClick={RouteBread}>
          <span class="text">Bread</span>
        </button>
        <button className="FIX CSS" onClick={RouteBuckwheat}>
          <span class="text">Buckwheat</span>
        </button>
        <button className="FIX CSS" onClick={RouteCereal}>
          <span class="text">Cereal</span>
        </button>
        <button className="FIX CSS" onClick={RouteOats}>
          <span class="text">Oats</span>
        </button>
        <button className="FIX CSS" onClick={RoutePasta}>
          <span class="text">Pasta</span>
        </button>
        <button className="FIX CSS" onClick={RouteQuinoa}>
          <span class="text">Quinoa</span>
        </button>
        <button className="FIX CSS" onClick={RouteRice}>
          <span class="text">Rice</span>
        </button>
        <button className="FIX CSS" onClick={RouteRye}>
          <span class="text">Rye</span>
        </button>
        <button className="FIX CSS" onClick={RouteWheat}>
          <span class="text">Wheat</span>
        </button>
      </div>
    </>
  );
}

export default GetGrains;
