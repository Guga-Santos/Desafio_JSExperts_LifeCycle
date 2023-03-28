const API = require('../../../api');
const YoutubeTrackDTO = require('./../dto');
const Music = require('../../music/music');
const SpotifyMusic = require('../../spotify/spotify')

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