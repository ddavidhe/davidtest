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

  return (
    <>
      <div class="flex flex-nowrap items-center justify-center">
        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-10 rounded-2xl cursor-pointer"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img
            src="https://cdn.foodaciously.com/static/stories/9ad05c90-6a44-47e3-9dca-cf10cdba18d3/cooked-barley-grains-close-up-47668b1d7aa0c9665f5433ec8eecf44b-640-q60.jpg"
            class="max-w-xs"
            alt="Barley"
          />
          <div
            onClick={RouteBarley}
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
          >
            Barley
          </div>
        </div>

        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-10 rounded-2xl cursor-pointer"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img
            src="https://houseofnasheats.com/wp-content/uploads/2022/02/French-Bread-1.jpg"
            class="max-w-xs"
            alt="Bread"
          />
          <div
            onClick={RouteBread}
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
          >
            Bread
          </div>
        </div>

        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-10 rounded-2xl cursor-pointer"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img
            src="https://www.olgainthekitchen.com/wp-content/uploads/2020/01/How-to-Cook-Buckwheat-Kasha-Recipe-3.jpg"
            class="max-w-xs"
            alt="Buckwheat"
          />
          <div
            onClick={RouteBuckwheat}
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
          >
            Buckwheat
          </div>
        </div>

        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-10 rounded-2xl cursor-pointer"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img
            src="https://i.pinimg.com/736x/6d/af/bf/6dafbf8127db2bbfd48b2140e89a95cc.jpg"
            class="max-w-xs"
            alt="Cereal"
          />
          <div
            onClick={RouteCereal}
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
          >
            Cereal
          </div>
        </div>
      </div>

      <div class="flex flex-nowrap items-center justify-center">
        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-10 rounded-2xl cursor-pointer"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img
            src="https://media.architecturaldigest.com/photos/63fe6ed58e4acf42248cafd3/1:1/w_4672,h_4672,c_limit/GettyImages-1170856565.jpg"
            class="max-w-xs"
            alt="Oats"
          />
          <div
            onClick={RouteOats}
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
          >
            Oats
          </div>
        </div>

        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-10 rounded-2xl cursor-pointer"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img
            src="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg"
            class="max-w-xs"
            alt="Pasta"
          />
          <div
            onClick={RoutePasta}
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
          >
            Pasta
          </div>
        </div>

        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-10 rounded-2xl"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img
            src="https://hips.hearstapps.com/thepioneerwoman/wp-content/uploads/2016/01/how-to-cook-quinoa-01.jpg?crop=0.6665xw:1xh;center,top&resize=1200:*"
            class="max-w-xs"
            alt="Quinoa"
          />
          <a href="#!">
            <div
              onClick={RouteQuinoa}
              class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
            >
              Quinoa
            </div>
          </a>
        </div>

        <div
          class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat w-80 h-72 mx-7 my-10 rounded-2xl"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img
            src="https://www.keepingthepeas.com/wp-content/uploads/2021/07/ninja-foodi-rice-8.jpg"
            class="max-w-xs"
            alt="Rice"
          />
          <a href="#!">
            <div
              onClick={RouteRice}
              class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-black font-serif font-semibold"
            >
              Rice
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default GetGrains;
