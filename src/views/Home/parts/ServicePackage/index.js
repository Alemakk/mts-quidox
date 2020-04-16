import { connect } from 'react-redux'
import ServicePackage from './ServicePackage'

const mapStateToProps = state => ({
  theme: state.theme
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServicePackage)
