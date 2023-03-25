const API = require('../../../api');
const YoutubeTrackDTO = require('./../dto')

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

const api = new API();
const youtube = new YoutubeRepository({ api })

const test = async() => console.log(await youtube.getAll())

test()