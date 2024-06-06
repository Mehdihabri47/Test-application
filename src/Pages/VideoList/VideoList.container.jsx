import React, { useEffect, useState } from 'react';
import { VideosAPI } from '../../utils/api/api';
import VideoListView from './VideoList.view';

function VideoListContainer() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await VideosAPI.findAll();
      setVideos(response);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <VideoListView videos={videos} isLoading={isLoading} />;
}

export default VideoListContainer;
