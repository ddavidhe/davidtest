import React from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import NoPage from "./NoPage";
import GetBeans from "../foodCategories/meat/beans";
import GetBeef from "../foodCategories/meat/beef";
import GetChicken from "../foodCategories/meat/chicken";
import GetLamb from "../foodCategories/meat/lamb";
import GetLentils from "../foodCategories/meat/lentils";
import GetPork from "../foodCategories/meat/pork";
import GetSalmon from "../foodCategories/meat/salmon";
import GetTofu from "../foodCategories/meat/tofu";
import GetTuna from "../foodCategories/meat/tuna";
import GetTurkey from "../foodCategories/meat/turkey";

function GetMeat() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<MeatList />} />
          <Route path="/beans" element={<GetBeans />} />
          <Route path="/beef" element={<GetBeef />} />
          <Route path="/chicken" element={<GetChicken />} />
          <Route path="/lamb" element={<GetLamb />} />
          <Route path="/lentils" element={<GetLentils />} />
          <Route path="/pork" element={<GetPork />} />
          <Route path="/salmon" element={<GetSalmon />} />
          <Route path="/tofu" element={<GetTofu />} />
          <Route path="/tuna" element={<GetTuna />} />
          <Route path="/turkey" element={<GetTurkey />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </>
  );
}

function MeatList() {
  let navigate = useNavigate();

  function RouteBeans() {
    navigate("/meat/beans");
  }
  function RouteBeef() {
    navigate("/meat/beef");
  }
  function RouteChicken() {
    navigate("/meat/chicken");
  }
  function RouteLamb() {
    navigate("/meat/lamb");
  }
  function RouteLentils() {
    navigate("/meat/lentils");
  }
  function RoutePork() {
    navigate("/meat/pork");
  }
  function RouteSalmon() {
    navigate("/meat/salmon");
  }
  function RouteTofu() {
    navigate("/meat/tofu");
  }
  function RouteTuna() {
    navigate("/meat/tuna");
  }
  function RouteTurkey() {
    navigate("/meat/turkey");
  }

  return (
    <>
      <div>
        <button className="FIX CSS" onClick={RouteBeans}>
          <span class="text">Beans</span>
        </button>
        <button className="FIX CSS" onClick={RouteBeef}>
          <span class="text">Beef</span>
        </button>
        <button className="FIX CSS" onClick={RouteChicken}>
          <span class="text">Chicken</span>
        </button>
        <button className="FIX CSS" onClick={RouteLamb}>
          <span class="text">Lamb</span>
        </button>
        <button className="FIX CSS" onClick={RouteLentils}>
          <span class="text">Lentils</span>
        </button>
        <button className="FIX CSS" onClick={RoutePork}>
          <span class="text">Pork</span>
        </button>
        <button className="FIX CSS" onClick={RouteSalmon}>
          <span class="text">Salmon</span>
        </button>
        <button className="FIX CSS" onClick={RouteTofu}>
          <span class="text">Tofu</span>
        </button>
        <button className="FIX CSS" onClick={RouteTuna}>
          <span class="text">Tuna</span>
        </button>
        <button className="FIX CSS" onClick={RouteTurkey}>
          <span class="text">Turkey</span>
        </button>
      </div>
    </>
  );
}

export default GetMeat;
