import { useEffect, useMemo, useReducer, useRef } from 'react'

function withLogger (dispatch) {
  return function (action) {
    console.groupCollapsed('Action Type:', action.type)
    return dispatch(action)
  }
}

export default function useReducerWithLogger (...args) {
  const { initialState } = args
  const prevState = useRef(initialState)
  const [state, dispatch] = useReducer(...args)

  const dispatchWithLogger = useMemo(
    () => {
      return withLogger(dispatch)
    },
    [dispatch]
  )

  useEffect(
    () => {
      if (state !== initialState) {
        console.log('Prev state:', prevState.current)
        console.log('Next state:', state)
        console.groupEnd()
      }
      prevState.current = state
    },
    [state]
  )

  return [state, dispatchWithLogger]
}
