import { useState } from 'react'
import Navbar from './components/Navbar'
import LeftSidebar from './components/LeftSidebar'
import Feed from './components/Feed'
import RightSidebar from './components/RightSidebar'
import './App.css'

export default function App() {
  const [activeNav, setActiveNav] = useState('home')

  return (
    <div className="app">
      <Navbar activeNav={activeNav} setActiveNav={setActiveNav} />
      <div className="main-content">
        <LeftSidebar />
        <Feed />
        <RightSidebar />
      </div>
    </div>
  )
}
