const API = require('../../api')
const Repository = require('../../repository')


class Music {
  constructor({ repository }) {
    this.repository = repository;
  }

  async getSpotifyData() {
    const data = await this.repository.getSpotifyData()
    return data.description
  }
}

module.exports = Music;

// const api = new API();
// const repository = new Repository({ api });
// const music = new Music({ repository })

// const test = async () => {
//   console.log(await music.getDescription())
// }

// test()
