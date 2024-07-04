import styled from 'styled-components'

export const VideoItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 567px) {
    flex-direction: column;
  }
`

export const ThumbnailContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 567px) {
    width: 100%;
    height: 500%;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const VideoDetailsContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
  @media screen and (max-width: 567px) {
    width: 100%;
    height: 500%;
  }
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
`

export const ProfileImageContainer = styled.div`
  display: none;
  @media screen and (max-width: 567px) {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
`

export const ProfileImage = styled.img`
  width: 40px;
  border-radius: 50%;
  object-fit: contain;
`

export const VideoTitle = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#181818')};
`

export const ChannelName = styled.p`
  color: ${props => (props.isDarkMode ? '#475569' : '#606060')};
  font-size: 0.9rem;
`

export const ViewsAndPublishedAtContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const Views = styled.p`
  color: ${props => (props.isDarkMode ? '#475569' : '#606060')};
  font-size: 0.9rem;
`

export const PublishedAt = styled.p`
  color: ${props => (props.isDarkMode ? '#475569' : '#606060')};
  font-size: 0.9rem;
`
