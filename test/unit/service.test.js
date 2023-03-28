const { describe, it, before, beforeEach, afterEach } =  require('mocha');
const sinon = require('sinon');
const { expect } = require('chai');

const Music = require('./../../src/service/music/music');

const Youtube = require('./../../src/service/youtube/youtube');
const YoutubeRepository = require('./../../src/service/youtube/repository');

const Spotify = require('./../../src/service/spotify/spotify');
const SpotifyRepository = require('./../../src/service/spotify/repository');



const API = require('./../../src/api');
const Repository = require('./../../src/repositories')


const youtubeMock = {
  repository: [
    {
      artist_name: 'Avicii',
      album_name: 'Stories',
      music_name: 'Waiting For Love',
      duration: 230613,
      image: 'https://i.scdn.co/image/ab67616d0000b2735393c5d3cac806092a9bc468',
      music_preview: 'https://p.scdn.co/mp3-preview/407e05795004323b971853a57c8a141bb164645b?cid=d8a5ed958d274c2e8ee717e6a4b0971d'
    }
  ]
}

describe('Service Suite Tests', () => {
  let api = {};
  let repository = {};
  let music = {};
  let spotify = {};
  let youtube = {};

  let sandbox = {};

  before(() => {
    api = new API();
  })

  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore();
  })
  // describe('Music Service', () => {
  //   it('Ensure it returns data', () => {

  //   })
  // })
  describe('Youtube Service', () => { 
    before(async () => {
      repository = new YoutubeRepository({ api })
      const data = await repository.getAll();
      // const test = data.map((item) => new Youtube( item ))

      console.log(data)
    })
    it('Ensure it returns data', () => {

    })
  })
  describe('Spotify Service', () => {
    it('Ensure it returns data', () => {

    })
  })
}) 