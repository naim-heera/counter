import { useState } from 'react'

function App() {


let [counter, setCounter] = useState(0)


  const addValue = () => {
    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)

  }
  const removeValue = () => { setCounter(counter - 1) }
  const reset = () => {setCounter(0)}


  return (
    <>
      <h1>Initial value : 0 | {counter}</h1>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
      <br />
      <button onClick={reset}>Reset value</button>
    </>

  )
}

export default App
