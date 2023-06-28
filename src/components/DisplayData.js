import React, { useEffect, useState } from "react";

const app_id = "05937eba";
const app_key = "7f8c81b2f89b7d71d740c4ba140c9201";

function DisplayData(food) {
  const [query, setQuery] = useState("apple");
  const [foodItem, setFoodItem] = useState(null);
  const [nutrientsObj, setNutrientsObj] = useState(null);
  const [foodFound, setFoodFound] = useState(false);

  useEffect(() => {
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
          setFoodFound(true);
        } else {
          console.log("not found - ", data);
          setFoodFound(false);
        }
      })

      .catch((error) => {
        console.log("error fetching", error);
      });
  }, [query]);

  return (
    <>
      <div className="search-results">
        {
          <>
            {foodFound && foodItem && (
              <div className="food-details" key={foodItem.foodId}>
                <h4>{foodItem.label}</h4>
                <img src={foodItem.image} alt={foodItem.label} />
                {nutrientsObj && (
                  <>
                    <div>
                      <b>Serving Size:</b> {nutrientsObj.servingsize}g
                    </div>
                    <div>
                      <b>Calories:</b> {nutrientsObj.calories}g
                    </div>
                    <div>
                      <b>Protein:</b> {nutrientsObj.protein}g
                    </div>
                    <div>
                      <b>Fat:</b> {nutrientsObj.fat}g
                    </div>
                    <div>
                      <b>Carbohydrates:</b> {nutrientsObj.carbohydrates}g
                    </div>
                    <div>
                      <b>Fiber:</b> {nutrientsObj.fiber}g
                    </div>
                  </>
                )}
              </div>
            )}
          </>
        }
      </div>
    </>
  );
}

export default DisplayData;
