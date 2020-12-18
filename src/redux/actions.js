import { CREATE_GAME } from './actionTypes'

export const newGame=()=>{
    return{
        type:CREATE_GAME,
        payload:{}
    }
}
