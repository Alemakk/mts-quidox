import { connect } from 'react-redux'
import HowItsWork from './HowItsWork'

const mapStateToProps = state => ({
  theme: state.theme
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HowItsWork)
