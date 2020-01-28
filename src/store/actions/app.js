import * as t from '../types'

const handleToggleMenu = data => dispatch => {
  dispatch({
    type: t.TOGGLE_MENU,
    payload: data
  })
}

const handleToggleAside = data => dispatch => {
  dispatch({
    type: t.TOGGLE_ASIDE,
    payload: data
  })
}

export {
  handleToggleMenu,
  handleToggleAside
}
