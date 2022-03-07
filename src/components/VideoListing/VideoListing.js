import './VideoListing.scss';
import '../VideoMain/VideoMain';
import { Link } from "react-router-dom";

function VideoListing ({videos}) { 
    return (
        <section className='video'>
            <h3 className='video__head'>NEXT VIDEOS</h3>

            {videos.map((video) =>{
                return (
                <Link key={video.id} to={`/videos/${video.id}`} className="video__list">
                    <div className='video__info'>
                        <div className='video__img-holder'>  
                            <img className='video__img' src={video.image} alt={video.name}/>
                        </div>
                        <div className='video__subinfo'>
                            <h4 className='video__title'>{video.title}</h4>
                            <p className='video__channel'>{video.channel}</p>
                        </div>
                    </div>
                </Link>
            )})}

        </section>
    )
}

export default VideoListing