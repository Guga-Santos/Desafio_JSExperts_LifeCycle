const API = require('../../api')
const Repository = require('../../repositories')
const format = require('../../utils/timeFormat');


class Music {
  constructor({ 
    artist_name,
    album_name,
    music_name,
    duration,
    image,
    music_preview
   }) {
    this.artist_name = artist_name;
    this.album_name = album_name;
    this.music_name = music_name;
    this.duration = format(duration);
    this.image = image;
    this.music_preview = music_preview;
  }


}

module.exports = Music;

