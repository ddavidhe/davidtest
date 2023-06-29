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
import butter from "../foodPictures/dairy/butter.jpeg";
import cheese from "../foodPictures/dairy/cheese.jpeg";
import cottagecheese from "../foodPictures/dairy/cottagecheese.webp";
import cream from "../foodPictures/dairy/cream.jpeg";
import creamcheese from "../foodPictures/dairy/creamcheese.jpeg";
import icecream from "../foodPictures/dairy/icecream.jpeg";
import milk from "../foodPictures/dairy/milk.webp";
import sourcream from "../foodPictures/dairy/sourcream.webp";

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

  return (
    <>
      <div class="flex flex-nowrap items-center justify-center">
        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-10 rounded-2xl cursor-pointer"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img src={butter} class="max-w-xs" alt="Butter" />
          <div
            onClick={RouteButter}
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
          >
            Butter
          </div>
        </div>

        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-10 rounded-2xl cursor-pointer"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img src={cheese} class="max-w-xs" alt="Cheese" />
          <div
            onClick={RouteCheese}
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
          >
            Cheese
          </div>
        </div>

        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-10 rounded-2xl cursor-pointer"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img src={cottagecheese} class="max-w-xs" alt="Cottage Cheese" />
          <div
            onClick={RouteCottageCheese}
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
          >
            Cottage Cheese
          </div>
        </div>

        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-10 rounded-2xl cursor-pointer"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img src={cream} class="max-w-xs" alt="Cream" />
          <div
            onClick={RouteCream}
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
          >
            Cream
          </div>
        </div>
      </div>

      <div class="flex flex-nowrap items-center justify-center">
        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-10 rounded-2xl cursor-pointer"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img src={creamcheese} class="max-w-xs" alt="Cream Cheese" />
          <div
            onClick={RouteCreamCheese}
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
          >
            Cream Cheese
          </div>
        </div>

        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-10 rounded-2xl cursor-pointer"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img src={icecream} class="max-w-xs" alt="Ice Cream" />
          <div
            onClick={RouteIceCream}
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
          >
            Ice Cream
          </div>
        </div>

        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-10 rounded-2xl"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img src={milk} class="max-w-xs" alt="Milk" />
          <a href="#!">
            <div
              onClick={RouteMilk}
              class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
            >
              Milk
            </div>
          </a>
        </div>

        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-10 rounded-2xl"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img src={sourcream} class="max-w-xs" alt="Sour Cream" />
          <a href="#!">
            <div
              onClick={RouteSourCream}
              class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
            >
              Sour Cream
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default GetDairy;
