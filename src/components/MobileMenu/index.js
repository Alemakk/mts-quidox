import MobileMenu from './MobileMenu'
import { connect } from 'react-redux'
import actions from '../../store/actions'

const mapStateToProps = state => ({
  app: state.app
})

const mapDispatchToProps = dispatch => ({
  handleToggleMenu: data => dispatch(actions.app.handleToggleMenu(data)),
  handleToggleAside: data => dispatch(actions.app.handleToggleAside(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileMenu)
