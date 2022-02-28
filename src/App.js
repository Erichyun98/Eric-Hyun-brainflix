import { Component } from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar.js';
import VideoMain from './components/VideoMain/VideoMain.js';
import VideoDetail from './components/VideoDetail/VideoDetail.js';
import CommentList from './components/CommentList/CommentList.js';
import CommentForm from './components/CommentForm/CommentForm.js';
import VideoListing from './components/VideoListing/VideoListing.js';
import videosListJSON from './data/videos.json';
import detailVideoJSON  from './data/video-details.json';

class App extends Component {
  state = {
    videosList: videosListJSON,
    detailVideo: detailVideoJSON,
    currentlySelectedVideo: detailVideoJSON[0],
  };

  updateCurrentVideo = (videoId) => {
    const newVideo = this.state.detailVideo.find((video) => { 
      return video.id === videoId
    })
    this.setState({currentlySelectedVideo: newVideo})
  }
 
  render() {
    const {videosList, detailVideo, currentlySelectedVideo} = this.state

    const filteredVideo =videosList.filter((video) => {
      return video.id != currentlySelectedVideo.id;
    })

    return (
      <>
        <NavBar />
          <VideoMain
            poster={currentlySelectedVideo.image}
            />
        <section className='subcontent'>
          <div className='subcontent__divider'>
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
          </div>
          <aside>
            <VideoListing 
              videos={filteredVideo} 
              clickHandler= {this.updateCurrentVideo}
            />
          </aside>
        </section>
      </>
    )
  }
}


export default App;
