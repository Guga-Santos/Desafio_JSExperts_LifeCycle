class API {
  async getSpotify() {
    const response = await fetch('http://localhost:3001/spotify');
    const data = await response.json();
    return data;
  }
  async getYoutube() {
    const response = await fetch('http://localhost:3001/youtube');
    const data = await response.json();
    return data;
  }
}

module.exports = API;
