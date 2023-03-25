const { describe, it, before, beforeEach, afterEach } = require('mocha');
const API = require('./../../src/api');
const Repository = require('./../../src/repositories');
const sinon = require('sinon');
const { expect } = require('chai');

const mocks = {
  validData: { data: 'some_data'}
}

describe('Respository Suite Tests', () => {
  describe('Spotify', () => {
    let api = {};
    let repository = {};
    let sandbox = {};

    before(() => {
      api = new API();
      repository = new Repository({ api });
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
      ).returns(mocks.validData);

      const data = await repository.getSpotifyData();
      const expected = mocks.validData;

      expect(data).to.be.deep.equal(expected);

    })
  })
  describe('Youtube', () => {
    let api = {};
    let repository = {};
    let sandbox = {};

    before(() => {
      api = new API();
      repository = new Repository({ api });
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
      ).returns(mocks.validData);

      const data = await repository.getYoutubeData();
      const expected = mocks.validData;

      expect(data).to.be.deep.equal(expected);

    })
  })
})