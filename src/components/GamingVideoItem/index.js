import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import DarkModeContext from '../../context/DarkModeContext'
import {
  VideoItemContainer,
  ThumbnailContainer,
  Thumbnail,
  VideoDetailsContainer,
  DetailsContainer,
  VideoTitle,
  ViewsContainer,
  Views,
} from './styledComponents'

const GamingVideoItem = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails
  return (
    <DarkModeContext.Consumer>
      {value => {
        const {isDarkMode, setActiveTab} = value
        return (
          <Link
            to={`/videos/${id}`}
            className="gaming-video-item-link"
            onClick={() => setActiveTab('')}
          >
            <VideoItemContainer isDarkMode={isDarkMode}>
              <ThumbnailContainer>
                <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              </ThumbnailContainer>
              <VideoDetailsContainer isDarkMode={isDarkMode}>
                <DetailsContainer isDarkMode={isDarkMode}>
                  <VideoTitle isDarkMode={isDarkMode}>{title}</VideoTitle>
                  <ViewsContainer>
                    <Views isDarkMode={isDarkMode}>
                      {viewCount} Watching Worldwide
                    </Views>
                  </ViewsContainer>
                </DetailsContainer>
              </VideoDetailsContainer>
            </VideoItemContainer>
          </Link>
        )
      }}
    </DarkModeContext.Consumer>
  )
}

export default GamingVideoItem
