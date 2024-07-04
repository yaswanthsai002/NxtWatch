import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import DarkModeContext from '../../context/DarkModeContext'
import {
  VideoItemContainer,
  ThumbnailContainer,
  Thumbnail,
  VideoDetailsContainer,
  ProfileImageContainer,
  ProfileImage,
  DetailsContainer,
  ChannelName,
  VideoTitle,
  ViewsAndPublishedAtContainer,
  Views,
  PublishedAt,
} from './styledComponents'

const HomeVideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    channelName,
    title,
    viewCount,
    publishedAt,
    profileImageUrl,
    thumbnailUrl,
  } = videoDetails
  return (
    <DarkModeContext.Consumer>
      {value => {
        const {isDarkMode, setActiveTab} = value
        return (
          <Link
            to={`/videos/${id}`}
            className="video-item-link"
            onClick={() => setActiveTab('')}
          >
            <VideoItemContainer isDarkMode={isDarkMode}>
              <ThumbnailContainer>
                <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              </ThumbnailContainer>
              <VideoDetailsContainer isDarkMode={isDarkMode}>
                <ProfileImageContainer>
                  <ProfileImage src={profileImageUrl} alt="channel logo" />
                </ProfileImageContainer>
                <DetailsContainer isDarkMode={isDarkMode}>
                  <VideoTitle isDarkMode={isDarkMode}>{title}</VideoTitle>
                  <ChannelName isDarkMode={isDarkMode}>
                    {channelName}
                  </ChannelName>
                  <ViewsAndPublishedAtContainer>
                    <Views isDarkMode={isDarkMode}>{viewCount}</Views>
                    <BsDot
                      style={{
                        color: isDarkMode ? '#475569' : '#606060',
                        fontSize: '1.25rem',
                      }}
                    />
                    <PublishedAt isDarkMode={isDarkMode}>
                      {publishedAt}
                    </PublishedAt>
                  </ViewsAndPublishedAtContainer>
                </DetailsContainer>
              </VideoDetailsContainer>
            </VideoItemContainer>
          </Link>
        )
      }}
    </DarkModeContext.Consumer>
  )
}

export default HomeVideoItem
