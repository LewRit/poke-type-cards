import React,{ useState } from 'react'
import {connect} from 'react-redux'
import Card from './cards'
import {newGame} from '../redux/actions'

const Pokecard =(props)=>{
    const handleClick=()=>{
        props.newGame()
    }
    return(
        <div className='pokemon'>
            {!props.board ? 'empty': props.board.map((card,index)=><Card key={index} sprite={card.sprite} type={card.type} name={card.name}/>)}
            <button onClick={handleClick} className='create-board'>New Game</button>
        </div>
    )
}
const mapDispatchToProps=dispatch=>({
    newGame: ()=>dispatch(newGame())
})
const mapStateToProps=state=>({
    board: state.board
})
export default connect(mapStateToProps, mapDispatchToProps)(Pokecard);