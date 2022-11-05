import React from 'react'

function Adder(props) {
  const setCount = props.setCount;
  function increaseCount(){
    setCount ((curr) => {return curr + 1 });
}
    return (
    <button onClick={increaseCount}>Increase the count</button>
  )
}

export default Adder