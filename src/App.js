import './App.css';
import { useState } from "react"
import { Header } from "./components/header"
import { Scores } from "./components/scores"
import { CardContainer } from "./components/cardcontainer"

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  return (
    <div className='page-wrapper'>
      <Header>
        <Scores bestScore={bestScore} currentScore={currentScore} />
      </Header>
      <CardContainer />
    </div>
  )
}

export default App;
