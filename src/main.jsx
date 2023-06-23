//import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './main.css';



function App() {

  const nutrientsObj = {}

  const getApple = () => {
    fetch("https://api.edamam.com/api/food-database/v2/parser?app_id=05937eba&app_key=7f8c81b2f89b7d71d740c4ba140c9201&ingr=apple&nutrition-type=cooking&category=generic-foods")
      .then((res) => res.json())
      .then((data) => {
        let nutrients = data.parsed[0].food.nutrients;
        nutrientsObj.calories = nutrients.ENERC_KCAL;
        nutrientsObj.protein = nutrients.PROCNT;
        nutrientsObj.fat = nutrients.FAT;
        nutrientsObj.carbohydrates = nutrients.CHOCDF;
        nutrientsObj.fiber = nutrients.FIBTG;
        console.log(nutrientsObj);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={() => getApple()}>
          button to console.log the info
        </p>
        <h1>
          cals
        </h1>
      </header>
    </div>
  );
}

export default App;
