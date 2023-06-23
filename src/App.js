import logo from './logo.svg';
import './App.css';

async function fetchFood() {
  const res = await fetch ("https://api.edamam.com/api/food-database/v2/parser?app_id=05937eba&app_key=7f8c81b2f89b7d71d740c4ba140c9201&ingr=apple&nutrition-type=cooking&category=generic-foods");
  let record = await res.json();
  console.log("fetched a food: ", record.joke);
  return record.joke
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
