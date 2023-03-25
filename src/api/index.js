class API {
  async getSpotify() {
    const response = await fetch('http://localhost:3001/spotify');
    const { tracks } = await response.json();
    return tracks;
  }
  async getYoutube() {
    const response = await fetch('http://localhost:3001/youtube');
    const { tracks } = await response.json();
    return tracks;
  }
}

module.exports = API;
