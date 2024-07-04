import styled from 'styled-components'

export const VideoItemContainer = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) and (max-width: 820px) {
    width: 280px;
  }
`
export const ThumbnailContainer = styled.div`
  width: 100%;
  height: 60%;
`
export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`
export const VideoDetailsContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`
export const ProfileImageContainer = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`
export const ProfileImage = styled.img`
  width: 40px;
  border-radius: 50%;
  object-fit: contain;
`
export const DetailsContainer = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
`
export const ChannelName = styled.p`
  color: ${props => (props.isDarkMode ? '#475569' : '#606060')};
  font-size: 0.9rem;
  font-weight: 500;
`

export const VideoTitle = styled.p`
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#181818')};
`

export const ViewsAndPublishedAtContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const Views = styled.p`
  color: ${props => (props.isDarkMode ? '#475569' : '#94a3b8')};
  font-size: 0.9rem;
  font-weight: 500;
`
export const PublishedAt = styled.p`
  color: ${props => (props.isDarkMode ? '#475569' : '#606060')};
  font-size: 0.9rem;
  font-weight: 500;
`
