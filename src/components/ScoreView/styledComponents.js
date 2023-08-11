import styled from 'styled-components'

export const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid #ffffff;
  border-radius: 10px;
  width: 60%;
  height: 140px;
  padding: 20px;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`
export const ScoreHeading = styled.h1`
  color: #ffffff;
  font-size: 20px;
`
export const ScoreCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 5px;
  width: 150px;
  height: 100px;
  @media screen and (max-width: 768px) {
    width: 100px;
  }
`
export const ScoreName = styled.p`
  color: #223a5f;
  font-size: 20px;
  margin-bottom: 0;
`
export const ScoreValue = styled.p`
  color: #223a5f;
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: 600;
  margin-top: 0;
`
