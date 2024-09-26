
const clientId = 'd971e42aea3641119ddfdbdc04a75035';
const redirectUri = 'http://127.0.0.1:5500/index.html'; 
const scopes = 'playlist-read-private playlist-read-collaborative'; 

const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes}`;

window.location.href = authUrl;

const getAccessToken = () => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    return params.get('access_token');
};

const accessToken = getAccessToken();