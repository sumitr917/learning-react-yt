import {useState, useEffect} from 'react'
import { getDistrictsForState } from '../data/getInfo'

function useDistrictInfo(state){
    const [districts, setDistricts] = useState([])
    useEffect(()=>{
        let districtsList = getDistrictsForState(state)
        setDistricts(districtsList)
    },[state])
    return districts
}

export default useDistrictInfo