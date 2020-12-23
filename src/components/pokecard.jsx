import React from 'react'
import {connect} from 'react-redux'
import Card from './cards'
import {newGame,resetSelection,removeMatch} from '../redux/actions'

const Pokecard =(props)=>{
    const createGame=()=>{
        props.newGame()
    }
    const getButton=()=>{
        if (props.card1 && props.card2){
            if(props.match){
                return (
                <button onClick={()=>props.removeMatch()} className="btn btn-primary">Correct! Pick Next Pair</button>
                )
            }else{
                return (
                <button onClick={()=>props.resetSelection()} className="btn btn-primary">Reset Selection</button>
                )
            }
        }
    }
    return(
        <div>
            <div>
                <button onClick={createGame} className='create-board'>New Game</button>
            {getButton()}
            </div>
            <div className='pokemon'>
                    {!props.board ? 'empty': props.board.map((card,index)=><Card key={index} sprite={card.sprite} type={card.type} name={card.name}/>)}
            </div>
        </div>
    )
}
const mapDispatchToProps=dispatch=>({
    newGame: ()=>dispatch(newGame()),
    resetSelection:()=>dispatch(resetSelection()),
    removeMatch:()=>dispatch(removeMatch())
})
const mapStateToProps=state=>({
    board: state.createGame.board,
    card1: state.createGame.card1,
    card2: state.createGame.card2,
    match: state.createGame.match
})
export default connect(mapStateToProps, mapDispatchToProps)(Pokecard);