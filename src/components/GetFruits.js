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
import apple from "../foodPictures/fruits/apple.jpeg";
import avocado from "../foodPictures/fruits/avocado.jpeg";
import banana from "../foodPictures/fruits/banana.jpg";
import grapes from "../foodPictures/fruits/grapes.jpeg";
import kiwi from "../foodPictures/fruits/kiwi.jpeg";
import mango from "../foodPictures/fruits/mango.jpeg";
import orange from "../foodPictures/fruits/orange.jpeg";
import pineapple from "../foodPictures/fruits/pineapples.jpeg";

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
  function RouteOrange() {
    navigate("/fruits/orange");
  }
  function RoutePineapple() {
    navigate("/fruits/pineapple");
  }

  return (
    <>
      <div class="flex flex-nowrap items-center justify-center">
        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-8 rounded-2xl cursor-pointer"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img src={apple} class="max-w-xs" alt="Apple" />
          <div
            onClick={RouteApple}
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
          >
            Apple
          </div>
        </div>

        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-8 rounded-2xl cursor-pointer"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img src={banana} class="max-w-xs" alt="Banana" />
          <div
            onClick={RouteBanana}
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
          >
            Banana
          </div>
        </div>

        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-8 rounded-2xl cursor-pointer"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img src={avocado} class="max-w-xs" alt="Avocado" />
          <div
            onClick={RouteAvocado}
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
          >
            Avocado
          </div>
        </div>

        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-8 rounded-2xl cursor-pointer"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img src={grapes} class="max-w-xs" alt="Grape" />
          <div
            onClick={RouteGrape}
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
          >
            Grape
          </div>
        </div>
      </div>

      <div class="flex flex-nowrap items-center justify-center">
        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-8 rounded-2xl cursor-pointer"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img src={kiwi} class="max-w-xs" alt="Kiwi" />
          <div
            onClick={RouteKiwi}
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
          >
            Kiwi
          </div>
        </div>

        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-8 rounded-2xl cursor-pointer"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img src={mango} class="max-w-xs" alt="Mango" />
          <div
            onClick={RouteMango}
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
          >
            Mango
          </div>
        </div>

        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-8 rounded-2xl"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img src={orange} class="max-w-xs" alt="Orange" />
          <a href="#!">
            <div
              onClick={RouteOrange}
              class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
            >
              Orange
            </div>
          </a>
        </div>

        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-8 rounded-2xl"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img src={pineapple} class="max-w-xs" alt="Pineapple" />
          <a href="#!">
            <div
              onClick={RoutePineapple}
              class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
            >
              Pineapple
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default GetFruits;
