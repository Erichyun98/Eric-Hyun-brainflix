import './VideoMain.scss';
import playbutton from '../../assets/icons/play.svg'
import fullscreenicon from '../../assets/icons/fullscreen.svg'
import volumeicon from '../../assets/icons/volume_up.svg'
const VideoMain = ({poster}) => {
    return (
        <section className='current-video'>
            <video className='current-video__player' poster={poster.image} alt={poster.title}/>
        </section>
        
        

    )
}

export default VideoMain

