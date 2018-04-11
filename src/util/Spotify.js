
const accessToken = '';
const clientId = 'f8d1019238ce4e45a2b52be076371c35';
const redirectId = '';
let Spotify = {

  getAccessToken(accessToken) {
    if (accessToken) {

  }
  const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
  const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expirationTime = Number(expiresInMatch[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');

      console.log('returned from oath');
      return accessToken;
    } else {
      console.log('redictering to spotify login');

      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
   // display on users' browsers, the url that contains our clientId, the scope and the redirect uri
   window.location = accessUrl;
    }
  }
  search(term) {
    return fetch('https://api.spotify.com/v1/search?type=track&q=term', {
  headers: {Authorization: `Bearer ${accessToken}`}
}).then(response => response.json())
        .then(jsonResponse =>
          {
            if(jsonResponse.tracks)
            {
              return jsonResponse.tracks.items.map(track =>
                {
                  return {
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri
                  };
                }
              );
            }
            else
              return [];
          }
        );
  },
playlistMethod(playlistName, trackURI) {
  const accessT = getAccessToken(accessToken);
  const headers = {
    accessT: getAccessToken(accessToken),
    headers: {Authorization: `Bearer ${accessToken}`}
  };
  const playlistId = jsonResponse.id;
  fetch('https://api.spotify.com/v1/users/${userId}/playlists', {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({name: name})
      })
      
      fetch('https://api.spotify.com/v1/users/v1/users/{user_id}/playlists/{playlist_id}/tracks', {
    headers: headers,
    method: 'POST',
    body: JSON.stringify({uris: trackUris)
  })
  const userID = ''
  if (!playlistName && !trackURI) {
    return;
  }
}


};

export default Spotify;
