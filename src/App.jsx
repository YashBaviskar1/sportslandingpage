import './App.css';
import Index from './Intro/Index';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Sports from './Sports/Sports';
import Cultural from './Cultural/Cultural';
import Events from './Cultural/Events';
import Login from './Sports/Login';
import Schedule from "./Sports/Schedule"
import Council from './Council/Council';
import Heads from './Heads/Heads';
import UnifiedContainer from './Sports/box_cricket';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" exact element={<Index/>} />
      <Route path="/sports" exact element={<Sports />} />
      <Route path="/cultural" exact element={<Cultural />} />
      <Route path="/events" exact element={<Events />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/schedule" exact element={<Schedule />} />
      <Route path="/council" exact element={<Council />} />
      <Route path="/heads" exact element={<Heads />} />
      <Route path="/box-cricket" exact element={<UnifiedContainer />} />





      
    </Routes>
    </Router>
  )
}

export default App
