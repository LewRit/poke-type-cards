import { CREATE_GAME, SELECT_CARD_1,SELECT_CARD_2,RESET_SELECTION, REMOVE_MATCH } from './actionTypes'

export const newGame=()=>{
    return{
        type:CREATE_GAME,
        payload:{}
    }
}

export const selectCard1=(name,type)=>{
    return{
        type:SELECT_CARD_1,
        payload:{name,
        type}
    }
}
export const selectCard2=(name,type)=>{
    return{
        type:SELECT_CARD_2,
        payload:{name,
        type}
    }
}
export const resetSelection=()=>{
    return{
        type:RESET_SELECTION,
        payload:{}
    }
}
export const removeMatch=()=>{
    return{
        type:REMOVE_MATCH,
        payload:{}
    }
}