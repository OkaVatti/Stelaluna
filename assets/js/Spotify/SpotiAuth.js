const clientId = CONFIG.SpotifyClientID;
const redirectUri = CONFIG.SpotifyRedirectURI;
const scopes = 'user-read-currently-playing';

export function authorizeSpotify() {
    const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirectUri)}`;
    window.location.href = url;
}

export function getAccessToken() {
    const hash = window.location.hash.substring(1).split('&').reduce((acc, item) => {
        const parts = item.split('=');
        acc[parts[0]] = parts[1];
        return acc;
    }, {});
    return hash.access_token;
}
