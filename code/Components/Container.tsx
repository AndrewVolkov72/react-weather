import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { apiKey } from '../constants/constants'
import { useTypeSelector } from '../hooks/useTypeSelector'
import { Main } from './Main/Main'
import { Weather } from './Weather/Weather'

export const Container:FC = ({children}) => {
    const [hours, setHours] = useState<number>(0)
    const [minutes, setMinutes] = useState<number>(0)

    const [city, setCity] = useState<any[]>([])
    
    const [days, setDays] = useState<any[]>([])
    const [newDays, setNewDays] = useState<any[]>([])

    const [lat, setLat] = useState<number>(0)
    const [lon, setLon] = useState<number>(0)

    const [iconId, setIconId] = useState<number>(0)
    const [dateModal, setDateModal] = useState<number>(0)
    const [temp, setTemp] = useState<any>({})
    const [tempFeelsLike, setTempFeelsLike] = useState<any>({})
    const [pressure, setPressure] = useState<number>(0)
    const [windSpeed, setWindSpeed] = useState<number>(0)
    const [windDeg, setWindDeg] = useState<number>(0)
    const [humidity, setHumidity] = useState<number>(0)

    const [currentDay, setCurrentDay] = useState<any>({})
    const [currentIconId, setCurrentIconId] = useState<any>({})

    const cityNames = useTypeSelector(state=>state.cityReducer.name)
    const loading = useTypeSelector(state=>state.loadingReducer.loading)
    const dispatch = useDispatch()

    async function getCitys(name:string, key:string) {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${name}&appid=${key}`)
        const day = await response.json()
        setLat(day[0].lat)
        setLon(day[0].lon)
        setCity(day)
    }
    
    async function getDays(key:string, lat:number, lon:number) {
        dispatch({type: 'CHANGE_LOADING', payload:true})
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude&appid=${key}&units=metric&lang=ru`)
        const citys = await response.json()
        setDays(citys.daily)
        setCurrentDay(citys.current)
        setCurrentIconId(citys.current.weather[0].id)
        dispatch({type: 'CHANGE_LOADING', payload:false})
    }
    useEffect(()=>{
        getCitys(cityNames, apiKey)
    },[cityNames])
    
    useEffect(()=>{
        if(city.length > 0){
            getDays(apiKey, lat, lon)
        }
    },[city])

    useEffect(()=>{
        if(days.length > 0){
            setNewDays(days.slice(0, days.length - 1))
        }
    },[days])

    const getInfoForModal = (i:number) => {
        setIconId(newDays[i].weather[0].id)
        setDateModal(newDays[i].dt)
        setTemp(newDays[i].temp)
        setTempFeelsLike(newDays[i].feels_like)
        setPressure(newDays[i].pressure)
        setWindSpeed(newDays[i].wind_speed)
        setWindDeg(newDays[i].wind_deg)
        setHumidity(newDays[i].humidity)
    }

    useEffect(()=>{
        currentTimes()
        setInterval(currentTimes, 1000)
    },[])

    const currentTimes = () => {
        const date = new Date()
        setHours(date.getHours())
        setMinutes(date.getMinutes())
    }

  return (
    <div className='container'>
        {children}
        <Main 
            hours={hours}
            minutes={minutes}
            humidity={currentDay.humidity} 
            iconId={currentIconId}
            pressure={currentDay.pressure} 
            temp={currentDay.temp} 
            tempFeelsLike={currentDay.feels_like} 
            windDeg={currentDay.wind_deg}
            windSpeed={currentDay.wind_speed}
            />
        <Weather
            newDays={newDays}
            hours={hours} 
            minutes={minutes}
            getInfoForModal={getInfoForModal}
            dateModal={dateModal}
            humidity={humidity}
            iconId={iconId}
            pressure={pressure}
            temp={temp}
            tempFeelsLike={tempFeelsLike}
            windDeg={windDeg}
            windSpeed={windSpeed}
            />
    </div>
  )
}
