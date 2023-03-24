const Spotify = require('../../data/spotify.json')

class API {
  async getSpotify() {
    const response = await (await fetch(Spotify)).json();
    return response;
  }
}

const api = new API()
console.log(api.getSpotify())