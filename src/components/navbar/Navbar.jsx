import { NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png"
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <a href="/"><img src={logo} alt="logo zoo"  className="logo"/></a>
        <div className="navigation">
            <NavLink to="/" className="navigation-link">ACCUEIL</NavLink>
            <NavLink to="/a-propos" className="navigation-link">A PROPOS</NavLink>
            <NavLink to="/contact" className="navigation-link">CONTACT</NavLink>
        </div>
    </div>
  )
}

export default Navbar