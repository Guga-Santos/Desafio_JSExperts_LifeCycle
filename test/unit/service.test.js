const { describe, it } =  require('mocha');
const sinon = require('sinon');
const { expect } = require('chai');

const Music = require('./../../src/service/music/music');
const Youtube = require('./../../src/service/youtube/youtube');
const Spotify = require('./../../src/service/spotify/spotify');


const API = require('./../../src/api');
const Repository = require('./../../src/repositories')/

describe('Service Suite Tests', () => {
  let api = {};
  let repository = {};
  let music = {};
  let spotify = {};
  let youtube = {};
  
  describe('Music Service', () => {
    it('Ensure it returns data', () => {

    })
  })
  describe('Youtube Service', () => {
    it('Ensure it returns data', () => {

    })
  })
  describe('Spotify Service', () => {
    it('Ensure it returns data', () => {

    })
  })
}) 