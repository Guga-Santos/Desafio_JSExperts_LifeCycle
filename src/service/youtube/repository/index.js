const YoutubeTrackDTO = require('./../dto');

class YoutubeRepository {
  constructor({ api }) {
    this.api = api;
  }

  async getAll() {
    const data = await this.api.getYoutube()

    const filteredData = data.items.map((item) =>  new YoutubeTrackDTO({ track: item['track'] }))
    return filteredData;
  }

}

module.exports = YoutubeRepository;