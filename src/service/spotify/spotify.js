const Music = require("../music/music");

class SpotifyMusic extends Music {
  constructor({ ...tracks }) {
    super((tracks));
  }

  [Symbol.toPrimitive](coercionType){
    return coercionType === "string"
      ? ` ${this.music_name} - ${this.album_name} - ${this.artist_name}\n`
      : this.duration
  }
}

module.exports = SpotifyMusic;