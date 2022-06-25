import axios from 'axios';

let config = {
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('setToken'),
        'Content-Type': 'application/json'
    }
}

export const getItems = (data) => {
    return axios.get(`${process.env.REACT_APP_BACKEND}v1/browse/categories?limit=50&country=CA&locale=hi_CA`, config);
}

export const getBrowseById = (data) => {
    return axios.get(`${process.env.REACT_APP_BACKEND}v1/browse/categories/toplists/playlists?limit=9`, config);
}

export const getCurrentUserPlaylist = (data) => {
    return axios.get(`${process.env.REACT_APP_BACKEND}v1/me/playlists`, config, data);
}

export const getRecentlyPlayedList = (data) => {
    return axios.get(`${process.env.REACT_APP_BACKEND}v1/me/player/recently-played`, config, data);
}

export const getAlbums = (data) => {
    return axios.get(`${process.env.REACT_APP_BACKEND}v1/albums`, config, data);
}

export const getGenreSeeds = (data) => {
    return axios.get(`${process.env.REACT_APP_BACKEND}v1/recommendations/available-genre-seeds`, config, data);
}