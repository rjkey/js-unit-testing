import 'mocha'
import {add} from "../index.js";
import { strict as assert } from 'assert';

describe('Addition', () => {
  describe("Valid input", ()=>{
    it('Should return 6', () => {
      assert.equal(add(3,3), 6)
    });
  })
});

describe('Addition', ()=>{
  describe('Undefined input', ()=>{
    it("Should return -1", ()=>{
      assert.equal(add(undefined, undefined),-1)
    })
  })
})

describe('Addition', ()=>{
  describe("Char input", ()=>{
    it("", ()=>{
      assert.throws(()=>{add("a", "b")}, Error("Attribute is not a number"))
    })
  })
})