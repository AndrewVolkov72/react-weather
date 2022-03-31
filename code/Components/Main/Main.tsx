import React, { FC } from 'react'
import { CurrentDay } from './CurrentDay'
import { CurrentDayInfo } from './CurrentDayInfo'
import { useTypeSelector } from '../../hooks/useTypeSelector'

interface IMain {
    hours:number;
    minutes:number;
    temp:number;
    iconId:number;
    tempFeelsLike:number;
    windSpeed:number;
    pressure:number;
    windDeg:number;
    humidity:number;
}

export const Main:FC<IMain> = ({hours, minutes, humidity, iconId, pressure, windSpeed, temp, tempFeelsLike, windDeg}) => {
    const currentCityName = useTypeSelector(state=>state.cityReducer.name)
  return (
    <main className="main">
        <CurrentDay temp={temp} hours={hours} minutes={minutes} cityName={currentCityName} iconId={iconId}/>
        <CurrentDayInfo temp={temp} tempFeelsLike={tempFeelsLike} speed={windSpeed} pressure={pressure} windDeg={windDeg} humidity={humidity}/>
    </main>
  )
}
