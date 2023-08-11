import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #223a5f;
  font-family: 'bree serif';
  min-height: 100vh;
`
export const GameViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`
export const RulesView = styled.div`
  align-self: flex-end;
`
export const PopUpView = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vw;
  background-color: #ffffff;
  justify-content: space-between;
  padding: 10px;
  @media screen and (max-width: 576px) {
    height: 260px;
    width: 100%;
  }
`
export const PopUpImage = styled.img`
  width: 100%;
  height: 90%;
  margin-top: auto;
`
