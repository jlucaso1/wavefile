/**
 * WaveFile: https://github.com/rochars/wavefile
 * Copyright (c) 2017-2020 Rafael da Silva Rocha. MIT License.
 *
 * Write files with iXML chunk.
 * 
 */

import WaveFile from '../loader.js';
import assert from 'node:assert'
import fs from 'fs';
const path = "./test/files/";

describe("Read files with _PMX chunk (lib)", function() {
    let wav = new WaveFile(
        fs.readFileSync(path + "24bit-48kHz-1c-mixpre6-hiser_interview.WAV"));

    it("_PMX bytes should be a even number", function() {
        assert.equal(wav.get_PMXBytes_().length % 2, false);
    });

    it("_PMX bytes should be a even number on written file", function() {
    	let wav2 = new WaveFile(wav.toBuffer());
        assert.equal(wav2.get_PMXBytes_().length % 2, false);
    });
});
