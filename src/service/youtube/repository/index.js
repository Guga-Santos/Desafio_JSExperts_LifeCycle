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

const api = new API();
const youtube = new YoutubeRepository({ api })


const test = async() => {
  const data = await youtube.getAll();
  const arr = data.map((ob) => new SpotifyMusic(ob))
  console.log(arr.toString())

}


test()