import { useState } from 'react';
import logo from './logo.svg';
import './main.css';
import getApple from './components/fetchFood';

function App() {
  const [nutrientsObj, setNutrientsObj] = useState(null);

  const handleClick = async () => {
    try {
      const data = await getApple();
      setNutrientsObj(data);
    } catch (error) {
      // Handle error if necessary
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleClick}>
          Button to fetch and display the info
        </button>
        {nutrientsObj && (
          <>
            <div>
              <b>Name:</b> {nutrientsObj.name}
            </div>
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
      </header>
    </div>
  );
}

export default App;
