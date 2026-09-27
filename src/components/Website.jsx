import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// import HeroPort from './HeroPort'
// import Skills from './Skills'
// import Contact from './Contact'
// import Project from './Project'
// import About from './About'
// import Resume from './Resume'
import { lazy } from 'react'
const HeroPort= lazy(()=> import('./HeroPort'))
const Skills= lazy(()=> import('./Skills'))
const Contact= lazy(()=> import('./Contact'))
const Project= lazy(()=> import('./Project'))
const About= lazy(()=> import('./About'))
const Resume= lazy(()=> import('./Resume'))

function Website() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<HeroPort/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/contact' element={<Contact/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default Website