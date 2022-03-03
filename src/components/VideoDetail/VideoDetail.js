import './VideoDetail.scss';
// import searchicon from '../../assets/icons/search.svg';
// import likeicon from '../../assets/icons/search.svg';

const VideoDetail = ({title,channel,views,date,likes,description}) => {
    
    function formatDate(ts){
        let date = new Date(ts)
        const options = { month: '2-digit', day: '2-digit', year: 'numeric' };
        date = date.toLocaleDateString("en-US", options);
    }
    
    return (
        <div className='info'>
            <h2 className='info__title'>{title}</h2>
            <div className='info__subinfo'>
                <ul className='info__channel-box'>
                    <li className='info__channels'>By {channel}</li>
                    <li className='info__date'>{date}</li>
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