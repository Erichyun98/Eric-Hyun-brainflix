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

    // return (
    //     <section className='current-comment'>
    //             <div className='current-comment__box'>
    //                 <div className='current-comment__info'>
    //                     <div className='current-comment__img'></div>
    //                     <div className='current-comment__subinfo'>
    //                         <p className='current-comment__name'>Michael lyons</p>  
    //                         <p className='current-comment__date'>08/09/2021</p>
    //                     </div>
    //                 </div>
    //                 <p className='current-comment__comment'>
    //                 They BLEW the ROOF off at their last event, once everyone started figuring out they were 
    //                 going. This is still simply the greatest opening of an event I have EVER witnessed.</p>
    //             </div>
    //             <div className='current-comment__box'>
    //                 <div className='current-comment__info'>
    //                     <div className='current-comment__img'></div>
    //                     <div className='current-comment__subinfo'>
    //                         <p className='current-comment__name'>Gary Wong</p>  
    //                         <p className='current-comment__date'>07/15/2021</p>
    //                     </div>
    //                 </div>
    //                 <p className='current-comment__comment'>
    //                 Every time I see him shred I feel so motivated to get off my couch and hop on my board. 
    //                 He s so talented! I wish I can ride like him one day so I can really enjoy myself</p>
    //             </div>
    //             <div className='current-comment__box'>
    //                 <div className='current-comment__info'>
    //                     <div className='current-comment__img'></div>
    //                     <div className='current-comment__subinfo'>
    //                         <p className='current-comment__name'>Theodore Duncan</p>  
    //                         <p className='current-comment__date'>07/11/2021</p>
    //                     </div>
    //                 </div>
    //                 <p className='current-comment__comment'>
    //                 How can someone be so good!!! You can tell he lives for this and loves to do it every day. 
    //                 Everytime I see him I feel instantly happy! He s definitely my favorite ever</p>
    //             </div>
    //     </section>
    // )
// }

export default CurrentComment;