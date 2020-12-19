import React from 'react'
import {connect} from 'react-redux'
import {selectCard} from '../redux/actions'


const Card=(props)=>{
    return(
        <div className="card" style={{width: '18rem'}}>
            <img src={props.sprite} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.type}</h5>
                <p className="card-text">{props.name}</p>
                <button onClick={()=>props.selectCard(props.name)} className="btn btn-primary">Has advantage against</button>
            </div>
        </div>
    )
}
const mapDispatchToProps=dispatch=>({
    selectCard: (name)=>dispatch(selectCard(name))
})
const mapStateToProps=state=>({
    card1:state.createGame.card1,
    
})
export default connect(mapStateToProps, mapDispatchToProps)(Card);