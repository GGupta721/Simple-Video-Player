import React from 'react';
import VideoItem from './VideoItem';


const VideoList = ({videos, onvideoselect}) => {
    const renderedList = videos.map(video =>{

        return  <VideoItem key={video.id.videoId} onvideoselect={onvideoselect} video={video} ></VideoItem>;
    });
    return (
        <div className="ui relaxed divided list">
            {renderedList}     
        </div>
    );
};

export default VideoList;
