import './CurrentComment.scss';

function CurrentComment ({name,timestamp,comment}) { 
    return (
        <div className='current-comment__box'>
            <div className='current-comment__info'>
                <div className='current-comment__img'></div>
                <div className='current-comment__subinfo'>
                    <p className='current-comment__name'>{name}</p>  
                    <p className='current-comment__date'>{timestamp}</p>
                </div>
            </div>
            <p className='current-comment__comment'>{comment}</p>
        </div>
    )
}

export default CurrentComment;