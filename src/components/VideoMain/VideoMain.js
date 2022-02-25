import './VideoMain.scss';
import videosListJSON from '../../data/videos.json'

const VideoMain = ({poster}) => {

    return (
        <section className='hero'>
            <video className='hero__video' width="100%" poster={poster} controls>
                <source src="#" type="#" />
                <source src="#" type="#" />
            </video>
            <h2 className='hero__title'></h2>
            {/* <div className='hero__subinfo'>
                <p className='hero__author'></p>
                <div>
                    <img className='hero__icon' src="" />
                    <p className='hero__views'></p>
                </div>
                <p className='hero__date'></p>
                <div>
                    <img className='hero__icon' src="" />
                    <p className='hero__likes'></p>
                </div>
            </div>
            <p className='hero__description'></p> */}
        </section>
    )
}

export default VideoMain

