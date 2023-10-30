import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openCard,control } from '../redux/GameSlice/GameSlice';
import Card from './Card';

export default function Main() {

    const { score,data,controlArray,matched } = useSelector(state => state.gameslice)

  return (
    <div className='area'>
        <div className='score'>
            {
                score
            }
        </div>
        <div className='gameArea'>
            {
                data.map((item)=>(
                    <Card item={item} />
                ))
            }
        </div>  
    </div>
  )
}
