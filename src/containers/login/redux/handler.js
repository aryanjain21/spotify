// import { put } from 'redux-saga/effects';
// import { setUser } from './reducer';

export function handleGetUser() {
    try {
        console.error('handleGetUser')
        const clientId = 'a744e2a8492d4f5bbe29860cc730ea07';
        const redirectUrl = 'http://localhost:3000';
        const apiUrl = 'https://accounts.spotify.com/authorize';
        const scope = [
            'user-read-email',
            'user-read-private',
            'user-modify-playback-state',
            'user-read-playback-state',
            'user-read-currently-playing',
            'user-read-recently-played',
            'user-read-playback-position',
            'user-top-read'
        ];
        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
            ' '
        )}&response_type=token&show_daialog=true`;
        // const { data } = response;
        
    } catch (error) {
        console.error('error>>>>', error)
    }
}