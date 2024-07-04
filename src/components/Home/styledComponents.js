import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;
  width: 85%;
  margin: 75px 0 0 15%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  padding: 1rem;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
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
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
`
export const BannerHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`

export const CloseBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
`

export const BannerBody = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
`
export const LogoAndDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
`

export const WebsiteLogo = styled.img`
  width: 150px;
  object-fit: contain;
`
export const PremiumPlansDescription = styled.p`
  font-size: 1.125rem;
  color: #1e293b;
`
export const GetItNowBtn = styled.button`
  border: 2px solid #1e293b;
  background: transparent;
  cursor: pointer;
  color: #1e293b;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
`

export const VideoSearchInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: flex-start;
  width: 500px;
  @media screen and (max-width: 767px) {
    width: 400px;
  }

  @media screen and (max-width: 425px) {
    width: 300px;
  }
`
export const SearchInput = styled.input`
  outline: none;
  padding: 0.5rem 1rem;
  width: 85%;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  border: 2px solid ${props => (!props.isDarkMode ? '#cccccc' : '#313031')};
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
  color: ${props => (!props.isDarkMode ? '#181818' : '#cccccc')};
  @media screen and (max-width: 767px) {
    width: 80%;
  }

  @media screen and (max-width: 425px) {
    width: 75%;
  }
`
export const SearchButton = styled.button`
  width: 15%;
  padding: 0.5rem 1rem;
  outline: none;
  background-color: #f9f9f9;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border: 2px solid ${props => (!props.isDarkMode ? '#cccccc' : '#313031')};
  color: ${props => (!props.isDarkMode ? '#181818' : '#cccccc')};
  background-color: ${props => (props.isDarkMode ? '#313031' : '#f9f9f9')};

  @media screen and (max-width: 767px) {
    width: 20%;
  }

  @media screen and (max-width: 425px) {
    width: 25%;
  }
`

export const VideosContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`

export const NotFoundViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-center;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
`

export const NotFoundImageContainer = styled.div``

export const NotFoundImage = styled.img`
  width: 500px;
  object-fit: contain;
`
export const NotFoundHeading = styled.h1`
  font-weight: 500;
  color: ${props => (!props.isDarkMode ? '#181818' : '#f9f9f9')};
`
export const NotFoundDescription = styled.p`
  font-size: 1.25rem;
  color: ${props => (!props.isDarkMode ? '#181818' : '#94a3b8')};
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
export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
`

export const FailureViewImageContainer = styled.div``

export const FailureViewImage = styled.img`
  width: 400px;
  object-fit: contain;
`
export const FailureViewHeading = styled.h1`
  font-weight: 500;
  color: ${props => (!props.isDarkMode ? '#1e293b' : '#f9f9f9')};
`
export const FailureViewDescription = styled.p`
  font-size: 1.25rem;
  color: ${props => (!props.isDarkMode ? '#7c8b9f' : '#94a3b8')};
`
