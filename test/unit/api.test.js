const { describe, it, before, beforeEach, afterEach } = require('mocha');
const API = require('./../../src/api');
const sinon = require('sinon');
const { expect } = require('chai');

function toJson (body) {
  var mockResponse = new global.Response(JSON.stringify(body), { 
    //the fetch API returns a resolved window Response object
    //https://gist.github.com/lkrych/ad537915c69f09ad597767655d2b9211
    status: 200,
    headers: {
      'Content-type': 'application/json'
    }
  });

  return Promise.resolve(mockResponse);
}

const MOCK_JSON = {
  'any_key' : 'any_value'
  };

describe('Api Suite Tests', () => {
  describe('Spotify', () => {
    let api = {};
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


    it('Ensure it return data', async () => {
      sandbox.stub(
        global,
        global.fetch.name
      ).onCall(0).returns(toJson(MOCK_JSON))

      const data = await api.getSpotify();
      const expected = MOCK_JSON;

      expect(data).to.be.deep.equal(MOCK_JSON);
    })
  })

  describe('Youtube', () => {
    let api = {};
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


    it('Ensure it return data', async () => {
      sandbox.stub(
        global,
        global.fetch.name
      ).onCall(0).returns(toJson(MOCK_JSON))

      const data = await api.getYoutube();
      const expected = MOCK_JSON;

      expect(data).to.be.deep.equal(MOCK_JSON);
    })
  })
})