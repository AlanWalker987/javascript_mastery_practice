import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Box } from '@mui/material';
import { Videos, ChannelCard } from './';
import { fetchfromAPI } from '../utils/FetchfromAPI';

const ChannelDetail = () => {
    const { id } = useParams();

    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([])
    // console.log(channelDetail)
    // console.log(videos)
    useEffect(() => {
        fetchfromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]));
        fetchfromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items))
    }, [id])
    return (
        <div>{id}</div>
    )
}

export default ChannelDetail