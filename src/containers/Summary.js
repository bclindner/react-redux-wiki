import { connect } from 'react-redux'
import Summary from '../components/Summary'

const mapStateToProps = (state, ownProps) => ({
  title: state.title,
  description: state.description,
  summary: state.summary,
  thumbnailURL: state.thumbnailURL,
  href: state.href,
  isRequesting: state.isRequesting,
  errored: state.errored
})

export default connect(
  mapStateToProps,
  null
)(Summary)
