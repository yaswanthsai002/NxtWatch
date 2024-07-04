import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 85%;
  margin: 75px 0 0 15%;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    margin-left: 20%;
    width: 80%;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    margin-left: 0;
    padding: 0 1rem;
  }
`

export const NotFoundImg = styled.img`
  width: 500px;
  object-fit: contain;

  @media screen and (max-width: 768px) {
    width: 300px;
  }
`

export const NotFoundHeading = styled.h1`
  font-weight: normal;
  color: ${props => (!props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
`

export const NotFoundDescription = styled.p`
  color: ${props => (!props.isDarkMode ? '#0f0f0f' : '#94a3b8')};
`
