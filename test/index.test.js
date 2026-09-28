import test from "node:test";import assert from "node:assert/strict";import{lerp,inverseLerp,remap}from"../src/index.js";
test("lerp",()=>assert.equal(lerp(0,10,.5),5));
test("inverse",()=>assert.equal(inverseLerp(0,10,5),.5));
test("remap",()=>assert.equal(remap(5,0,10,0,100),50));
