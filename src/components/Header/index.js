import { connect } from 'react-redux'
import actions from '../../store/actions'
import Header from './Header'

const mapStateToProps = state => ({
  app: state.app,
  theme: state.theme
})

const mapDispatchToProps = dispatch => ({
  handleToggleMenu: data => dispatch(actions.app.handleToggleMenu(data)),
  handleToggleAside: data => dispatch(actions.app.handleToggleAside(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
