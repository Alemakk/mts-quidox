import HowItsWork from './HowItsWork'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  theme: state.theme
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HowItsWork)
