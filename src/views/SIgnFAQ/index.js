import { connect } from 'react-redux'
import SIgnFAQ from './SIgnFAQ'

const mapStateToProps = state => ({
  theme: state.theme
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SIgnFAQ)
