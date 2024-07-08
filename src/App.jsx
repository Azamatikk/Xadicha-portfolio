
import './App.css'
import {  Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Skills from './pages/Skills'
import Header from './components/header/Header'
import Project from './pages/Project'
import Admin from './Admin/Admin'

function App() {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App
