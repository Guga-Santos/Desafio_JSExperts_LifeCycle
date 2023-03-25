const Music = require("../music/music");

class YoutubeMusic extends Music {
  constructor({ ...tracks }) {
    super((tracks));
  }

  toString() {
    return `${this.music_name} - ${this.album_name} - ${this.artist_name}`
  }

  valueOf() {
    return this.duration;
  }
}

module.exports = YoutubeMusic;