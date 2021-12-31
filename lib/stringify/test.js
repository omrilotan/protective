/* eslint-env jest */

import { stringify } from './index.js'

describe('stringify', () => {
  beforeAll(() => jest.spyOn(JSON, 'stringify'))
  afterEach(() => jest.clearAllMocks())
  afterAll(() => jest.restoreAllMocks())
  test('calls JSON stringify with all arguments', () => {
    const modifier = (key, value) => value
    const subject = { key: 'Balue' }
    stringify(subject, modifier, 2)
    expect(JSON.stringify).toHaveBeenCalledWith({ key: 'Balue' }, modifier, 2)
    expect(stringify(subject, modifier, 2)).toBe(JSON.stringify(subject, modifier, 2))
  })
  test('resolves to simple string representation when JSON fails', () => {
    const subject = { key: 'Balue' }
    subject.circular = subject
    expect(stringify(subject)).toBe('[object Object]')
  })
})
