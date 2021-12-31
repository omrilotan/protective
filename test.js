/* eslint-env jest */

import * as modules from './index.js'

describe('protective', () => {
  test('exposes all functions', () => {
    expect(Object.keys(modules)).toMatchSnapshot()
  })
})
