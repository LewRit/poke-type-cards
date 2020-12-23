import {CREATE_GAME, SELECT_CARD_1,SELECT_CARD_2,RESET_SELECTION, REMOVE_MATCH} from '../actionTypes'
import data from '../../data/typeCard'
import strengthMap from '../../data/strongAgainst'

const initialState={
    board: [],    //set to 8 cards after it works.
    card1: null,
    card2: null,
    match: false
}
export default function(state=initialState,action){
    switch(action.type){
        case CREATE_GAME:{
            const remainingPokemon = [...data]
            const selectedPokemon = [];
            for(let i = 0; i < 8; i++) {
                const index = Math.floor(Math.random() * remainingPokemon.length)
                selectedPokemon.push(remainingPokemon[index]);
                remainingPokemon.splice(index, 1)
            }
            return{
                ...state,
                // board:data.slice(0,8),//gives me first 8 cards
                board:selectedPokemon,
                card1:null,
                card2:null
            }
        }
        case SELECT_CARD_1:{
            return{
                ...state,
                card1:action.payload,
                board:state.board,
            }
        }
        case SELECT_CARD_2:{
            return{
                ...state,
                card2:action.payload,
                match: strengthMap[state.card1.type].includes(action.payload.type)
            }
        }
        case RESET_SELECTION:{
            return{
                ...state,
                card1:null,
                card2:null,
                match:false
            }
        }
        case REMOVE_MATCH:{
            return{
                ...state,
                card1:null,
                card2:null,
                match:false,
                board:state.board.filter((card)=>{
                    return (card.name !== state.card2.name && card.name!==state.card1.name)
                })
            }
        }
        default:
            return state;
    }
}