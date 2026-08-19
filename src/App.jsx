import { useState } from 'react'
import Navbar from './components/layout/Navbar.jsx'
import Home from './pages/Home.jsx'

export default function App() {
  const [reviewAnimationKey, setReviewAnimationKey] = useState(0)

  const handleHomeClick = () => {
    setReviewAnimationKey((currentKey) => currentKey + 1)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar onHomeClick={handleHomeClick} />
      <Home reviewAnimationKey={reviewAnimationKey} />
    </div>
  )
}
