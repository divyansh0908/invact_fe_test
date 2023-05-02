

import './App.css'
import ParticipantListProvider from './context/participantList'
import HomePage from './pages/HomePage'

function App() {

  return (
    <div className=' w-full h-full'>
    <ParticipantListProvider>
      
      <HomePage />
     
    </ParticipantListProvider>
    </div>
  )
}

export default App
