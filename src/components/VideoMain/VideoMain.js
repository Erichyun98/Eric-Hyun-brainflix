import './VideoMain.scss';
import videosListJSON from '../../data/videos.json'

const VideoMain = ({poster}) => {
    return (
        <section className='current-video'>
            <video className='current-video__player' poster={poster.image} controls />
        </section>
    )
}

export default VideoMain

