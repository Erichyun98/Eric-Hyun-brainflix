import './VideoMain.scss';
import videosListJSON from '../../data/videos.json'

const VideoMain = ({poster}) => {

    return (
        <section className='video'>
            <video className='video__player' height="100%" width="100%" poster={poster} controls>
                <source src="#" type="#" />
                <source src="#" type="#" />
            </video>
        </section>
    )
}

export default VideoMain

