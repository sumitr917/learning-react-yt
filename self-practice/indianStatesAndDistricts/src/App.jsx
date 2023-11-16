import { useState } from 'react'
import useStateInfo from './hooks/useStatesInfo'
import useDistrictInfo from './hooks/useDistrictInfo'

function App() {
  const [selectedState, setSelectedState] = useState('Andhra Pradesh')
  const [selectedDistrict, setSelectedDistrict] = useState('Anantapur')

  const statesList = useStateInfo()
  const districts = useDistrictInfo(selectedState)
  
  // console.log(districts)
  function onSelectedStateChange(state){
    setSelectedState(state)
    setSelectedDistrict('')
  }

  function onSelectedDistrictChange(district){
    setSelectedDistrict(district)
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
      <br/>
      <br/>
      <select value={selectedDistrict} onChange={(e)=> onSelectedDistrictChange(e.target.value)}>
        {
          districts && districts.map((district)=>(
            <option key={district} value={district}>
              {district}
            </option>
          ))
        }
      </select>
      <br/>
      <br/>
      <p>
        The selected state is {selectedState} and selected district is {selectedDistrict}
      </p>

    </>
  )
}

export default App
