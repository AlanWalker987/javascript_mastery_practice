import React from 'react'
import { useState, useEffect } from 'react'
import { Stack, Box, Typography } from '@mui/material';
import SideBar from './SideBar';
import Videos from './Videos';
import { fetchfromAPI } from '../utils/FetchfromAPI';

const Feed = () => {

    const [selectedcategory, setselectedcategory] = useState('New');
    const [videos, setvideos] = useState([]);

    useEffect(() => {
        fetchfromAPI(`search?part=snippet&q=${selectedcategory}`).then((data) => setvideos(data.items))
    }, [selectedcategory])
    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
                <SideBar selectedcategory={selectedcategory} setselectedcategory={setselectedcategory} />
                <Typography className='copyright' variant="body2" sx={{ mt: 1.5, color: '#fff' }}>
                    Copyright JSM 2023
                </Typography>
            </Box>
            <Box p={2} sx={{ overflowY: 'auto', height: '95%', flex: 2 }}>
                <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>{selectedcategory}
                    <span style={{ color: '#FC1503' }}>videos</span>
                </Typography>
                <Videos videos={videos} />
            </Box>
        </Stack>
    )
}

export default Feed