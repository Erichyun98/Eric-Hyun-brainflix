import './CommentForm.scss';
import pic from '../../assets/images/Mohan-muruge.jpg';
import addComment from '../../assets/icons/add_comment.svg';

const CommentForm = () => { 
    return (
        <section className="comment">
        <div class="comment__submit">
            <p className='comment__count'> Comments</p>
            <div className="comment__section"> 
                <img className="comment__image" src={pic}/>
                <form className= "comment__form" action="" method="">
                    <label className="comment__id" for="comment__comment">Join the Conversation</label>     
                    <div className='comment__holder'>
                        <textarea class="comment__box" max="2" id="commentsform-comment" name="comment" placeholder="Add new comment"></textarea>
                    </div>
                    <button className='comment__button' type='button'>
                    <div className='comment__button-container'>
                        <div className='comment__button-icon-holder'>
                            <img className='comment__button-icon'src = {addComment}/>
                        </div>    
                        <p className='comment__button-description'>COMMENT</p>
                    </div>
                    </button>
                </form>
            </div>
        </div>
    </section>
    )
}

export default CommentForm