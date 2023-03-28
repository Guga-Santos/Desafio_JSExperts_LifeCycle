const API = require("../../api");
const Music = require("../music/music");
const SpotifyRepository = require("./repository");

class SpotifyMusic extends Music {
  constructor({ ...tracks }) {
    super((tracks));
  }

  [Symbol.toPrimitive](coercionType){
    return coercionType === "string"
      ? `${this.music_name} - ${this.album_name} - ${this.artist_name}`
      : this.duration
  }
}

module.exports = SpotifyMusic;