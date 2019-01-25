import React from 'react'
import { render } from 'react-dom'
import Title from './title'

const root = () => {
  return (
    <div>
      <Title text="Title" />
    </div>
  )
}
render(root(), document.getElementById('root'))
