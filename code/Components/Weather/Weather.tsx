import React, { FC, useState } from 'react'
import { WeatherItem } from './WeatherItem'
import { Modal } from '../Modal'
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { Loader } from '../Loader';
import { ButtonUp } from '../ButtonUp';

interface IWeather {
    hours:number;
    minutes:number;
    newDays:any[];
    iconId:number;
    dateModal:number;
    temp:any;
    tempFeelsLike:any;
    pressure:number;
    windSpeed:number;
    windDeg:number;
    humidity:number;
    getInfoForModal: (i:number)=>void;
}

export const Weather:FC<IWeather> = ({hours, minutes, newDays, dateModal, humidity, iconId, pressure, temp, tempFeelsLike, windDeg, windSpeed, getInfoForModal}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    
    const cityNames = useTypeSelector(state=>state.cityReducer.name)
    const loading = useTypeSelector(state=>state.loadingReducer.loading)

    const showModal = () => {
        setIsOpen(!isOpen)
    }
    const visibleModal = (i:number)=> {
        getInfoForModal(i)
        setIsOpen(!isOpen)
    }

  return (
    <>
    {loading ? <Loader/> : <div className='weather' >
        {/* <div className="weather-title">
            <div className="weather-btns">
                <button className='weather__btn active'>На неделю</button>
                <button className='weather__btn'>На месяц</button>
            </div>
            <button className='weather__btn'>Отменить</button>
        </div> */}
        {newDays.length > 0 ? <div className="weather-content">
            {newDays.map((item,i)=>{
                return <WeatherItem key={i} visibleModal={visibleModal} iconId={item.weather[0].id} date={item.dt} description={item.weather[0].description} tempMax={item.temp.max} tempMin={item.temp.min} ind={i}/>
            }) }
            <ButtonUp/>
        </div>  : null}
    </div>}
    {isOpen ? <Modal
                iconId={iconId}
                hours={hours}
                minutes={minutes}
                showModal={showModal}
                humidity={humidity}
                pressure={pressure}
                speed={windSpeed}
                temp={temp}
                tempFeelsLike={tempFeelsLike}
                windDeg={windDeg}
                cityNames={cityNames}
                date={dateModal}
                /> : null}
    </>
  )
}
