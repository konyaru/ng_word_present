import React from 'react'

export const Game = ({ NGword }) => {
  return (
    <div>
      <div className='ng-word'>
        <input type='checkbox' />
        <p>{NGword}</p>
      </div>
    </div>
  )
}
