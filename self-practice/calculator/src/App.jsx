import { useState, useId } from 'react'

function App() {

  const [addCheck, setAddCheck] = useState(false)
  const [subtractCheck, setSubtractCheck] = useState(false)
  const [multiplyCheck, setMultiplyCheck] = useState(false)
  const [divideCheck, setDivideCheck] = useState(false)

  const [multiplyEnabled, setMultiplyEnabled] = useState(false)
  const [subtractEnabled, setSubtractEnabled] = useState(false)
  const [addEnabled, setAddEnabled] = useState(false)
  const [divideEnabled, setDivideEnabled] = useState(false)

  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(0)

  function calculate(){
    let number1 = num1
    let number2 = num2

    if(addCheck){
      setResult(number1 + number2)
    }
    else if(subtractCheck){
      setResult(number1 - number2)
    }
    else if(multiplyCheck){
      setResult(number1*number2)
    }
    else if(divideCheck){
      if(number2 === 0){
        setResult(0)
      }
      else{
        setResult(number1/number2)
      }
    }

  }

  function reset(){
    setNum1(0)
    setNum2(0)
    setResult(0)
  }



  const resultId = useId()
  return (
    <>
    <div>
    <h1>Calculator</h1>
      <form onSubmit={(e) => {
        e.preventDefault()
        calculate()
      }}>
      <label htmlFor="num1">Number 1 </label>
      <input 
      type="number"  
      id="num1"
      value={num1}
      onChange={(e) => {
        setNum1(Number(e.target.value))
      }}
      />
      <br/>
      <br/>
      <label htmlFor="num2">Number 2 </label>
      <input 
      type="number"  
      id="num2" 
      value={num2}
      onChange={(e) => {
        setNum2(Number(e.target.value))
      }}
      />
      <br/>
      <br/>
      <label htmlFor={resultId}>Result </label>
      <input 
      type="number" 
      id={resultId} 
      disabled
      value={result}
      />
      <br/>
      <br/>
      <input 
      type="checkbox" 
      id="addCheck" 
      defaultChecked={addCheck}
      disabled={addEnabled}
      onChange={() => {
        setSubtractEnabled((prev) => !prev)
        setMultiplyEnabled((prev) => !prev)
        setDivideEnabled((prev) => !prev)
        setAddCheck((prev) => !prev)
      }}
      />
      <label htmlFor="addCheck">Add</label>
      
      <input 
      type="checkbox" 
      id="subtractCheck" 
      defaultChecked={subtractCheck}
      disabled={subtractEnabled}
      onChange={() => {
        setAddEnabled((prev) => !prev)
        setMultiplyEnabled((prev) => !prev)
        setDivideEnabled((prev) => !prev)
        setSubtractCheck((prev) => !prev)
      }}
      />
      <label htmlFor="subtractCheck">Subtract</label>
      
      <input type="checkbox"  
      id="multiplyCheck" 
      defaultChecked={multiplyCheck}
      disabled={multiplyEnabled}
      onChange={() => {
        setAddEnabled((prev) => !prev)
        setSubtractEnabled((prev) => !prev)
        setDivideEnabled((prev) => !prev)
        setMultiplyCheck((prev) => !prev)
      }}
      />
      <label htmlFor="multiplyCheck">Multiply</label>
      
      <input type="checkbox"  
      id="divideCheck" 
      defaultChecked={divideCheck}
      disabled={divideEnabled}
      onChange={() => {
        setAddEnabled((prev) => !prev)
        setSubtractEnabled((prev) => !prev)
        setMultiplyEnabled((prev) => !prev)
        setDivideCheck((prev) => !prev)
      }}
      />
      <label htmlFor="divideCheck">Divide</label>
      
      <br/>
      <br/>
      <button type='submit'>Calculate</button>
      <br/>
      <br/>
      <button onClick={reset}>Reset</button>
      </form>
    </div>
    </>
  )
}

export default App
