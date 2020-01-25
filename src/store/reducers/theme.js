import { defaultTheme } from '../../constants'

const initialState = {
  theme: defaultTheme,
  isFetching: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    default: return state
  }
}
