import React from 'react'

export const Game = ({ NGwords }) => {
  console.log(NGwords)

  const displayNGwords = NGwords.map((NGword, index) => {
    return (
      <div key={index}>
        <input type='checkbox' />
        <p>{NGword}</p>
      </div>
    )
  })

  return (
    <div>
      {displayNGwords}
    </div>
  )
}
