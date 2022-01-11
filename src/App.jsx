import React, { useState } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { Game } from './pages/Game.jsx'
import { SettingNGwords } from './pages/SettingNGwords.jsx'

function App() {
  const [NGwords, setNGwords] = useState([])
  const handleNGwordsBlur = (event, index) => {
    console.log('event', event.target.value)
    console.log('index', index)
    if(NGwords[index] === undefined) {
      setNGwords([...NGwords, event.target.value])
    } else {
      NGwords[index] = event.target.value
      setNGwords([...NGwords])
    }
  }
  return (
    <Router>
      <Routes>
        <Route exact path='/setting' element={<SettingNGwords onBlur={handleNGwordsBlur} />} />
        <Route exact path='/game' element={<Game NGwords={NGwords} />} />
      </Routes>
    </Router>
  )
}

export default App
