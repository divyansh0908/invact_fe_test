

import './App.css'
import ParticipantListProvider from './context/participantList'
import HomePage from './pages/HomePage'

function App() {

  return (
    <ParticipantListProvider>
      <div className='w-full'>
      <HomePage />
      </div>
    </ParticipantListProvider>
  )
}

export default App
