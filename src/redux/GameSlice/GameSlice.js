import { createSlice } from "@reduxjs/toolkit";
import { easy, medium } from '../../data/flags';


export const GameSlice = createSlice({
    name:"gameslice",
    initialState:{
        score:0,
        data : medium,
        controlArray:[],
        matched:[],
    },
    reducers:{
        openCard: (state,action) => {
            if(state.controlArray.length < 2){
                const findCard = state.data.find((item) => item.id === action.payload.id)
                findCard.open = true
                state.controlArray.push(findCard)
            }else{
                alert("lütfen bekleyin") 
            }
        },
        control:(state,action) => {
            if(state.controlArray[0].title === state.controlArray[1].title){
                state.matched.push(state.controlArray[0].id)
                state.matched.push(state.controlArray[1].id)
                for(let i = 0 ; i < state.controlArray.length ; i++){
                    const findCard = state.data.find((item) => item.id === state.controlArray[i].id)
                    findCard.matched = true
                }
                state.controlArray = []
                state.score += 50
            }else{
                for(let i = 0 ; i < state.controlArray.length ; i++){
                    const findCard = state.data.find((item) => item.id === state.controlArray[i].id)
                    findCard.open = false
                }
                state.controlArray = []
                state.score -= 10
            }
        }
        }
})

export const { openCard,control } = GameSlice.actions
export default GameSlice.reducer