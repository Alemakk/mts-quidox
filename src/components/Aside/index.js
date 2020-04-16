import Aside from './Aside'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  app: state.app
})

export default connect(
  mapStateToProps,
  null
)(Aside)
