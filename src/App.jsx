import React, { useState } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { Game } from './pages/Game.jsx'
import { SettingNGword } from './pages/SettingNGword.jsx'

function App() {
  const [NGword, setNGword] = useState('')
  const handleNGwordChange = (event) => {
    setNGword(event.target.value)
  }
  return (
    <Router>
      <Routes>
        <Route exact path='/setting' element={<SettingNGword NGword={NGword} onChange={handleNGwordChange} />} />
        <Route exact path='/game' element={<Game NGword={NGword} />} />
      </Routes>
    </Router>
  )
}

export default App
