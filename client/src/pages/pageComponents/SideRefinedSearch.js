import React from 'react'
import {useState} from 'react'
import '../MainPage.css'

function Checkbox () {
    const [isCityWalk, setCityWalk] = useState(false)
    const [isDogWalk, setDogWalk] = useState(false)
    const [isPark, setPark] = useState(false)
    
    return (
        <span>
            <label>
                <input 
                    type='checkbox'
                    onChange={() => {
                        setCityWalk(!isCityWalk)
                    }}
                />
                <span 
                className={`checkbox ${isCityWalk ? 'checkbox--active' : ''}`}
                aria-hidden='true'
                />
                City Walk
            </label>
            <label>
                <input 
                    type='checkbox'
                    onChange={() => {
                        setDogWalk(!isDogWalk)
                    }}
                />
                <span 
                className={`checkbox ${isDogWalk ? 'checkbox--active' : ''}`}
                aria-hidden='true'
                />
                Dog Walk
            </label>
            <label>
                <input 
                    type='checkbox'
                    onChange={() => {
                        setPark(!isPark)
                    }}
                />
                <span 
                className={`checkbox ${isPark ? 'checkbox--active' : ''}`}
                aria-hidden='true'
                />
                Park Walk
            </label>
        </span>
        // <span>
        //     <label ht></label>
        // </span>
    )
}
export default Checkbox;