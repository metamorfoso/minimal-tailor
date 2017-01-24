import React from 'react'
require('../stylesheets/diagram.sass')

const DiagramComponent = (props) => {
  return (
    <div className='diagram-container'>
      <div id='canvas'></div>
    </div>
  )
}

DiagramComponent.propTypes = {
  //
}

export default DiagramComponent
