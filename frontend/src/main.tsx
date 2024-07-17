import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Signup from './pages/Signup.tsx'
import UpcomingEventCard from './components/UpcomingEventCard.tsx'
import PreviousEventCard from './components/PreviousEventCard.tsx'
import Login from './pages/Login.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div>
      <UpcomingEventCard />
      <PreviousEventCard/>
      <Signup/>
      <Login/>
    </div>
  </React.StrictMode>,
)
