import './VideoListing.scss';

function VideoListing ({videos,clickHandler}) { 
    return (
        <section className='video'>
            <h3 className='video__head'>NEXT VIDEOS</h3>

            {videos.map((video) =>{
                return (<div className='video__info' key={video.id} onClick={() => {clickHandler(video.id)}}>
                            <div className='video__img-holder'>  
                                <img className='video__img' src={video.image} alt={video.name}/>
                            </div>
                            <div className='video__subinfo'>
                                <h4 className='video__title'>{video.title}</h4>
                                <p className='video__channel'>{video.channel}</p>
                            </div>
                        </div>
            )})}

        </section>
    )
}

export default VideoListing