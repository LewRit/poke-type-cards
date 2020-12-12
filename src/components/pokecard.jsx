import React from 'react'

const Pokecard =()=>{
        return(
            <div className='pokemon'>
                <div className="card" style={{width: '18rem'}}>
                    <img src="https://www.pokepedia.fr/images/thumb/8/8f/Ponyta-RFVF.png/250px-Ponyta-RFVF.png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Fire</h5>
                        <p className="card-text">Fire Pony</p>
                        <a href="#" className="btn btn-primary">Has advantage against</a>
                    </div>
                </div>
                <div className="card" style={{width: '18rem'}}>
                    <img src="https://pm1.narvii.com/6778/329fd36057877fc1f90d1840c52baeea14e620b8v2_hq.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Grass</h5>
                        <p className="card-text">Bulbasaur</p>
                        <a href="#" className="btn btn-primary">Has advantage against</a>
                    </div>
                </div>
                <div className="card" style={{width: '18rem'}}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFUm-yBI1IpYJXHQJFfmlhH_F-x8FPjupWgQ&usqp=CAU" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Water</h5>
                        <p className="card-text">Squirtle</p>
                        <a href="#" className="btn btn-primary">Has advantage against</a>
                    </div>
                </div>
            </div>
        )
}
export default Pokecard;