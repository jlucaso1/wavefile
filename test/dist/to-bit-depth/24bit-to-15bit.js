/**
 * WaveFile: https://github.com/rochars/wavefile
 * Copyright (c) 2017-2018 Rafael da Silva Rocha. MIT License.
 *
 * Test the toBitDepth() method to convert an 24-bit file to 15-bit.
 * 
 */

import assert from 'node:assert';
import fs from 'fs';
import WaveFile from '../../loader.js';
const path = "./test/files/";

describe("24-bit mono from file to 15-bit", function() {

    let wav = new WaveFile(
        fs.readFileSync(path + "24bit-16kHz-bext-mono.wav"));
    wav.toBitDepth("15");
    fs.writeFileSync(
        path + "/out/to-bit-depth/24-to-15.wav", wav.toBuffer());

    it("chunkId should be 'RIFF'", function() {
        assert.equal(wav.container, "RIFF");
    });
    it("fmtChunkId should be 'fmt '", function() {
        assert.equal(wav.fmt.chunkId, "fmt ");
    });
    it("format should be 'WAVE'", function() {
        assert.equal(wav.format, "WAVE");
    });
    it("fmtChunkSize should be 40",
            function() {
        assert.equal(wav.fmt.chunkSize, 40);
    });
    it("audioFormat should be 65534", function() {
        assert.equal(wav.fmt.audioFormat, 65534);
    });
    it("numChannels should be 1", function() {
        assert.equal(wav.fmt.numChannels, 1);
    });
    it("sampleRate should be 16000", function() {
        assert.equal(wav.fmt.sampleRate, 16000);
    });
    it("byteRate be 32000", function() {
        assert.equal(wav.fmt.byteRate, 32000);
    });
    it("blockAlign should be 2", function() {
        assert.equal(wav.fmt.blockAlign, 2);
    });
    it("bitsPerSample should be 16", function() {
        assert.equal(wav.fmt.bitsPerSample, 16);
    });
    it("validBitsPerSample should be 15", function() {
        assert.equal(wav.fmt.validBitsPerSample, 15);
    });
    it("dataChunkId should be 'data'", function() {
        assert.equal(wav.data.chunkId, 'data');
    });
    it("dataChunkSize should be > 0", function() {
        assert.ok(wav.data.chunkSize > 0);
    });
    it("samples.length should be > 0", function() {
        assert.ok(wav.data.samples.length > 0);
    });
    it('subformat should be [1, 1048576, 2852126848, 1905997824]',
        function() {
        assert.deepEqual(
            wav.fmt.subformat, [1, 1048576, 2852126848, 1905997824]);
    });
});
