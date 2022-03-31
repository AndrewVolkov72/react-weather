import React, { FC } from 'react'

interface ILoader {
    classes?:string;
}

export const Loader:FC<ILoader> = ({classes}) => {
  return (
    <div className={classes ? `loader ${classes}` : 'loader'}>
        <div className="loader__light"></div>
    </div>
  )
}
