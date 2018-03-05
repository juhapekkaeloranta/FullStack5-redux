import counterReducer from './counterReducer'
import deepFreeze from 'deep-freeze'

describe('unicafe reducer', () => {
  const assumedInitialState = {
    good: 0,
    ok: 0,
    bad: 0
  }

  it('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'RETURN_DEFAULT_STATE'
    }

    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(assumedInitialState)
  })

  it('good is incremented', () => {
    const state = assumedInitialState
    const action = {
      type: 'GOOD'
    }

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })
  })

  it('bad is incremented', () => {
    const state = assumedInitialState
    const action = {
      type: 'BAD'
    }

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      ok: 0,
      bad: 1
    })
  })

  it('ok is incremented', () => {
    const state = assumedInitialState
    const action = {
      type: 'OK'
    }

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      ok: 1,
      bad: 0
    })
  })

  it('reset sets all to 0', () => {
    const state = {
      good: 7,
      ok: 1,
      bad: 1
    }
    const action = {
      type: 'RESET'
    }

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      ok: 0,
      bad: 0
    })
  })
})