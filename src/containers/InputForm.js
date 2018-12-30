import { connect } from 'react-redux'
import InputForm from '../components/InputForm'
import { getSummary } from '../actions/wiki'

const mapDispatchToProps = dispatch => ({
  onSave: (txt) => {
    dispatch(getSummary(txt))
  }
})

export default connect(
  null,
  mapDispatchToProps
)(InputForm)
