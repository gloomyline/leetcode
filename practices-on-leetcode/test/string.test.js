/*
* @Author: AlanWang
* @Date:   2018-04-28 17:34:25
* @Last Modified by:   AlanWang
* @Last Modified time: 2018-04-28 17:46:31
*/

const { lengthLongestSubstring: lls } = require('../src/string.js')
const expect = require('chai').expect

describe('string operators', () => {
  it('lengthlongestSubstring', done => {
    expect(lls('abcabcef')).to.equal(5)
    expect(lls('bbbbb')).to.equal(1)
    expect(lls('pwwkew')).to.equal(3)
    done()
  })
})