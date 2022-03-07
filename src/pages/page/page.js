import './Page.scss';
import { Link } from 'react-router-dom';
import uploadImg from '../../assets/images/Upload-video-preview.jpg'
import publish from '../../assets/icons/publish.svg'

function Page () { 
    return (
        <section className='upload'>
            <h2 className='upload__heading'>Upload Video</h2>
            <form className='upload__form'>
                <label className="upload__subheading" htmlFor="#">VIDEO THUMBNAIL</label>
                <div className='upload__info-container'>
                    <div className='upload__image-container'>
                        <img src={uploadImg} alt='upload-image' className='upload__img'/>
                    </div>
                    <div className='upload__subform'>    
                        <label className="upload__id" htmlFor="#">TITLE YOUR VIDEO</label>
                        <textarea className="upload__box" max="2" id="uploadform-video" placeholder="Add a title to your video"></textarea>
                        <label className="upload__description" htmlFor="#">ADD A VIDEO DESCRIPTION</label>
                        <textarea className="upload__box upload__box--size" max="2" id="uploadform-description" placeholder="Add a description to your video"></textarea>
                    </div>
                </div>
                <div className= 'upload__submission'>
                    <Link to= '/' className='upload__button-link'>
                        <button className='upload__button'>
                            <div className='upload__button-icon'>
                                <img src = {publish}/>
                            </div>    
                            <p className='upload__button-description'>PUBLISH</p>
                        </button>
                    </Link>
                    <Link to='/' className='upload__cancel-link'>CANCEL</Link>
                </div>
                </form>
        </section>
    )
}

export default Page;