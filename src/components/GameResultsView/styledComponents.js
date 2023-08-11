import styled from 'styled-components'

export const GameResultsViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 400px;
  margin-top: 70px;
`

export const GameButton = styled.button`
  background-color: transparent;
  outline: none;
  border: 0;
  cursor: pointer;
`

export const GameImage = styled.img`
  width: 150px;
  height: 100px;
`
export const ChoicesViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  color: #ffffff;
  font-family: 'roboto';
`

export const ChoicesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`
export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const OptionsHeading = styled.p`
  font-size: 25px;
  font-weight: 600;
`
export const ResultHeading = styled.p`
  font-size: 28px;
  font-weight: 600;
`
export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  border: 0;
  outline: none;
  color: #223a5f;
  font-size: 17px;
  width: 150px;
  height: 30px;
  border-radius: 10px;
  font-weight: 500;
`
