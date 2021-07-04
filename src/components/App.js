import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {


    state = {videosList:[], selectedVideo: null};

    componentDidMount(){
        this.onSearchSubmit('Mountains');
    }

    onSearchSubmit = async text => {
        //console.log(text, "Sir this is what that child sent us !  ");
        const searchResult = await youtube.get('/search' ,{
            params:{
                q: text
            }
            
        });

        this.setState({videosList:searchResult.data.items, selectedVideo: searchResult.data.items[0]});

        //console.log(this.state.videosList);

    };

    onVideoSelect = video => {
        //console.log('From the App! ', video);

        this.setState({selectedVideo : video});
        console.log('checking: ', this.state.selectedVideo);

    };

    render (){
        return(
            <div className="ui container">
                <SearchBar onsearchsubmit = {this.onSearchSubmit}/>
                <br/>
                <div className="ui grid">
                    <div className=" ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videosList}  onvideoselect={this.onVideoSelect}/>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default App;