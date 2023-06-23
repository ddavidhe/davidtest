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
              <b>Calories:</b> {nutrientsObj.calories}
            </div>
            <div>
              <b>Protein:</b> {nutrientsObj.protein}
            </div>
            <div>
              <b>Fat:</b> {nutrientsObj.fat}
            </div>
            <div>
              <b>Carbohydrates:</b> {nutrientsObj.carbohydrates}
            </div>
            <div>
              <b>Fiber:</b> {nutrientsObj.fiber}
            </div>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
