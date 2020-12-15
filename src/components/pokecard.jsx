import React,{ useState } from 'react'
import data from './typeCard'

const Pokecard =()=>{
    const [selected,setSelected]=useState()
    const Card=(props)=>{
        return(
            <div className="card" style={{width: '18rem'}}>
                <img src={props.sprite} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.type}</h5>
                    <p className="card-text">{props.name}</p>
                    <a href="#" className="btn btn-primary">Has advantage against</a>
                </div>
            </div>
        )
    }
    return(
        <div className='pokemon'>
            {data.map((card,index)=><Card  key={index} sprite={card.sprite} type={card.type} name={card.name}/>)}
        </div>
    )
}
export default Pokecard;