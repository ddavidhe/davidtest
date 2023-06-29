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
import beans from "../foodPictures/meat/beans.webp";
import beef from "../foodPictures/meat/beef.jpeg";
import chicken from "../foodPictures/meat/chicken.webp";
import lamb from "../foodPictures/meat/lamb.webp";
import lentils from "../foodPictures/meat/lentils.webp";
import pork from "../foodPictures/meat/pork.jpeg";
import salmon from "../foodPictures/meat/salmon.jpeg";
import tofu from "../foodPictures/meat/tofu.jpeg";

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

  return (
    <>
      <div class="flex flex-nowrap items-center justify-center">
        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-10 rounded-2xl cursor-pointer"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img src={beans} class="max-w-xs" alt="Beans" />
          <div
            onClick={RouteBeans}
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
          >
            Beans
          </div>
        </div>

        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-10 rounded-2xl cursor-pointer"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img src={beef} class="max-w-xs" alt="Beef" />
          <div
            onClick={RouteBeef}
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
          >
            Beef
          </div>
        </div>

        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-10 rounded-2xl cursor-pointer"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img src={chicken} class="max-w-xs" alt="Chicken" />
          <div
            onClick={RouteChicken}
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
          >
            Chicken
          </div>
        </div>

        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-10 rounded-2xl cursor-pointer"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img src={lamb} class="max-w-xs" alt="Lamb" />
          <div
            onClick={RouteLamb}
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
          >
            Lamb
          </div>
        </div>
      </div>

      <div class="flex flex-nowrap items-center justify-center">
        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-10 rounded-2xl cursor-pointer"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img src={lentils} class="max-w-xs" alt="Lentils" />
          <div
            onClick={RouteLentils}
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
          >
            Lentils
          </div>
        </div>

        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-10 rounded-2xl cursor-pointer"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img src={pork} class="max-w-xs" alt="Pork" />
          <div
            onClick={RoutePork}
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
          >
            Pork
          </div>
        </div>

        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-10 rounded-2xl"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img src={salmon} class="max-w-xs" alt="Salmon" />
          <a href="#!">
            <div
              onClick={RouteSalmon}
              class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
            >
              Salmon
            </div>
          </a>
        </div>

        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-10 rounded-2xl"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img src={tofu} class="max-w-xs" alt="Tofu" />
          <a href="#!">
            <div
              onClick={RouteTofu}
              class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
            >
              Tofu
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
export default GetMeat;
