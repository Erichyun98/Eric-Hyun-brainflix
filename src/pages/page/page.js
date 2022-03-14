import './Page.scss';
import { Link } from 'react-router-dom';
import uploadImg from '../../assets/images/Upload-video-preview.jpg'
import publish from '../../assets/icons/publish.svg'
import axios from 'axios';

function Page ({history}) { 

    const submitHandler = (e) => { 
        e.preventDefault();

    axios
    .post('/videos', {
        title: e.target.title.value,
        description: e.target.description.value,
    })
        .then(response => {
            console.log(response);
            alert('video uploaded');
            history.push(`/videos/${response.data.id}`)
        })
        .catch(e => {
            alert('failed to complete request')
        })
    }
    return (
        <section className='upload'>
            <h2 className='upload__heading'>Upload Video</h2>
            <form className='upload__form' onSubmit={submitHandler}>
                <label className="upload__subheading" htmlFor="#">VIDEO THUMBNAIL</label>
                <div className='upload__info-container'>
                    <div className='upload__image-container'>
                        <img src={uploadImg} alt='upload-image' className='upload__img'/>
                    </div>
                    <div className='upload__subform'>    
                        <label className="upload__id" htmlFor="#">TITLE YOUR VIDEO</label>
                        <textarea className="upload__box" max="2"  name='title' placeholder="Add a title to your video"></textarea>
                        <label className="upload__description" htmlFor="#">ADD A VIDEO DESCRIPTION</label>
                        <textarea className="upload__box upload__box--size" max="2" name='description'placeholder="Add a description to your video"></textarea>
                    </div>
                </div>
                <div className= 'upload__submission' type='submit'>
                    <button className='upload__button'>
                        <div className='upload__button-icon'>
                            <img src = {publish} alt='publish icon' />
                        </div>    
                        <p className='upload__button-description'>PUBLISH</p>
                    </button> 
                    <Link to='/' className='upload__cancel-link'>CANCEL</Link>
                </div>
            </form>
        </section>
    )
}

export default Page;