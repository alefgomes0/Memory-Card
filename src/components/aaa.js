import "./App.css";
import { useState, useEffect } from "react";
import { Header } from "./components/header";
import { Scores } from "./components/scores";
import { CardContainer } from "./components/cardcontainer";

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [selectedIds, setSelectedIds] = useState([]);

  const saveCardId = (clickedCardId) => {
    setSelectedIds(selectedIds.concat(clickedCardId));
  };

  useEffect(() => {
    const noDuplicates = selectedIds.length === new Set(selectedIds).size;

    if (noDuplicates && selectedIds.length !== 0) {
      setCurrentScore((prevScore) => prevScore + 1);
    } else if (!noDuplicates) {
      setCurrentScore(0);
      setSelectedIds([]);
    }

    if (currentScore > bestScore) {
      setBestScore(currentScore)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIds]);


  return (
    <div className="page-wrapper">
      <Header>
        <Scores bestScore={bestScore} currentScore={currentScore} />
      </Header>
      <CardContainer saveId={saveCardId} />
    </div>
  );
}

export default App;
