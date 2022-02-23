import './NavBar.scss';
import '../../styles/partials/_global.scss'
import logo from '../../assets/images/BrainFlix-logo.svg';
import pic from '../../assets/images/Mohan-muruge.jpg';
import upload from '../../assets/icons/upload.svg';
function NavBar() {

  return (
    <>
        <nav className='nav'>
            <a className='nav__link' href ="/">
                <img className='nav__logo' src = {logo} />
            </a>
            <div className='nav__contents'>
                <div className='nav__subcontents'>
                    <form className='nav__form' action='' method=''>    
                        <input className='nav__input' id='navinput' type='search' placeholder='Search' name='search'htmlFor=''>
                        </input>
                    </form>  
                    <img className='nav__avatar' src = {pic} /> 
                </div>
                <button className='nav__button' type='button'>
                    <span className='nav__button-icon'>
                        <img src = {upload}/>
                    </span>    
                    <span className='nav__button-description'>UPLOAD</span>
                </button>
            </div>
        </nav>
    </>
  )
}

export default NavBar