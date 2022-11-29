import React from 'react'
import '../App.css'
import klevvversCube from '../assets/klevvvers-cube.png';


export default function KlevvversInfo() {
  return (
    <a className='klevvversInfo' href='https://klevvvers.netlify.app/' target='_blank'>
      <img className='klevvversLogo' src={klevvversCube} alt="klevvvers Logo" />
    </a>
  )
}
