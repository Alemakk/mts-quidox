import { connect } from 'react-redux'
import VideoPlayer from './VideoPlayer'

const mapStateToProps = state => ({
  theme: state.theme
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoPlayer)
