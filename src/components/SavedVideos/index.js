import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import {
  SavedVideosContainer,
  SuccessViewContainer,
  SavedVideosHeader,
  SavedVideosLogoContainer,
  SavedVideosHeading,
  FailureViewContainer,
  VideosContainer,
  FailureViewImageContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewDescription,
} from './styledComponents'
import SavedVideoItem from '../SavedVideoItem'
import Sidebar from '../Sidebar'
import DarkMode from '../../context/DarkModeContext'

const SavedVideos = () => {
  const renderSuccessView = (isDarkMode, savedVideos) => (
    <SuccessViewContainer isDarkMode={isDarkMode}>
      <SavedVideosHeader isDarkMode={isDarkMode}>
        <SavedVideosLogoContainer isDarkMode={isDarkMode}>
          <HiFire style={{color: '#ff0000', fontSize: '2rem'}} />
        </SavedVideosLogoContainer>
        <SavedVideosHeading isDarkMode={isDarkMode}>
          Saved Videos
        </SavedVideosHeading>
      </SavedVideosHeader>
      <VideosContainer>
        {savedVideos.map(video => (
          <SavedVideoItem key={video.id} videoDetails={video} />
        ))}
      </VideosContainer>
    </SuccessViewContainer>
  )

  const renderNoVideosView = isDarkMode => (
    <FailureViewContainer isDarkMode={isDarkMode}>
      <FailureViewImageContainer>
        <FailureViewImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
          alt="no saved videos"
        />
      </FailureViewImageContainer>
      <FailureViewHeading isDarkMode={isDarkMode}>
        No saved videos found
      </FailureViewHeading>
      <FailureViewDescription isDarkMode={isDarkMode}>
        You can save your videos while watching them
      </FailureViewDescription>
    </FailureViewContainer>
  )

  return (
    <DarkMode.Consumer>
      {value => {
        const {isDarkMode, savedVideos} = value
        return (
          <>
            <Header />
            <>
              <Sidebar />
              <SavedVideosContainer
                isDarkMode={isDarkMode}
                data-testid="savedVideos"
              >
                {savedVideos.length > 0
                  ? renderSuccessView(isDarkMode, savedVideos)
                  : renderNoVideosView(isDarkMode)}
              </SavedVideosContainer>
            </>
          </>
        )
      }}
    </DarkMode.Consumer>
  )
}

export default SavedVideos
