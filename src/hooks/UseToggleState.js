import React, {useState} from "react"


const UseToggleState = (initialState=true) =>{

    const [state, setState] = useState(initialState)
    const toggleState = () => {

        setState(state => !state)

        
    }
    return [state,toggleState]
}
export default UseToggleState;
// const [isHappy, setHappy] = useState(false)
// const [isDarkMode, setIsDarkMode] = useState(false)


// const toggleMood = () =>{

//     setHappy( mood => !mood)
// }

// const toggleIsDarkMode = () =>{
//     setIsDarkMode(mode => !mode)
// }