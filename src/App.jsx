import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount ] = useState(0);
  function increaseCount(){
    setCount (count+1);
  }

  return (
    <div className="App">
      <header className="App-header">
        The count is {count}
        <button onClick={increaseCount}>
          Increase the count
        </button>
      </header>
      
    </div>
  );
}

export default App;
