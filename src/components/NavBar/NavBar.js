import './NavBar.scss';
import '../../styles/partials/_global.scss';
import logo from '../../assets/images/BrainFlix-logo.svg';
import pic from '../../assets/images/Mohan-muruge.jpg';
import upload from '../../assets/icons/upload.svg';
import { Link } from 'react-router-dom';

function NavBar() {

    return (
        <nav className='nav'>
            <Link to= '/' className='nav__link'>
                <img className='nav__logo' src = {logo} alt='navbar logo' />
            </Link>
            <div className='nav__subcontents'>  
                <input className='nav__input' type='search' placeholder='Search' name='search'htmlFor=''></input>
                <img className='nav__avatar' src = {pic} alt='navbar avatar' /> 
                <Link className='nav__button-link' to = '/Page'>
                    <button className='nav__button' type='button'>
                        <div className='nav__button-icon'>
                            <img src = {upload} alt='upload icon' />
                        </div>    
                        <p className='nav__button-description'>UPLOAD</p>
                    </button>
                </Link>
            </div>
        </nav>
    )
}

export default NavBar