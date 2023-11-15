import { useState } from 'react'
import useStateInfo from './hooks/useStatesInfo'
import useDistrictInfo from './hooks/useDistrictInfo'

function App() {
  const [selectedState, setSelectedState] = useState('')

  const statesList = useStateInfo()
  const districts = useDistrictInfo(selectedState)
  
  // console.log(districts)
  function onSelectedStateChange(state){
    setSelectedState(state)
  }

  return (
    <>
      <select value={selectedState} onChange={(e) => onSelectedStateChange(e.target.value)}>
        {
          statesList.map((state)=>(
            <option key={state} value={state}>
              {state}
            </option>
          )

          )
        }
      </select>
      <ul>
        {
          districts && districts.map((district)=>(
            <li key={district}>
              {district}
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default App
