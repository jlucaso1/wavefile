/**
* WaveFile: https://github.com/rochars/wavefile
* Copyright (c) 2017-2018 Rafael da Silva Rocha. MIT License.
*
* Tests for sample rate conversion, sinc method.
* 
*/

import WaveFile from '../loader.js';
import assert from 'node:assert'
import fs from 'fs';
import { after } from 'node:test';
const path = "./test/files/";

console.log('sinc + IIR');

let hrstart = process.hrtime();

// Chirps, FP

describe('Downsample a 32-bit 44.1kHz log sine sweep', function() {
  // Read a 8kHz wav 
  let wav = new WaveFile(
    fs.readFileSync(path + "32fp-44100Hz-mono-chirp-1-22050-log.wav"));

  // Convert to another sample rate
  wav.toSampleRate(16000, {method: 'sinc', LPFType: 'IIR'});

  // Write the file
  fs.writeFileSync(
    path + "/out/to-sample-rate/sinc-IIR-32fp-16000Hz-mono-chirp-1-22050-log.wav",
    wav.toBuffer());
});

describe('Upsample a 32-bit 44.1kHz log sine sweep', function() {
  // Read a 8kHz wav 
  let wav = new WaveFile(
    fs.readFileSync(path + "32fp-44100Hz-mono-chirp-1-22050-log.wav"));

  // Convert to another sample rate
  wav.toSampleRate(96000, {method: 'sinc', LPFType: 'IIR'});

  // Write the file
  fs.writeFileSync(
    path + "/out/to-sample-rate/sinc-IIR-32fp-96000Hz-mono-chirp-1-22050-log.wav",
    wav.toBuffer());
});

describe('Downsample a 32-bit 44.1kHz linear sine sweep', function() {
  // Read a 8kHz wav 
  let wav = new WaveFile(
    fs.readFileSync(path + "32fp-44100Hz-mono-chirp-1-22050-linear.wav"));

  // Convert to another sample rate
  wav.toSampleRate(16000, {method: 'sinc', LPFType: 'IIR'});

  // Write the file
  fs.writeFileSync(
    path + "/out/to-sample-rate/sinc-IIR-32fp-16000Hz-mono-chirp-1-22050-linear.wav",
    wav.toBuffer());
});

describe('Upsample a 32-bit 44.1kHz linear sine sweep', function() {
  // Read a 8kHz wav 
  let wav = new WaveFile(
    fs.readFileSync(path + "32fp-44100Hz-mono-chirp-1-22050-linear.wav"));

  // Convert to another sample rate
  wav.toSampleRate(96000, {method: 'sinc', LPFType: 'IIR'});

  // Write the file
  fs.writeFileSync(
    path + "/out/to-sample-rate/sinc-IIR-32fp-96000Hz-mono-chirp-1-22050-linear.wav",
    wav.toBuffer());
});

// Chirps, int

describe('Downsample a 16-bit 44.1kHz log sine sweep', function() {
  // Read a 8kHz wav 
  let wav = new WaveFile(
    fs.readFileSync(path + "16bit-44100Hz-mono-chirp-1-22050-log.wav"));

  // Convert to another sample rate
  wav.toSampleRate(16000, {method: 'sinc', LPFType: 'IIR'});

  // Write the file
  fs.writeFileSync(
    path + "/out/to-sample-rate/sinc-IIR-16bit-16000Hz-mono-chirp-1-22050-log.wav",
    wav.toBuffer());
});

describe('Upsample a 16-bit 44.1kHz log sine sweep', function() {
  // Read a 8kHz wav 
  let wav = new WaveFile(
    fs.readFileSync(path + "16bit-44100Hz-mono-chirp-1-22050-log.wav"));

  // Convert to another sample rate
  wav.toSampleRate(96000, {method: 'sinc', LPFType: 'IIR'});

  // Write the file
  fs.writeFileSync(
    path + "/out/to-sample-rate/sinc-IIR-16bit-96000Hz-mono-chirp-1-22050-log.wav",
    wav.toBuffer());
});

describe('Downsample a 16-bit 44.1kHz linear sine sweep', function() {
  // Read a 8kHz wav 
  let wav = new WaveFile(
    fs.readFileSync(path + "16bit-44100Hz-mono-chirp-1-22050-linear.wav"));

  // Convert to another sample rate
  wav.toSampleRate(16000, {method: 'sinc', LPFType: 'IIR'});

  // Write the file
  fs.writeFileSync(
    path + "/out/to-sample-rate/sinc-IIR-16bit-16000Hz-mono-chirp-1-22050-linear.wav",
    wav.toBuffer());
});

describe('Upsample a 16-bit 44.1kHz linear sine sweep', function() {
  // Read a 8kHz wav 
  let wav = new WaveFile(
    fs.readFileSync(path + "16bit-44100Hz-mono-chirp-1-22050-linear.wav"));

  // Convert to another sample rate
  wav.toSampleRate(96000, {method: 'sinc', LPFType: 'IIR'});

  // Write the file
  fs.writeFileSync(
    path + "/out/to-sample-rate/sinc-IIR-16bit-96000Hz-mono-chirp-1-22050-linear.wav",
    wav.toBuffer());
});

// Songs

describe('Downsample a 16bit 44.1kHz file', function() {
  // Read a 8kHz wav 
  let wav = new WaveFile(
    fs.readFileSync(path + "song1.wav"));

  // Convert to another sample rate
  wav.toSampleRate(16000, {method: 'sinc', LPFType: 'IIR'});

  // Write the file
  fs.writeFileSync(
    path + "/out/to-sample-rate/sinc-IIR-song1-16kHz.wav",
    wav.toBuffer());
});

describe('Upsample a 16bit 44.1kHz file', function() {
  // Read a 8kHz wav 
  let wav = new WaveFile(
    fs.readFileSync(path + "song1.wav"));

  // Convert to another sample rate
  wav.toSampleRate(96000, {method: 'sinc', LPFType: 'IIR'});

  // Write the file
  fs.writeFileSync(
    path + "/out/to-sample-rate/sinc-IIR-song1-96kHz.wav",
    wav.toBuffer());
});

after(function () {
  const hrend = process.hrtime(hrstart);
  console.info('%ds %dms', hrend[0], hrend[1] / 1000000);
});
