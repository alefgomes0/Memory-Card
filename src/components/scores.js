export const Scores = ( {bestScore, currentScore} ) => {
  return (
    <>
      <h4 className="best-score">Best Score: <span className="best">{bestScore}</span></h4>
      <h4 className="current-score">Current Score: <span className="current">{currentScore}</span></h4>
    </>
  )
}