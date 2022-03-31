import React from 'react'

export const ButtonUp = () => {
    const arrowUp = <svg className='button-up__arrow' strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.25 18.5V6M12.25 6L18.25 12M12.25 6L6.25 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

    const scroll = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
    }
  return (
    <button className='button-up' onClick={scroll}>
        {arrowUp}
    </button>
  )
}
