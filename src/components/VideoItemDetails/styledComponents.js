import styled from 'styled-components'

const getButtonColor = (isActive, isDarkMode) => {
  if (isDarkMode) {
    return isActive ? '#2563eb' : '#94a3b8'
  }
  return isActive ? '#2563eb' : '#64748b'
}

export const VideoItemDetailsContainer = styled.div`
  height: 100%;
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
  align-items: center;
  gap: 1rem;
  padding: 2rem 0;
  width: 100%;
`

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 75vw;
  height: 600px;

  @media screen and (min-width: 1024px) and (max-width: 1440px) {
    height: 400px;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 75vw;
    height: 400px;
  }

  @media screen and (max-width: 768px) {
    width: 90vw;
    height: 400px;
  }

  @media screen and (max-width: 425px) {
    width: 90vw;
    height: 200px;
  }
`

export const VideoDetailsAndActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 75vw;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`

export const VideoTitle = styled.p`
  font-weight: 500;
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#1e293b')};
`

export const DetailsAndActionBtnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`

export const ViewsAndPublishedAtContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const Views = styled.p`
  color: ${props => (props.isDarkMode ? '#94a3b8' : '#606060')};
  font-size: 0.9rem;
`
export const PublishedAt = styled.p`
  color: ${props => (props.isDarkMode ? '#94a3b8' : '#606060')};
  font-size: 0.9rem;
`

export const ActionBtnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
`

export const LikeBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.25rem;
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
  font-size: 1rem;
  color: ${props => getButtonColor(props.isActive, props.isDarkMode)};
`

export const DislikeBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.25rem;
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
  font-size: 1rem;
  color: ${props => getButtonColor(props.isActive, props.isDarkMode)};
`

export const SaveBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.25rem;
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
  font-size: 1rem;
  color: ${props => getButtonColor(props.isActive, props.isDarkMode)};
`

export const ChannelDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
`

export const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 4rem;
`

export const ProfileImage = styled.img`
  width: 50px;
  border-radius: 50%;
  object-fit: contain;
`

export const NameAndSubscribersAndDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
`

export const NameAndSubscribersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
`

export const ChannelName = styled.p`
  color: #1e293b;
  font-weight: 500;
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#1e293b')};
`

export const SubscribersCount = styled.p`
  font-size: 0.8rem;
  color: ${props => (props.isDarkMode ? '#94a3b8' : '#606060')};
`

export const VideoDescription = styled.p`
  font-size: 0.9rem;
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#1e293b')};
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
