import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './components'
import { Footer } from './components'

function Root() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer/>
    </>
  )
}

export default Root