/*!
 * Wavefile
 * Copyright (c) 2017 Rafael da Silva Rocha.
 * 
 */

var assert = require('assert');

describe('create 20-bit wave files from scratch', function() {
    
    const WaveFile = require("../../test/loader.js");
    let wav = new WaveFile();

    let samples = [];
    for (let i=0; i<9000; i++) {
        samples.push(0);
    }

    wav.fromScratch(1, 8000, '20', samples);

    let fs = require('fs');
    fs.writeFileSync("./test/files/out/20-bit-48kHz-mono-fromScratch.wav", wav.toBuffer());

    it('chunkId should be "RIFF"', function() {
        assert.equal(wav.chunkId, "RIFF");
    });
    it('format should be "WAVE"', function() {
        assert.equal(wav.format, "WAVE");
    });
    it('fmtChunkId should be "fmt "', function() {
        assert.equal(wav.fmtChunkId, "fmt ");
    });
    it('fmtChunkSize should be 40', function() {
        assert.equal(wav.fmtChunkSize, 40);
    });
    it('audioFormat should be 65534', function() {
        assert.equal(wav.audioFormat, 65534);
    });
    it('numChannels should be 1', function() {
        assert.equal(wav.numChannels, 1);
    });
    it('sampleRate should be 8000', function() {
        assert.equal(wav.sampleRate, 8000);
    });
    it('byteRate should be 24000', function() {
        assert.equal(wav.byteRate, 24000);
    });
    it('blockAlign should be 3', function() {
        assert.equal(wav.blockAlign, 3);
    });
    it('bitsPerSample should be 24', function() {
        assert.equal(wav.bitsPerSample, 24);
    });
    it('validBitsPerSample should be 20', function() {
        assert.equal(wav.validBitsPerSample, 20);
    });
    it('dataChunkId should be "data"', function() {
        assert.equal(wav.dataChunkId, "data");
    });
    it('dataChunkSize should be samples.length * 3', function() {
        assert.equal(wav.dataChunkSize, samples.length * 3);
    });
    it('samples should be the same as the args', function() {
        assert.deepEqual(wav.samples, samples);
    });
    it('cbSize should be 22', function() {
        assert.equal(wav.cbSize, 22);
    });
    it('dwChannelMask should be 0', function() {
        assert.equal(wav.dwChannelMask, 0);
    });
    it('bitDepth should be "20"', function() {
        assert.equal(wav.bitDepth, "20");
    });
});
