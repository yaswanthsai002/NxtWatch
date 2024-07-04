import styled from 'styled-components'

export const VideoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  flex-grow: 1;
  @media screen and (max-width: 567px) {
    flex-direction: column;
  }
`

export const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 567px) {
    width: 100%;
    height: 500%;
  }
`

export const Thumbnail = styled.img`
  width: 300px;
  height: 400px;

  @media screen and (max-width: 992px) {
    width: 150px;
    height: 200px;
  }
`

export const VideoDetailsContainer = styled.div`
  width: 100%;
  height: 50%;
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
  flex-wrap: wrap;
  gap: 0.5rem;
`

export const VideoTitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#181818')};
`

export const ViewsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const Views = styled.p`
  color: ${props => (props.isDarkMode ? '#475569' : '#606060')};
  font-size: 0.9rem;
`
