
import './App.css';
import NavBar from './components/NavBar';
import { Routes , Route} from 'react-router-dom'
import FacialPresence from './components/FacialPresence';
import Event from './components/Event';
import Places from './components/Places';
import Login from './components/Login';
import EventParticipant from './components/EventParticipant';

function App() {
  return (
  <>
    <div className="App">
      <NavBar/> 
      <Routes>
          <Route path='/' element={<FacialPresence/>}  />
          <Route path='/events' element={<Event/>}  />
          <Route path='/event/eventParticipant' element={ <EventParticipant/> }/>
          <Route path='/places' element={<Places/>}  />
          <Route path='/login' element={<Login/>}  />
      </Routes>  
    </div>
    
    </>
  )
}

export default App;
