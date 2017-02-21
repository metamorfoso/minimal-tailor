import { connect } from 'react-redux'
import MeasurementInput from '../components/MeasurementInput'
import { setChest, setWaist } from '../actions/MeasurementInput'

const mapStateToProps = (state) => {
  return {
    currentMeasurements: state.currentMeasurements
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChestChange: (event) => {
      dispatch(setChest(event.target.value))
    },
    onWaistChange: (event) => {
      dispatch(setWaist(event.target.value))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MeasurementInput)
