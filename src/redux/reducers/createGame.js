import {CREATE_GAME, SELECT_CARD} from '../actionTypes'
import data from '../../components/typeCard'

const initialState={
    board: [],    //set to 8 cards after it works.
    card1: null,
    card2: null
}
export default function(state=initialState,action){
    switch(action.type){
        case CREATE_GAME:{
            return{
                ...state,
                board:data.slice(0,8) //gives me first 8 cards
            }
        }
        case SELECT_CARD:{
            
            return{
                ...state,
                card1:action.payload.cardName,
                board:state.board.filter((card)=>{
                    return card.name !== action.payload.cardName
                })
            }
        }
        default:
            return state;
    }
}