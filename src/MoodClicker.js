import React, {useState} from 'react';
import './MoodClicker.css'
import UseToggleState from './hooks/UseToggleState';



const MoodClicker = () =>{

    const [isHappy,toggleIsHappy] =  UseToggleState(false)
    const [isDarkMode,toggleIsDarkMode] =  UseToggleState(true)


return (
        <div className={isDarkMode ? 'Clicker-dark' : 'Clicker-light'}>
            <h1> { isHappy ? '😀' : '😟' } </h1>
            <button onClick={toggleIsHappy}>Change Mood</button>
            <button onClick={toggleIsDarkMode}>Toggle Dark/Light Mode</button>

        </div>
        )

}


export default MoodClicker;