import React from 'react'
require('../stylesheets/measurement-input.sass')

const MeasurementInput = (props) => {
  return (
    <div className='measurement-input-wrapper'>
      <h4>Enter your measurements</h4>
      <form>
        <label>
          Chest <input
                  name='chest'
                  type='number'
                  value={props.currentMeasurements.chest}
                  onChange={props.onChestChange}
                /> cm
        </label>
        <label>
          Waist <input
                  name='waist'
                  type='number'
                  value={props.currentMeasurements.waist}
                  onChange={props.onWaistChange}
                /> cm
        </label>
      </form>
    </div>
  )
}

MeasurementInput.propTypes = {
  //
}

export default MeasurementInput
