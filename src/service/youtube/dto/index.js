class YoutubeTrackDTO {
  constructor({ track }) {
    this.artist_name = track.artists[0].artist_name;
    this.album_name = track.album.name;
    this.music_name = track.name;
    this.duration = track.time_ms;
    this.image = track.album.images[0].url;
    this.music_preview = track.preview_url;
  }
}

module.exports = YoutubeTrackDTO;