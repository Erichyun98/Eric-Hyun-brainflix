import './Page.scss';
import { Link } from 'react-router-dom';

function Page () { 
    return (
        <section>
         <h2>Upload Video</h2>
         <h3>VIDEO THUMBNAIL</h3>
         <img src='#' />
         <h3>TITLE YOUR VIDEO</h3>
         <form></form>
         <h3>ADD A VIDEO DESCRIPTION</h3>
         <form></form>
         <button>Publish</button>
         <Link to='/'>Cancel</Link>

        </section>
    )
}

export default Page;