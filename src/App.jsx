import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import About from './components/about/About'
import Diet from './components/diet/Diet'
import Rutines from './components/rutines/Rutines'
import Contact from './components/contact/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App () {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/rutines" element={<Rutines />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App