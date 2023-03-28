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

describe('Service Suite Tests', () => {
  let api = {};
  let repository = {};
  let music = {};
  let spotify = {};
  let youtube = {};

  before(() => {
    api = new API();
  })
  // describe('Music Service', () => {
  //   it('Ensure it returns data', () => {

  //   })
  // })
  describe('Youtube Service', () => { 
    before(async () => {
      repository = new YoutubeRepository({ api })
      youtube = new Youtube({ repository });
    })
    it('Ensure it returns data', () => {

    })
  })
  describe('Spotify Service', () => {
    it('Ensure it returns data', () => {

    })
  })
}) 