import React  from 'react'
import "../App.css"
import Temp from './temp'
import { useEffect,useState } from "react"
// import { response } from 'express'

const Whether = () => {
    const [searchData, setsearchData] = useState("Faisalabad")
    const [weatherinfo, setweatherinfo] = useState("")
    const getWeatherInfo= async ()=>{
        try {
            
            const weatherApi= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
            ${searchData}&units=metric&appid=b000dd08815079651ee2cd030993eb0a`)

                 const data= await weatherApi.json()
                 console.log(data)

                //  let temp =  data.main.temp
                 const {temp,humidity,pressure}= data.main;
                const{speed}=data.wind;
                const{country,sunset}=data.sys;
                const{main:weathermood}=data.weather[0];
                const{name}=data;

                const newItems={
                    temp,
                    humidity,
                    pressure,
                    speed,
                    country,
                    sunset,
                    weathermood,
                    name
                }

                setweatherinfo(newItems)


                 
        } catch (error) {
            console.log(error)
        }
     }

    useEffect(() => {
        getWeatherInfo();
        setsearchData("")
    }, [])




    return (<>
        <div className="wrap">
            <div className="search">
            <input type="text" 
            placeholder="search here"
            id="search"
            autoFocus
            className="searchTerm"
            value={searchData}
            onChange={(evt)=>setsearchData(evt.target.value)}
            />
            <button className="searchButton" type="button" onClick={getWeatherInfo}>search</button>
            </div>
        </div>
        <article className="widget">
          
        <Temp weatherinfo={weatherinfo}></Temp>
        </article>
        
        </>
    )
}

export default Whether
