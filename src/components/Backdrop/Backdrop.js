import React from 'react'
import reactDom from 'react-dom'

import './Backdrop.css'
export default function Backdrop() {
  return reactDom.createPortal(
    <div className='backdrop overflow-hidden'></div>,document.getElementById('backdrop')
  )
}
