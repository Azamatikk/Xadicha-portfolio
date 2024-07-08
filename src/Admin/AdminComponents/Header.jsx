import React from 'react'
import './adminHeader.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
   <header>
    <ul>
        <li><Link to='CreateWork'>Create Work</Link></li>
        <li><Link to='AllWork'>All Work</Link></li>
    </ul>
   </header>
  )
}
