import { authorizeSpotify, getAccessToken } from './SpotiAuth.js';
import { getCurrentlyPlaying } from './SpotiAPI.js';

document.addEventListener('DOMContentLoaded', async () => {
    const accessToken = getAccessToken();

    if (!accessToken) {
        authorizeSpotify();
    } else {
        fetchAndDisplayTrack(accessToken);
        setInterval(() => {
            fetchAndDisplayTrack(accessToken);
        }, 2000); // Refresh every 10 seconds
    }
});

async function fetchAndDisplayTrack(accessToken) {
    try {
        const track = await getCurrentlyPlaying(accessToken);
        displayTrack(track);
    } catch (error) {
        console.error(error);
    }
}

function displayTrack(track) {
    if (track && track.item) {
        const trackName = track.item.name;
        const artistName = track.item.artists.map(artist => artist.name).join(', ');
        const albumName = track.item.album.name;

        document.getElementById('track-name').textContent = trackName;
        document.getElementById('artist-name').textContent = artistName;
        document.getElementById('album-name').textContent = albumName;
    } else {
        document.getElementById('track-name').textContent = 'No song is currently playing.';
    }
}
