import React from 'react'
import './Weather.css'
import 'weather-icons/css/weather-icons.css'
const Weather = (props)=>{
    return(
        <React.Fragment>
            <div className="temp">
                <div>
                    <h1>London, UK</h1>
                    </div>
                <h1>
                    <i className="wi wi-day-rain display-1"></i>
                </h1>
                <div >
                    <h1>23&deg;c</h1>
                </div>
                <div className="max-min" >
                    <h1>18&deg;c</h1>
                    <h1>21&deg;c</h1>
                </div>
                <div>Light weather and sunny </div>
            </div>

        </React.Fragment>
    )
}
export default Weather;