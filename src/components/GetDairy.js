import React from "react";
import { useNavigate } from "react-router-dom";

function GetDairy() {
  let navigate = useNavigate();

  function RouteHome() {
    navigate("/");
  }

  return (
    <>
      <div>
        <button className="categories-button-home" onClick={RouteHome}>
          <span class="text">Home</span>
        </button>
      </div>
    </>
  );
}

export default GetDairy;
