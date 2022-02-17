
import './App.css';
import { useState } from 'react';

function App() {

const [calories, setCalories] = useState(0)
const [carbs, setCarbs] = useState(0);
const [protein, setProtein] = useState(0);
const [fat, setFat] = useState(0);


  return (
    <div className='App'>
      <h1>My Meal Planner</h1>
      <h2>This is going to be fun!</h2>
      <label>Calories</label>
      <input
        type='search'
        onChange={(event) => {
          setCalories(event.target.value);
        }}
      />
      <label>Carbs</label>
      <input
        type='search'
        onChange={(event) => {
          setCarbs(event.target.value);
        }}
      />
      <label>Protein</label>
      <input
        type='search'
        onChange={(event) => {
          setProtein(event.target.value);
        }}
      />
      <label>Fat</label>
      <input
        type='search'
        onChange={(event) => {
          setFat(event.target.value);
        }}
      />
      <button>Search</button>
    </div>
  );
}

export default App;
