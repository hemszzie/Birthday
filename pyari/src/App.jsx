import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { MusicProvider } from './components/MusicProvider.jsx'
import Hero from './components/Hero'
import W1 from './components/W1'
import W2 from './components/W2'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/W1" element={<W1 />} />
        <Route path="/W2" element={<W2 />} />
      </Routes>
    </Router>
  )
}

export default App
