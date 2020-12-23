import React from 'react'
import {connect} from 'react-redux'
import {selectCard1,selectCard2} from '../redux/actions'


const Card=(props)=>{
    const isSelected = ()=> {
        return props.card1 && (props.card1.name === props.name)
    }
    const getCardClassNames=()=>{
        const classes=["card"]
        if(isSelected()&& !props.card2){
            classes.push('selected')
        }else if(props.card1 && props.card2 && (props.card1.name===props.name||props.card2.name===props.name)){
            if(props.match){
                classes.push('correct')
            }else{
                classes.push('incorrect')
            }
        }
        return classes.join(' ')
    }
    const getButton=()=>{
        if (!props.card1){
            return (
            <button onClick={()=>props.selectCard1(props.name,props.type)} className="btn btn-primary">Has advantage against</button>
            )
        }else if(!isSelected()){
            return (
            <button onClick={()=>props.selectCard2(props.name,props.type)} className="btn btn-primary">select</button>
            )
        }else{
            return
        }
    }
    return(
        <div className={getCardClassNames()} style={{width: '18rem'}}>
            <img src={props.sprite} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.type}</h5>
                <p className="card-text">{props.name}</p>
                {getButton()}
            </div>
        </div>
    )
}
const mapDispatchToProps=dispatch=>({
    selectCard1: (name,type)=>dispatch(selectCard1(name,type)),
    selectCard2: (name,type)=>dispatch(selectCard2(name,type)),
})
const mapStateToProps=state=>({
    card1:state.createGame.card1,
    card2:state.createGame.card2,
    match:state.createGame.match
})
export default connect(mapStateToProps, mapDispatchToProps)(Card);