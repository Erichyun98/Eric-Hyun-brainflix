import './CurrentComment.scss';

function CurrentComment ({name,timestamp,comment}) { 

    const newDate = new Date(timestamp);

    const options = { month: '2-digit', day: '2-digit', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(newDate);

    return (
        <div className='current-comment__box'>
            <div className='current-comment__info'>
                <div className='current-comment__img'></div>
                <div className='current-comment__subinfo'>
                    <p className='current-comment__name'>{name}</p>  
                    <p className='current-comment__date'>{formattedDate}</p>
                </div>
            </div>
            <p className='current-comment__comment'>{comment}</p>
        </div>
    )
}

export default CurrentComment;