import { routerReducer } from "react-router-redux"
import { reducer as formReducer } from "redux-form"
import measurementInput from './MeasurementInput'

export default function rootReducer (state = {}, action) {
  return {
    // library reducers
    routing: routerReducer,
    // form: formReducer,
    // own reducers
    currentMeasurements: measurementInput(state.currentMeasurements, action)
  }
}
