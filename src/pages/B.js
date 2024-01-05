import React from 'react'
import C from './C'


const B = ({number}) => {
  return (
    <div>
      <h1>hello b pages {number}</h1>
      <C number={number} />
    </div>
  )
}

export default B
