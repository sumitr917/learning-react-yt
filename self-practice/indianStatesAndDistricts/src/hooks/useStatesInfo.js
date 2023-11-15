import { useEffect, useState } from 'react'
import {getAllStates} from '../data/getInfo'

function useStateInfo(){
    const [states, setStates] = useState([])
    useEffect(()=>{
        let statesList = getAllStates()
        setStates(statesList)
    }, [])
    return states
}

export default useStateInfo