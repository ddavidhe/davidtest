import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const app_id = "05937eba";
const app_key = "7f8c81b2f89b7d71d740c4ba140c9201";

function SearchFood() {
  let navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [foodItem, setFoodItem] = useState(null);
  const [nutrientsObj, setNutrientsObj] = useState(null);
  const [foodFound, setFoodFound] = useState(false);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [servingSize, setServingSize] = useState(100);
  const [errorMessage, setErrorMessage] = useState("");

  const onSearch = () => {
    if (query.trim() === "") {
      setErrorMessage("Please enter a search query.");
      return;
    }

    setErrorMessage("");
    setSearched(true);
    setLoading(true);

    fetch(
      `https://api.edamam.com/api/food-database/v2/parser?app_id=${app_id}&app_key=${app_key}&ingr=${query}&nutrition-type=cooking&category=generic-foods`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data && data.hints.length > 0) {
          const food = data.hints[0].food;
          setFoodItem(food);
          const nutrients = food.nutrients;
          const nutrientsObj = {
            servingsize: 100,
            calories: nutrients.ENERC_KCAL,
            protein: nutrients.PROCNT,
            fat: nutrients.FAT,
            carbohydrates: nutrients.CHOCDF,
            fiber: nutrients.FIBTG,
          };

          setNutrientsObj(nutrientsObj);
          console.log("nutrients - ", nutrientsObj);
          setFoodFound(true);
        } else {
          console.log("not found - ", data);
          setFoodFound(false);
        }

        setLoading(false);
        setQuery("");
      })
      .catch((error) => {
        console.log("error fetching", error);
        setLoading(false);
      });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  // function RouteHome() {
  //   setFoodItem(null);
  //   setNutrientsObj(null);
  //   setFoodFound(false);
  //   setSearched(false);
  //   setLoading(false);
  //   setErrorMessage("");
  //   setQuery("");
  //   navigate("/");
  // }

  function RouteFruits() {
    navigate("/fruits");
  }

  function RouteVegetables() {
    navigate("/vegetables");
  }

  function RouteGrains() {
    navigate("/grains");
  }

  function RouteDairy() {
    navigate("/dairy");
  }

  function RouteMeat() {
    navigate("/meat");
  }

  return (
    <>
      <div>
        <button className="categories-button" onClick={RouteFruits}>
          <span class="text">Fruits</span>
        </button>
        <button className="categories-button" onClick={RouteVegetables}>
          <span class="text">Vegetables</span>
        </button>
        <button className="categories-button" onClick={RouteGrains}>
          <span class="text">Grains</span>
        </button>
        <button className="categories-button" onClick={RouteDairy}>
          <span class="text">Dairy</span>
        </button>
        <button className="categories-button" onClick={RouteMeat}>
          <span class="text">Meat and Alternatives</span>
        </button>
      </div>
      <div className="search-food-section">
        <input
          type="text"
          placeholder="Search Food Item"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div>
          <FontAwesomeIcon
            icon={faSearch}
            onClick={onSearch}
            style={{ cursor: "pointer" }}
          />
        </div>
        {errorMessage && <p>{errorMessage}</p>}
      </div>

      <div className="search-results">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {foodFound && foodItem && (
              <div className="food-details" key={foodItem.foodId}>
                <h4>{foodItem.label}</h4>
                <img src={foodItem.image} alt={foodItem.label} />
                {nutrientsObj && (
                  <>
                    <div>
                      <label class="font-semibold">
                        Serving Size (g):
                        <input
                          type="number"
                          min="1"
                          value={servingSize}
                          class="text-right border-2 border-black ml-2 font-normal"
                          onChange={(e) => setServingSize(e.target.value)}
                        />
                      </label>
                    </div>
                    <div>
                      <b>Calories:</b>{" "}
                      {((nutrientsObj.calories * servingSize) / 100).toFixed(2)}
                    </div>
                    <div>
                      <b>Protein:</b>{" "}
                      {((nutrientsObj.protein * servingSize) / 100).toFixed(2)}g
                    </div>
                    <div>
                      <b>Fat:</b>{" "}
                      {((nutrientsObj.fat * servingSize) / 100).toFixed(2)}g
                    </div>
                    <div>
                      <b>Carbohydrates:</b>{" "}
                      {(
                        (nutrientsObj.carbohydrates * servingSize) /
                        100
                      ).toFixed(2)}
                      g
                    </div>
                    <div>
                      <b>Fiber:</b>{" "}
                      {((nutrientsObj.fiber * servingSize) / 100).toFixed(2)}g
                    </div>
                  </>
                )}
              </div>
            )}

            {searched && !foodFound && <p>No food found.</p>}
          </>
        )}
      </div>
    </>
  );
}

export default SearchFood;
