import { Component } from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar.js';
import VideoMain from './components/VideoMain/VideoMain.js';
import VideoDetail from './components/VideoDetail/VideoDetail.js';
import CommentList from './components/CommentList/CommentList.js';
import CommentForm from './components/CommentForm/CommentForm.js';
// import CurrentComment from './components/CurrentComment/CurrentComment.js';
import videosListJSON from './data/videos.json';
import detailVideoJSON  from './data/video-details.json';

class App extends Component {
  state = {
    videosList: videosListJSON,
    detailVideo: detailVideoJSON,
    currentlySelectedVideo: detailVideoJSON[0],
  };
 
  render() {
    const {videoList, detailVideo, currentlySelectedVideo} = this.state

    return (
      <>
        <NavBar />
        <main className='main'>
          <VideoMain
            poster={currentlySelectedVideo.image}
            />
          <VideoDetail
            title={currentlySelectedVideo.title}
            channel={currentlySelectedVideo.channel}
            views={currentlySelectedVideo.views}
            date={currentlySelectedVideo.timestamp}
            likes={currentlySelectedVideo.likes}
            description={currentlySelectedVideo.description}
            />
          <CommentForm />
          <CommentList
          comments={currentlySelectedVideo.comments} 
          />
        </main>
      </>
    );
  }
}


export default App;
