import { Component } from 'react';
import './Home.scss';
import VideoMain from '../../components/VideoMain/VideoMain.js';
import VideoDetail from '../../components/VideoDetail/VideoDetail.js';
import CommentList from '../../components/CommentList/CommentList.js';
import CommentForm from '../../components/CommentForm/CommentForm.js';
import VideoListing from '../../components/VideoListing/VideoListing.js';
import videosListJSON from '../../data/videos.json';
import detailVideoJSON from '../../data/video-details.json';
import axios from 'axios';

const apikey ="e29626d4-08eb-4643-a573-72879dec609b";
const apiurl =`https://project-2-api.herokuapp.com/`;

class Home extends Component {

    state = {
        videosList: videosListJSON,
        detailVideo: detailVideoJSON,
        currentlySelectedVideo: detailVideoJSON[0],
        // videosList: [],
        // currentlySelectedVideo: {}
    };

    // componentDidMount() {
    //     axios
    //     .get(`${apiurl}videos/:id${apikey}`)
    //     .then((response => {
    //       console.log(response);
    //       this.setState({ videosList: response.data })
    //     }));
    //   }

    updateCurrentVideo = (videoId) => {
        const newVideo = this.state.detailVideo.find((video) => {
            return video.id === videoId
        })
        this.setState({ currentlySelectedVideo: newVideo })
    }

    render() {
        const { videosList, detailVideo, currentlySelectedVideo } = this.state

        const filteredVideo = videosList.filter((video) => {
            return video.id != currentlySelectedVideo.id;
        })

        return (
            <>
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
                        <CommentForm comments={currentlySelectedVideo.comments} />
                        <CommentList
                            comments={currentlySelectedVideo.comments}
                        />
                    </div>
                    <aside>
                        <VideoListing
                            videos={filteredVideo}
                            clickHandler={this.updateCurrentVideo}
                        />
                    </aside>
                </section>
            </>
        )
    }
}

export default Home;
