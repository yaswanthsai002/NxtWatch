import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import {
  GamingContainer,
  LoadingViewContainer,
  SuccessViewContainer,
  GamingHeader,
  GamingLogoContainer,
  GamingHeading,
  FailureViewContainer,
  VideosContainer,
  FailureViewImageContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewDescription,
  RetryBtn,
} from './styledComponents'
import GamingVideoItem from '../GamingVideoItem'
import Sidebar from '../Sidebar'
import DarkMode from '../../context/DarkModeContext'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

export default class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videos: [],
  }

  componentDidMount() {
    this.fetchVideos()
  }

  fetchVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const fetchApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const fetchOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    try {
      const response = await fetch(fetchApiUrl, fetchOptions)
      if (response.ok) {
        const jsonResponse = await response.json()
        const {videos} = jsonResponse
        const formattedVideos = videos.map(video => ({
          id: video.id,
          title: video.title,
          thumbnailUrl: video.thumbnail_url,
          viewCount: video.view_count,
        }))
        this.setState({
          videos: formattedVideos,
          apiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({apiStatus: apiStatusConstants.failure})
      }
    } catch (error) {
      this.setState({apiStatus: apiStatusConstants.failure})
      console.log('Error in fetching videos', error)
    }
  }

  renderLoadingView = isDarkMode => (
    <LoadingViewContainer data-testid="loader">
      <Loader
        type="ThreeDots"
        color={isDarkMode ? '#fff' : '#000'}
        height="50"
        width="50"
      />
    </LoadingViewContainer>
  )

  renderSuccessView = isDarkMode => {
    const {videos} = this.state
    return (
      <SuccessViewContainer isDarkMode={isDarkMode}>
        <GamingHeader isDarkMode={isDarkMode}>
          <GamingLogoContainer isDarkMode={isDarkMode}>
            <SiYoutubegaming style={{color: '#ff0000', fontSize: '2rem'}} />
          </GamingLogoContainer>
          <GamingHeading isDarkMode={isDarkMode}>Gaming</GamingHeading>
        </GamingHeader>
        <VideosContainer>
          {videos.map(video => (
            <GamingVideoItem key={video.id} videoDetails={video} />
          ))}
        </VideosContainer>
      </SuccessViewContainer>
    )
  }

  renderFailureView = isDarkMode => (
    <FailureViewContainer isDarkMode={isDarkMode}>
      <FailureViewImageContainer>
        <FailureViewImage
          src={
            !isDarkMode
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          }
          alt="failure view"
        />
      </FailureViewImageContainer>
      <FailureViewHeading isDarkMode={isDarkMode}>
        Oops! Something Went Wrong
      </FailureViewHeading>
      <FailureViewDescription isDarkMode={isDarkMode}>
        We are having some trouble to complete your request.
      </FailureViewDescription>
      <FailureViewDescription isDarkMode={isDarkMode}>
        Please try again.
      </FailureViewDescription>
      <RetryBtn
        type="button"
        onClick={this.fetchVideos}
        isDarkMode={isDarkMode}
      >
        Retry
      </RetryBtn>
    </FailureViewContainer>
  )

  renderContent = isDarkMode => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.loading:
        return this.renderLoadingView(isDarkMode)
      case apiStatusConstants.success:
        return this.renderSuccessView(isDarkMode)
      case apiStatusConstants.failure:
        return this.renderFailureView(isDarkMode)
      default:
        return null
    }
  }

  render() {
    return (
      <DarkMode.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <>
              <Header />
              <>
                <Sidebar />
                <GamingContainer isDarkMode={isDarkMode} data-testid="gaming">
                  {this.renderContent(isDarkMode)}
                </GamingContainer>
              </>
            </>
          )
        }}
      </DarkMode.Consumer>
    )
  }
}
