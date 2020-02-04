import { connect } from 'react-redux'
import actions from '../../store/actions'
import ScrollTop from './ScrollTop'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  hideAll: () => dispatch(actions.app.hideAllMenu())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScrollTop)
