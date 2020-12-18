import {CREATE_GAME} from '../actionTypes'
import data from '../../components/typeCard'

const initialState={
    board:[]    //set to 8 cards after it works.
}
export default function(state=initialState,action){
    switch(action.type){
        case CREATE_GAME:{
            return{
                ...state,
                board:data.slice(0,8) //gives me first 8 cards
            }
        }
        default:
            return state;
    }
}