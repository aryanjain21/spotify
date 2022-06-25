import React, { useEffect } from 'react';

import { getBrowseById, getCurrentUserPlaylist, getItems } from '../../services';

const SideBar = () => {
    let type = "album,artist,playlist,track,show,episode"
    useEffect(() => {
        getCurrentUserPlaylist().then((resp) => {
            console.error('resp', resp)
        });
        getItems(type).then((resp) => {
            console.error('resp', resp)
        })
        getBrowseById(type).then((resp) => {
            console.error('resp', resp)
        })
    }, [])
    return (
        <div>
            Side Bar
        </div>
    );
};

export default SideBar;