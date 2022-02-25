import { Component } from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar.js';
import VideoMain from './components/VideoMain/VideoMain.js';
import videosListJSON from './data/videos.json'
import detailVideoJSON  from './data/video-details.json'

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
        </main>
      </>
    );
  }    
}


export default App;
