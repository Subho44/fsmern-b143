
import React from 'react'
import Home from './components/Home';
import About from './components/About';

const App = () => {
 
  const demo = ()=> {
  document.getElementById("x").innerHTML = "welcome to ardent";
  }

  return <>
  <p id='x'>hi nayan...</p>
  <button onClick={demo}>click</button>
  <br></br>
  <Home name="raj"/>
  <About/>
  </>
}

export default App