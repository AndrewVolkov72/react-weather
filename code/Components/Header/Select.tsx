import React, { FC, useEffect, useState, } from 'react'
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../hooks/useTypeSelector';

interface IUser {
    name: string;
}

interface ISelect {
    cities: IUser[];
}

export const Select:FC<ISelect> = ({cities}) => {
    const dispatch = useDispatch()
    const cityName = useTypeSelector(state=>state.cityReducer.name)

    const [title, setTitle] = useState<string>('Выбрать город')
    const [isActive, setIsActive] = useState<boolean>(false)

    const toggleSelect = () => {
        setIsActive(!isActive)
    }

    const changeSelect = (name:string) => {
        setIsActive(!isActive)
        dispatch({type: 'CHANGE_CITY', payload: name})
    }

    useEffect(()=>{
        setTitle(cityName)
    },[cityName])

    const arrow = <svg className={isActive ? 'select__arrow' : 'select__arrow close'} width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.85674 7.86232L12.853 1.84944C13.0493 1.65243 13.049 1.33348 12.852 1.1368C12.655 0.940281 12.3358 0.940788 12.1393 1.13782L6.49998 6.7928L0.860642 1.13762C0.66412 0.94061 0.345189 0.940102 0.148159 1.1366C0.0493898 1.23519 4.75199e-06 1.36435 4.74634e-06 1.49351C4.74071e-06 1.62235 0.0490589 1.751 0.147142 1.84941L6.14324 7.86232C6.23764 7.9572 6.36612 8.01045 6.49998 8.01045C6.63384 8.01045 6.76216 7.95705 6.85674 7.86232Z" fill="black"/>
    </svg>
    
  return (
    <div className='select'>
        <div onClick={toggleSelect} className="select-title">
            <p className='select__title'>{title}</p>
            {arrow}
        </div>
        {isActive ? <div className="select-content">
            {cities.map(item=>{
                return  <p key={item.name} onClick={()=>changeSelect(item.name)} className='select__item'>{item.name}</p>
            })}
        </div> : null}
    </div>
  )
}
