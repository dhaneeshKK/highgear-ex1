import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Displayer from './componants/Displayer';
import Adder from './componants/Adder';

function App() {
  const [count, setCount ] = useState(0);
  const [count2, setCount2 ] = useState(0);
  function increaseCount(){
    setCount (count+1);
  }

  return (
    <div className="App">
      <header className="App-header">
        The count is {count}
        <button onClick={increaseCount}>
          Increase count
        </button>
        <Displayer count = {count2}   />
        <Adder setCount = {setCount2}/>
      </header>
      
    </div>
  );
}

export default App;
