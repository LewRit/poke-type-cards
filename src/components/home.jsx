import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Home = props =>{
    return(
        <div className='y-app'>
            <div>
                <h1 className='chart-title'>
                    Study quick before taking on the Pokecard type challenge!
                </h1>
                <Link to='/pokecard' classname='gameboard'><Button classname='gameboard'>Play Pokecard {' '}</Button></Link>
            </div>
            <img className='typeChart' src='https://img.pokemondb.net/images/typechart.png' alt="type chart here"/>'
        </div>
    )
}
export default Home