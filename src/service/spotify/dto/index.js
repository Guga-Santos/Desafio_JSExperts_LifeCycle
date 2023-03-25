class SpotifyTrackDTO {
  constructor({ track }) {
    this.artist_name = track.artists[0].name;
    this.album_name = track.album.name;
    this.music_name = track.name;
    this.duration = track.duration_ms;
    this.image = track.images[0].url;
    this.music_preview = track.preview_url
  }
}