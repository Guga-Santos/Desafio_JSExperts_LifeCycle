const { describe, it, before, beforeEach, afterEach } = require('mocha');
const API = require('./../../src/api');
const SpotifyRepository = require('./../../src/service/spotify/repository')
const YoutubeRepository = require('./../../src/service/youtube/repository')
const sinon = require('sinon');
const { expect } = require('chai');

const mocks = {
  spotify: require('./mocks/spotifyData.json'),
  spotifyDTO: require('./mocks/spotifyDTO.json'),
  youtube: require('./mocks/youtubeData.json'),
  youtubeDTO: require('./mocks/youtubeDTO.json')
}

describe('Respository Suite Tests', () => {
  describe('Spotify', () => {
    let api = {};
    let repository = {};
    let sandbox = {};

    before(() => {
      api = new API();
    })

    beforeEach(() => {
      sandbox = sinon.createSandbox();
    })

    afterEach(() => {
      sandbox.restore();
    })

    it('Ensure getSpotifyData function returns data', async () => {
      sandbox.stub(
        api,
        api.getSpotify.name
      ).returns(mocks.spotify);
      
      repository = new SpotifyRepository({ api })
      const data = await repository.getAll();
      const expected = mocks.spotifyDTO;

      expect(data).to.be.deep.equal(expected);

    })
  })
  describe('Youtube', () => {
    let api = {};
    let repository = {};
    let sandbox = {};

    before(() => {
      api = new API();
    })

    beforeEach(() => {
      sandbox = sinon.createSandbox();
    })

    afterEach(() => {
      sandbox.restore();
    })
    it('Ensure getYoutubeData function returns data', async() => {
      sandbox.stub(
        api,
        api.getYoutube.name
      ).returns(mocks.youtube);
      
      repository = new YoutubeRepository({ api })
      const data = await repository.getAll();
      const expected = mocks.youtubeDTO;

      expect(data).to.be.deep.equal(expected);

    })
  })
})