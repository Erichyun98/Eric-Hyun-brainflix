import './VideoDetail.scss';
// import searchicon from '../../assets/icons/search.svg';
// import likeicon from '../../assets/icons/search.svg';

const VideoDetail = (props) => {

    const {image, title, channel, timestamp, views, likes, description, duration} = props.currentlySelectedVideo; 
    
    const newDate = new Date(timestamp);
    
    const options = { month: '2-digit', day: '2-digit', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(newDate);

    return (
        <div className='info'>
            <h2 className='info__title'>{title}</h2>
            <div className='info__subinfo'>
                <ul className='info__channel-box'>
                    <li className='info__channels'>By {channel}</li>
                    <li className='info__date'>{formattedDate}</li>
                </ul>
                <ul className='info__view-box'>
                    <li className='info__views'>{views}</li>
                    <li className='info__likes'>{likes}</li>
                </ul>
            </div>
            <p className='info__description'>{description}</p>
        </div>
    )
}
export default VideoDetail 