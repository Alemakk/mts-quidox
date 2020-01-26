import { connect } from 'react-redux'
import Nav from './Nav'

const mapStateToProps = state => ({
  theme: state.theme
})

export default connect(
  mapStateToProps,
  null
)(Nav)
