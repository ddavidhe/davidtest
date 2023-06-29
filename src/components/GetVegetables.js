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
import bellpepper from "../foodPictures/vegetables/bellpepper.jpeg";
import broccoli from "../foodPictures/vegetables/broccoli.jpeg";
import carrot from "../foodPictures/vegetables/carrot.jpeg";
import cauliflower from "../foodPictures/vegetables/cauliflower.jpeg";
import cucumber from "../foodPictures/vegetables/cucumber.webp";
import lettuce from "../foodPictures/vegetables/lettuce.webp";
import onion from "../foodPictures/vegetables/onion.jpeg";
import potato from "../foodPictures/vegetables/potato.webp";

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

  return (
    <>
      <div class="flex flex-nowrap items-center justify-center">
        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-10 rounded-2xl cursor-pointer"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img src={bellpepper} class="max-w-xs" alt="Bell Pepper" />
          <div
            onClick={RouteBellPepper}
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
          >
            Bell Pepper
          </div>
        </div>

        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-10 rounded-2xl cursor-pointer"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img src={broccoli} class="max-w-xs" alt="Broccoli" />
          <div
            onClick={RouteBroccoli}
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
          >
            Broccoli
          </div>
        </div>

        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-10 rounded-2xl cursor-pointer"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img src={carrot} class="max-w-xs" alt="Carrot" />
          <div
            onClick={RouteCarrot}
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
          >
            Carrot
          </div>
        </div>

        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-10 rounded-2xl cursor-pointer"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img src={cauliflower} class="max-w-xs" alt="Cauliflower" />
          <div
            onClick={RouteCauliflower}
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
          >
            Cauliflower
          </div>
        </div>
      </div>

      <div class="flex flex-nowrap items-center justify-center">
        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-10 rounded-2xl cursor-pointer"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img src={cucumber} class="max-w-xs" alt="Cucumber" />
          <div
            onClick={RouteCucumber}
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
          >
            Cucumber
          </div>
        </div>

        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-10 rounded-2xl cursor-pointer"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img src={lettuce} class="max-w-xs" alt="Lettuce" />
          <div
            onClick={RouteLettuce}
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
          >
            Lettuce
          </div>
        </div>

        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-10 rounded-2xl"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img src={onion} class="max-w-xs" alt="Onion" />
          <a href="#!">
            <div
              onClick={RouteOnion}
              class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
            >
              Onion
            </div>
          </a>
        </div>

        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-10 rounded-2xl"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img src={potato} class="max-w-xs" alt="Potato" />
          <a href="#!">
            <div
              onClick={RoutePotato}
              class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
            >
              Potato
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
export default GetVegetables;
