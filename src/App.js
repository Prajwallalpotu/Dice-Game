import './App.css';
import styled from "styled-components";
import StartGame from './components/StartGame';
import Game from './components/Game';
import { useState } from 'react';

const Button = styled.button`
  color: white;
  background-color: gray ;
  padding: 10px;
  border-radius: 10px;
  border: 0px;
`;

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggle = () =>{
    setIsGameStarted((prev) => !prev);
  }

  return (
    
    <div>
      {
        isGameStarted ? <Game /> : <StartGame toggle = {toggle} />
      }
    </div>
  );
}

export default App;
