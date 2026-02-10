import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Layout from './pages/Layout'
import Register from './pages/Register'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Layout/>}>
          <Route path='' element = {<Home/>}/>
          <Route path='/account/login' element = {<Login/>}/>
          <Route path='/account/register' element = {<Register/>}/>
          <Route path='*' element = {<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
