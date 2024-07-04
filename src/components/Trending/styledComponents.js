import styled from 'styled-components'

export const TrendingContainer = styled.div`
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
  }
`

export const LoadingViewContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SuccessViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
`
export const TrendingHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f1f1f1')};
`

export const TrendingLogoContainer = styled.div`
  height: 75px;
  width: 75px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkMode ? ' #0f0f0f' : '#cbd5e1')};
`

export const TrendingHeading = styled.h1`
  color: ${props => (props.isDarkMode ? ' #f8fafc' : '#1e293b')};
`

export const VideosContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  padding: 0 1rem;
`

export const FailureViewContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
`

export const FailureViewImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FailureViewImage = styled.img`
  width: 400px;
  object-fit: contain;

  @media screen and (max-width: 425px) {
    width: 350px;
  }
`
export const FailureViewHeading = styled.h1`
  font-weight: 500;
  color: ${props => (!props.isDarkMode ? '#1e293b' : '#f9f9f9')};

  @media screen and (max-width: 425px) {
    font-size: 1.5rem;
  }
`
export const FailureViewDescription = styled.p`
  font-size: 1.25rem;
  color: ${props => (!props.isDarkMode ? '#7c8b9f' : '#94a3b8')};
  @media screen and (max-width: 425px) {
    font-size: 1.125rem;
  }
`
export const RetryBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #4f46e5;
  color: #f9f9f9;
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 500;
`
