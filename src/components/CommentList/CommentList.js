import './CommentList.scss';
import CurrentComment from '../CurrentComment/CurrentComment';

function CommentList ({comments}) {
    return (
        <section className='current-comment'>
           {comments.map(comment =>{
               return (
                   <CurrentComment
                   key = {comment.name}
                   name= {comment.name}
                   timestamp= {comment.timestamp}
                   comment= {comment.comment}
                   />
               )
           })}
        </section>
    )
}
export default CommentList;