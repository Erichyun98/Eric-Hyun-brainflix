import './CommentForm.scss';
import pic from '../../assets/images/Mohan-muruge.jpg';
import addComment from '../../assets/icons/add_comment.svg';

const CommentForm = ({ comments }) => {
    return (
        <section className="comment">
            <div className="comment__submit">
                <p className='comment__count'>{comments.length} Comments</p>
                <div className="comment__section">
                    <img className="comment__image" src={pic} />
                    <form className="comment__form" action="" method="">
                        <label className="comment__id" htmlFor="comment__comment">Join the Conversation</label>
                        <div className='comment__holder'>
                            <textarea className="comment__box" max="2" id="commentsform-comment" placeholder="Add a new comment"></textarea>
                            <button className='comment__button' type='button'>
                                <div className='comment__button-container'>
                                    <div className='comment__button-icon-holder'>
                                        <img className='comment__button-icon' src={addComment} />
                                    </div>
                                    <p className='comment__button-description'>COMMENT</p>
                                </div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default CommentForm