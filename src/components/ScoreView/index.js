import {
  ScoreContainer,
  ScoreHeading,
  ScoreCardContainer,
  ScoreValue,
  ScoreName,
} from './styledComponents'

const ScoreView = props => {
  const {score} = props

  return (
    <ScoreContainer>
      <ScoreHeading>
        ROCK <br />
        PAPER
        <br />
        SCISSORS
      </ScoreHeading>
      <ScoreCardContainer>
        <ScoreName>Score</ScoreName>
        <ScoreValue>{score}</ScoreValue>
      </ScoreCardContainer>
    </ScoreContainer>
  )
}

export default ScoreView
