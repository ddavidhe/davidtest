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
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/apples-royalty-free-image-164084111-1537885595.jpg?crop=0.66667xw:1xh;center,top&resize=1200:*"
            class="max-w-xs"
            alt="Apple"
          />
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
          <img
            src="https://www.rainforest-alliance.org/wp-content/uploads/2021/06/bananas-1-e1624909301641.jpg.optimal.jpg"
            class="max-w-xs"
            alt="Banana"
          />
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
          <img
            src="https://www.jessicagavin.com/wp-content/uploads/2019/04/avocados-3-600x900.jpg"
            class="max-w-xs"
            alt="Avocado"
          />
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
          <img
            src="https://asvfarms.co.za/wp-content/uploads/2022/09/crimson-seedless-two-bunches-square.jpg"
            class="max-w-xs"
            alt="Grape"
          />
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
          <img
            src="https://www.chrisbowers.co.uk/controlpanel/ckfinder/userfiles/images/kiwi%20vine.jpg"
            class="max-w-xs"
            alt="Kiwi"
          />
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
          <img
            src="https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            class="max-w-xs"
            alt="Mango"
          />
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
          <img
            src="https://images.immediate.co.uk/production/volatile/sites/30/2017/06/oranges-85fb2b6.jpg"
            class="max-w-xs"
            alt="Orange"
          />
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
          <img
            src="https://www.madaboutmacarons.com/wp-content/uploads/2022/01/French-pineapples.jpg"
            class="max-w-xs"
            alt="Pineapple"
          />
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
