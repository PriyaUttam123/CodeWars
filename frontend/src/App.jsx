import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import TargetPage from './components/TargetPage'
import CodingPlatform from './components/CodingPlatform'
import ProblemsPage from './components/ProblemsPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<TargetPage />} />
          <Route path="/problems" element={<ProblemsPage />} />
          <Route path="/coding/:questionId" element={<CodingPlatform />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
