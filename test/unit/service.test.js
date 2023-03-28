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
  ],
  toString: 'Waiting For Love - Stories - Avicii',
  toNumber: 230613
}

const spotifyMock = {
  repository: [{
    artist_name: 'ROSALÍA',
    album_name: 'MOTOMAMI +',
    music_name: 'DESPECHÁ',
    duration: 156787,
    image: 'https://i.scdn.co/image/ab67616d0000b273efc0ef9dd996312ebaf0bf52',
    music_preview: 'https://p.scdn.co/mp3-preview/dda6170f0da3bbe09a4d2c019bb097c5157bf4b1?cid=d8a5ed958d274c2e8ee717e6a4b0971d'
  }],
  toString: 'DESPECHÁ - MOTOMAMI + - ROSALÍA',
  toNumber: 156787,
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
    })

    it('Ensure it returns data', async () => {
      sinon.stub(
        repository,
        repository.getAll.name
      ).returns(youtubeMock.repository)

      const data = await repository.getAll();
      const [service] = data.map((item) => new Youtube( item ));
 
      expect(service).to.be.deep.equal(youtubeMock.repository.at(0))
      expect(service.toString()).to.be.deep.equal(youtubeMock.toString);
      expect(Number(service)).to.be.deep.equal(youtubeMock.toNumber);

    })
  })
  describe('Spotify Service', () => {
    before(async () => {
      repository = new SpotifyRepository({ api })
    })
    it('Ensure it returns data', async () => {
      sinon.stub(
        repository,
        repository.getAll.name
      ).returns(spotifyMock.repository)

      const data = await repository.getAll();
      const [service] = data.map((item) => new Youtube( item ));
 
      expect(service).to.be.deep.equal(spotifyMock.repository.at(0))
      expect(service.toString()).to.be.deep.equal(spotifyMock.toString);
      expect(Number(service)).to.be.deep.equal(spotifyMock.toNumber);
    })
  })
}) 