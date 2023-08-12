import {
  GameResultsViewContainer,
  GameButton,
  GameImage,
  ChoicesViewContainer,
  ChoicesContainer,
  OptionsContainer,
  OptionsHeading,
  ResultHeading,
  PlayAgainButton,
} from './styledComponents'

const GameResultsView = props => {
  const {
    choicesList,
    checkForResult,
    text,
    isShow,
    choiceArray,
    restartGame,
  } = props
  //   console.log(choiceArray)

  return (
    <GameResultsViewContainer>
      {isShow && (
        <>
          <GameButton
            type="button"
            data-testid="rockButton"
            onClick={() => checkForResult(choicesList[0].id)}
          >
            <GameImage src={choicesList[0].imageUrl} alt={choicesList[0].id} />
          </GameButton>
          <GameButton
            type="button"
            data-testid="scissorsButton"
            onClick={() => checkForResult(choicesList[1].id)}
          >
            <GameImage src={choicesList[1].imageUrl} alt={choicesList[1].id} />
          </GameButton>
          <GameButton
            type="button"
            data-testid="paperButton"
            onClick={() => checkForResult(choicesList[2].id)}
          >
            <GameImage src={choicesList[2].imageUrl} alt={choicesList[2].id} />
          </GameButton>
        </>
      )}
      {!isShow && (
        <>
          <ChoicesViewContainer>
            <ChoicesContainer>
              <OptionsContainer>
                <OptionsHeading>YOU</OptionsHeading>
                <GameImage src={choiceArray[0].imageUrl} alt="your choice" />
              </OptionsContainer>
              <OptionsContainer>
                <OptionsHeading>OPPONENT</OptionsHeading>
                <GameImage
                  src={choiceArray[1].imageUrl}
                  alt="opponent choice"
                />
              </OptionsContainer>
            </ChoicesContainer>
            <ResultHeading>{text}</ResultHeading>
            <PlayAgainButton onClick={() => restartGame()} type="button">
              PLAY AGAIN
            </PlayAgainButton>
          </ChoicesViewContainer>
        </>
      )}
    </GameResultsViewContainer>
  )
}

export default GameResultsView
