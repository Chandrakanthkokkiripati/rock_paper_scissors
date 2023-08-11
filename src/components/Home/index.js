import {Component} from 'react'
import PopUp from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import ScoreView from '../ScoreView'
import GameResultsView from '../GameResultsView'
import './index.css'

import {
  AppContainer,
  GameViewContainer,
  RulesView,
  PopUpView,
  PopUpImage,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Home extends Component {
  state = {
    isShow: true,
    choicesArray: [choicesList[0], choicesList[1]],
    text: 'YOU WON',
    score: 0,
  }

  getPlayerChoices = (item1, item2) => {
    if (item1.id === 'ROCK') {
      switch (item2.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (item1.id === 'PAPER') {
      switch (item2.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (item2.id) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'PAPER':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  checkForResult = id => {
    const {score} = this.state
    const choice2 = choicesList[Math.floor(Math.random() * choicesList.length)]
    const choice1 = choicesList.filter(eachValue => eachValue.id === id)
    // console.log(choice1, choice2)
    const result = this.getPlayerChoices(choice1[0], choice2)
    console.log(result)
    let newScore = score
    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }
    this.setState({
      score: newScore,
      isShow: false,
      text: result,
      choicesArray: [choice1[0], choice2],
    })
  }

  restartGame = () => this.setState({isShow: true})

  render() {
    const {isShow, score, text, choicesArray} = this.state
    // console.log(choicesArray)

    return (
      <AppContainer>
        <GameViewContainer>
          <ScoreView score={score} />
          <GameResultsView
            checkForResult={this.checkForResult}
            choicesList={choicesList}
            score={score}
            choiceArray={choicesArray}
            text={text}
            isShow={isShow}
            restartGame={this.restartGame}
          />
          <RulesView>
            <PopUp
              modal
              trigger={
                <button className="trigger-button" type="button">
                  Rules
                </button>
              }
            >
              {close => (
                <PopUpView>
                  <button
                    type="button"
                    className="trigger-button-close"
                    onClick={() => close()}
                  >
                    <RiCloseLine />
                  </button>
                  <PopUpImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </PopUpView>
              )}
            </PopUp>
          </RulesView>
        </GameViewContainer>
      </AppContainer>
    )
  }
}

export default Home
