/* eslint-env jest */

import { verbose } from './index.js'

describe('verbose', () => {
  describe('add the function arguments to the error message', () => {
    test('sync', () => {
      function throwError () {
        throw new Error('Something must have gone horribly wrong')
      }
      try {
        verbose(throwError)('one', 'two')
      } catch (error) {
        expect(error.message).toMatchSnapshot()
        return
      }
      throw new Error('This test should not be reached')
    })
    test('async', (done) => {
      const throwError = () => new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('Something must have gone horribly wrong later')), 0)
      })
      verbose(throwError)('one', 'two').catch(error => {
        expect(error.message).toMatchSnapshot()
        done()
      })
    })
  })
  describe('returns function return value', () => {
    test('sync', () => {
      function returnValue () {
        return 'hello'
      }
      const result = verbose(returnValue)()
      expect(result).toBe('hello')
    })
    test('async', (done) => {
      const returnValue = () => new Promise((resolve, reject) => {
        setTimeout(() => resolve('hello'), 0)
      })
      verbose(returnValue)().then(result => {
        expect(result).toBe('hello')
        done()
      })
    })
  })
})
