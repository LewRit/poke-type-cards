import { Switch, Route, Link } from 'react-router-dom'
import {Home, ContactUs, AboutUs, Pokecard} from './components'

function App() {
  
  return (
    <div>
      <header>
      <Link to="/" className='home'>Home</Link>
        <div className="navs">
          <Link to="/pokecard">Play Pokecard</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </header>
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/pokecard' component={Pokecard}/>
          <Route exact path= '/contact-us' component={ContactUs}/>
          <Route exact path='/about-us' component={AboutUs}/>
        </Switch>
      </main>
      <footer>
        <div>Copyright © PokeCards|</div>
        <div>SITE DESIGNED WITH CREDITS TO REACT AND BOOSTRAP.</div>
      </footer>
    </div>
  );
}

export default App;
