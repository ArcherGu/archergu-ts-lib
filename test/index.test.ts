import { describe, expect, it } from 'vitest'
import { add } from '../src'

describe('rollback', () => {
  it('should do addition', () => {
    expect(add(1, 2)).toBe(3)
  })
})
