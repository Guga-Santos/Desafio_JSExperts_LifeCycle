const API = require('../../../api');
const SpotifyTrackDTO = require('./../dto')

class SpotifyRepository {
  constructor({ api }) {
    this.api = api;
  }

  async getAll() {
    const data = await this.api.getSpotify()

    const filteredData = data.items.map((item) =>  new SpotifyTrackDTO({ track: item['track'] }))
    return filteredData;
  }

}

const api = new API();
const spotify = new SpotifyRepository({ api })

const test = async() => console.log(await spotify.getAll())

test()