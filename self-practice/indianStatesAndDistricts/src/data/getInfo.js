import data from './info.json' assert { type: 'json' }

// console.log(JSON.stringify(data.states))

const states = data.states

let statesData = {}

for (let index = 0; index < states.length; index++) 
{  
    //console.log(states[index])
    statesData[states[index].state] = states[index].districts
}

//console.log(statesData)

export function getAllStates(){
    return Object.keys(statesData)
}

export function getDistrictsForState(state){
    if(state !== null)
    return statesData[state]
    return null
}


