import React from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import GetApple from "../foodCategories/fruits/apple";
import NoPage from "./NoPage";

function GetFruits() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<FruitList />} />
          <Route path="/apple" element={<GetApple />} />
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

  return (
    <>
      <div>
        <button className="FIX CSS" onClick={RouteApple}>
          <span class="text">Apple</span>
        </button>{" "}
      </div>
    </>
  );
}

export default GetFruits;
