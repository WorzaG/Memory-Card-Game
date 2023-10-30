import { useEffect } from "react"
import React from 'react'
import { useDispatch,useSelector } from "react-redux"
import { openCard,control } from '../redux/GameSlice/GameSlice';



export default function Card({item}) {

    const { controlArray,matched } = useSelector(state => state.gameslice)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(controlArray.length == 2){
            const timer = setTimeout(() => dispatch(control()),1000)
            return () => clearTimeout(timer)
        }
    },[controlArray,matched,dispatch])


    if(item.open){
        return(
            <div className={`card ${item.matched ? "cardMatched" : "openCard"}`}>
                {
                    <img src={item.img} />
                }
            </div>
        )
    }else{
        return(
            <div className='card' onClick={()=> dispatch(openCard(item))}>
                ?
            </div>
        )
    }


}
