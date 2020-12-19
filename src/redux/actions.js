import { CREATE_GAME, SELECT_CARD } from './actionTypes'

export const newGame=()=>{
    return{
        type:CREATE_GAME,
        payload:{}
    }
}

export const selectCard=(name)=>{
    return{
        type:SELECT_CARD,
        payload:{cardName:name}
    }
}