import React , {useState, useEffect} from 'react'

const Temp = ({weatherinfo}) => {
    const [weatherChange,setweatherChange] = useState("")
   
    const{
        temp,
        humidity,
        pressure,
        speed,
        country,
        sunset,
        weathermood,
        name
    }=weatherinfo
    useEffect(() => {
        if(weathermood){
            switch (weathermood) {
                case "Clouds":
                    setweatherChange("wi-day-cloudy")
                    
                    break;
                    case "Mist":
                        setweatherChange("wi-dust")
                        
                        break;
                        case "Clear":
                            setweatherChange("wi-day-sunny")
                            
                            break;
                            case "Haze":
                                setweatherChange("wi-day-hail")
                                
                                break;
            
                default:   setweatherChange("wi-day-fog")
                    break;
            }
        }
      
    }, [weathermood])
    let sec= sunset;
    let date= new Date(sec*1000)
    let time= `${date.getHours()}:${date.getMinutes()}`
  return (
    <>
        <div className="weatherIcon">
                <i class={`wi ${weatherChange}`}></i>
            </div>
            <div className="weatherInfo">
                <div className="temperature">
                    <span>{temp}&deg;</span>
                </div>
                <div className="description">
                    <div className="weatherCondition">{weathermood}</div>
                    <div className="place">{name}, {country}</div>
                </div>

            </div>
            <div className="date"> { new Date().toLocaleString() }</div>
<div className="extra-temp">
    <div className="temp-info-minmax">
        <div className="two-sided-section">
            <p>
                <i className={"wi wi-day-sunny"}></i>
            </p>
            <p className="extra-info-leftside">
               {time} PM<br />Sunset
            </p>
        </div>
        <div className="two-sided-section">
            <p>
                <i className={"wi wi-humidity"}></i>
            </p>
            <p className="extra-info-leftside">
               {humidity} <br />Humidity
            </p>
        </div>
    </div>

    <div className="weather-extra-info">
        
    <div className="two-sided-section">
            <p>
                <i className={"wi wi-cloud-up"}></i>
            </p>
            <p className="extra-info-leftside">
               {pressure}<br />pressure
            </p>
        </div>
        <div className="two-sided-section">
            <p>
                <i className={"wi wi-strong-wind"}></i>
            </p>
            <p className="extra-info-leftside">
               {speed}<br />Wind
            </p>
        </div>


    </div>
    
</div>
    </>
  )
}

export default Temp
