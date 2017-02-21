import React from 'react'
import Paper from 'paper'
require('../stylesheets/diagram.sass')

const DiagramComponent = (props) => {
  return (
    <div className='diagram-wrapper'>
      <div className='canvas-wrapper'>
        <canvas id='canvas'></canvas>
      </div>
    </div>
  )
}

DiagramComponent.propTypes = {
  //
}

export default DiagramComponent
