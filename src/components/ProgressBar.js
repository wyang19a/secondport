import React from 'react'

const ProgressBar = ({width}) => {
    return (
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{width: `${width}%`}} aria-valuenow={`${width}`} aria-valuemin="0" aria-valuemax="100">
        </div>
      </div>
    )
}

export default ProgressBar
