import React from 'react'
import Diagram from '../containers/DiagramContainer'
import MeasurementInput from '../containers/MeasurementInputContainer'
require('../stylesheets/home.sass')

const HomeComponent = (props) => {
  return (
    <div className='page-home'>
      <h4>Tailoring App 0.0.1</h4>
      <Diagram />
      <MeasurementInput />
    </div>
  )
}

HomeComponent.propTypes = {
  //
}

export default HomeComponent
