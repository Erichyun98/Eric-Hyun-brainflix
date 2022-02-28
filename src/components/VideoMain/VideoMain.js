import './VideoMain.scss';
import videosListJSON from '../../data/videos.json'

const VideoMain = ({poster}) => {

    return (
        <section className='current-video'>
            <video className='current-video__player' width="100%" poster={poster} controls>
                <source src="#" type="#" />
                <source src="#" type="#" />
            </video>
        </section>
    )
}

export default VideoMain

