import React from 'react'
import './Weather.css'
import 'weather-icons/css/weather-icons.css'
const Weather = (props)=>{
    return(
        <React.Fragment>
            <div className="temp">
                <div>
                <h1>{props.name2}</h1>
                    </div>
                <h1>
                    <i className={props.weatherx}></i>
                </h1>
                <div >
                    <h1>{props.temp.x}&deg;c</h1>
                </div>
                <div className="max-min" >
    <h1>{props.temp.y}&deg;c</h1>
    <h1>{props.temp.z}&deg;c</h1>
                </div>
                <h3>{props.temp.m} </h3>
                
            </div>

        </React.Fragment>
    )
}
export default Weather;