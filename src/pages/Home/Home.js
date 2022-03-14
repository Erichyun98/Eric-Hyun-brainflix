import { Component } from 'react';
import './Home.scss';
import VideoMain from '../../components/VideoMain/VideoMain.js';
import VideoDetail from '../../components/VideoDetail/VideoDetail.js';
import CommentList from '../../components/CommentList/CommentList.js';
import CommentForm from '../../components/CommentForm/CommentForm.js';
import VideoListing from '../../components/VideoListing/VideoListing.js';
import axios from 'axios';

// const apikey = "?api_key=e29626d4-08eb-4643-a573-72879dec609b"
// const apiurl = "https://project-2-api.herokuapp.com/"

class Home extends Component {

    state = {
        videosList: [],
        currentlySelectedVideo: null
    }

    componentDidMount () {
        axios
            .get('/videos')
            .then(response => {
                this.setState({
                    videosList: response.data
                })
                const videoId = this.props.match.params.id || response.data[0].id;
                this.getSelectedVideo(videoId);
            })
            .catch(event => console.log("error couldn't process", event))
    }

    componentDidUpdate = (previousProps, prevState ) => {
        const videoId = this.props.match.params.id || this.state.videosList[0].id
          if (previousProps.match.params.id !== this.props.match.params.id) {
              this.getSelectedVideo(videoId);
          }
    }
    getSelectedVideo = (videoId) => {
        axios
            .get(`/videos/${videoId}`)
            .then(response => {
                console.log("get selected video worked!", response)
                this.setState({
                    currentlySelectedVideo: response.data     
                });
                window.scrollTo(0,0)
            }) .catch(e => console.log("error"))
    };

    render() {
        const { videosList, currentlySelectedVideo } = this.state;

        const filteredVideo = currentlySelectedVideo ? this.state.videosList.filter(video => video.id !== currentlySelectedVideo.id) : videosList;

        const videoListing = filteredVideo.unshift()

        if (currentlySelectedVideo === null) {
            return <p>Loading...</p>
        }

        return (
            <>
                <VideoMain
                    poster={currentlySelectedVideo}
                />
                <section className='subcontent'>
                    <div className='subcontent__divider'>
                        <VideoDetail
                            currentlySelectedVideo={currentlySelectedVideo}
                        />
                        <CommentForm comments={currentlySelectedVideo.comments} />
                        <CommentList
                            comments={currentlySelectedVideo.comments}
                        />
                    </div>
                    <aside>
                        <VideoListing
                            videos={filteredVideo}
                        />
                    </aside>
                </section>
            </>
        )
    }
}

export default Home;
