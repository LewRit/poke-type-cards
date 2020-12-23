const Home = props =>{
    return(
        <div className='y-app'>
            <div>
                <h1 className='chart-title'>
                    Study quick before taking on the Pokecard type challenge!
                </h1>
                <button href="https://localhost:3000/pokecard">Start Your Game</button>
            </div>
            <img className='typeChart' src='https://img.pokemondb.net/images/typechart.png' alt="type chart here"/>'
        </div>
    )
}
export default Home