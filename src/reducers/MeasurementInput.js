import { cloneDeep } from 'lodash'

let defaultMeasurements = {
  chest: 106,
  waist: 86
}

export default function measurementInput (state = defaultMeasurements, action) {
  // Mutate cloned state instead of original
  var state = cloneDeep(state)

  switch (action.type) {
    case 'SET_CHEST':
      state.chest = action.value
      return state
    case 'SET_WAIST':
      state.waist = action.value
      return state
    default:
      return state
  }
}
