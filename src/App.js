import logo from './logo.svg';
import './App.css';
import { WordGuessGame } from './components/WordGuessGame';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { WordGameLogic } from './components/WordGameLogic';
import { PlayerSide } from './components/PlayerSide';
function App() {
  return (
    <>
    <Router>
    <div className='container'>
    <Routes>
          <Route exact path="/" element={<WordGuessGame/>}/>
          <Route exact path="/organiser" element={<WordGameLogic/>}/>
          <Route exact path="/player" element={<PlayerSide/>}/>
        </Routes>
    </div>
    </Router></>
  );
}

export default App;
