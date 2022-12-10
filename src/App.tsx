import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Counter } from './bases/Counter'
function App() {

  return (
    <>
      <h1>React</h1>
      <hr/>
      <Counter initialValue={ 15 } />
    </>
  )
}

export default App
