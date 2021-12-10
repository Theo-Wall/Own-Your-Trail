import React from 'react'
import {useState} from 'react'
import '../pages/MainPage'

function Checkbox () {
    const [isCityWalk, setCityWalk] = useState(false)
    const [isDogWalk, setDogWalk] = useState(false)
    const [isPark, setPark] = useState(false)
    
    return (
        <span className="divfix">
            <div>
            <label className="checkbox-label">
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
        </span>
        // <span>
        //     <label ht></label>
        // </span>
    )
}
export default Checkbox;