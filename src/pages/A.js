import React from 'react'
import B from './B'

const A = ({number} ) => {
  return (
    <div>
      <h1>hello A pages {number} </h1>
      <B number={number} />
    </div>
  )
}

export default A
