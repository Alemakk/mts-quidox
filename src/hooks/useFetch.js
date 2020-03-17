import React from 'react'

import { useReducerWithLogger } from './'

const initialState = {
  isLoading: false,
  isError: false,
  data: {}
}

function dataFetchReducer (state, action) {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: action.payload
      }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        data: action.payload
      }
    case 'FETCH_FAILURE':
      return {
        ...state,
        isError: action.payload
      }
    default:
      throw new Error()
  }
}

export default function useFetch (initialUrl) {
  const [url, setUrl] = React.useState(initialUrl)
  const [state, dispatch] = useReducerWithLogger(dataFetchReducer, initialState)

  React.useEffect(() => {
    let didCancel = false

    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT', payload: true })

      try {
        const result = await url
        if (!didCancel) {
          dispatch({ type: 'FETCH_INIT', payload: false })
          dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
        }
      } catch (e) {
        if (!didCancel) {
          dispatch({ type: 'FETCH_FAILURE', payload: false })
        }
      }
    }
    fetchData()

    return () => {
      didCancel = true
    }
  }, [url, setUrl])
  return { state }
}