const API = require("../../api");
const Music = require("../music/music");
const SpotifyRepository = require("./repository");

class SpotifyMusic extends Music {
  constructor({ ...tracks }) {
    super((tracks));
  }

  [Symbol.toPrimitive](coercionType){

    const types = {
      string: `${this.music_name} - ${this.album_name} - ${this.artist_name}`,
      number: this.duration,
      default: this.duration
    }
    return types[coercionType]
  }
}

module.exports = SpotifyMusic;