class Repository {
  constructor({ api }) {
    this.api = api;
  }

  async getSpotifyData() {
    const data = await this.api.getSpotify();
    return data;
  }

  async getYoutubeData() {
    const data = await this.api.getYoutube();
    return data;
  }
}

module.exports = Repository;