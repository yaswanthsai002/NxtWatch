import React, {Component} from 'react'
import Cookies from 'js-cookie'
import {IoClose, IoSearch} from 'react-icons/io5'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import {
  HomeContainer,
  LoadingViewContainer,
  SuccessViewContainer,
  FailureViewContainer,
  NotFoundViewContainer,
  BannerContainer,
  BannerHeader,
  CloseBtn,
  BannerBody,
  LogoAndDescriptionContainer,
  WebsiteLogo,
  PremiumPlansDescription,
  GetItNowBtn,
  VideoSearchInputContainer,
  SearchInput,
  SearchButton,
  VideosContainer,
  NotFoundImageContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
  RetryBtn,
  FailureViewImageContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewDescription,
} from './styledComponents'
import HomeVideoItem from '../HomeVideoItem'
import Sidebar from '../Sidebar'
import DarkMode from '../../context/DarkModeContext'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
  notFound: 'NOT_FOUND',
}

export default class Home extends Component {
  state = {
    showBanner: true,
    searchValue: '',
    apiStatus: apiStatusConstants.initial,
    videos: [],
  }

  componentDidMount() {
    this.fetchVideos()
  }

  fetchVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const {searchValue} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const fetchApiUrl = `https://apis.ccbp.in/videos/all?search=${searchValue}`
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
        if (videos.length > 0) {
          const formattedVideos = videos.map(video => ({
            id: video.id,
            channelName: video.channel.name,
            profileImageUrl: video.channel.profile_image_url,
            publishedAt: video.published_at,
            thumbnailUrl: video.thumbnail_url,
            title: video.title,
            viewCount: video.view_count,
          }))
          this.setState({
            videos: formattedVideos,
            apiStatus: apiStatusConstants.success,
          })
        } else {
          this.setState({apiStatus: apiStatusConstants.notFound})
        }
      } else {
        this.setState({apiStatus: apiStatusConstants.failure})
      }
    } catch (error) {
      this.setState({apiStatus: apiStatusConstants.failure})
      console.log('Error in fetching videos', error)
    }
  }

  handleClose = () => this.setState({showBanner: false})

  setSearchValue = event => this.setState({searchValue: event.target.value})

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

  renderSuccessView = () => {
    const {videos} = this.state
    return (
      <SuccessViewContainer>
        <VideosContainer>
          {videos.map(video => (
            <HomeVideoItem key={video.id} videoDetails={video} />
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
            isDarkMode
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

  renderNotFoundView = isDarkMode => (
    <NotFoundViewContainer isDarkMode={isDarkMode}>
      <NotFoundImageContainer>
        <NotFoundImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
      </NotFoundImageContainer>
      <NotFoundHeading isDarkMode={isDarkMode}>
        No Search results found
      </NotFoundHeading>
      <NotFoundDescription isDarkMode={isDarkMode}>
        Try different key words or remove search filter
      </NotFoundDescription>
      <RetryBtn
        type="button"
        onClick={this.fetchVideos}
        isDarkMode={isDarkMode}
      >
        Retry
      </RetryBtn>
    </NotFoundViewContainer>
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
      case apiStatusConstants.notFound:
        return this.renderNotFoundView(isDarkMode)
      default:
        return null
    }
  }

  render() {
    const {showBanner} = this.state
    return (
      <DarkMode.Consumer>
        {value => {
          const {isDarkMode, searchValue} = value
          console.log(showBanner)
          return (
            <>
              <Header />
              <>
                <Sidebar />
                <HomeContainer isDarkMode={isDarkMode} data-testid="home">
                  {showBanner && (
                    <BannerContainer data-testid="banner">
                      <BannerHeader>
                        <CloseBtn type="button" data-testid="close">
                          <IoClose
                            onClick={this.handleClose}
                            style={{
                              cursor: 'pointer',
                              alignSelf: 'flex-end',
                              fontSize: '1.5rem',
                            }}
                          />
                        </CloseBtn>
                      </BannerHeader>
                      <BannerBody>
                        <LogoAndDescriptionContainer>
                          <WebsiteLogo
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                            alt="nxt watch logo"
                          />
                          <PremiumPlansDescription>
                            Buy Nxt Watch Premium prepaid plans with UPI
                          </PremiumPlansDescription>
                        </LogoAndDescriptionContainer>
                        <GetItNowBtn type="button">GET IT NOW</GetItNowBtn>
                      </BannerBody>
                    </BannerContainer>
                  )}
                  <VideoSearchInputContainer>
                    <SearchInput
                      name="search input"
                      id="searchInput"
                      value={searchValue}
                      type="search"
                      placeholder="Search"
                      onChange={this.setSearchValue}
                      isDarkMode={isDarkMode}
                    />
                    <SearchButton
                      type="button"
                      data-testid="searchButton"
                      onClick={this.fetchVideos}
                      isDarkMode={isDarkMode}
                    >
                      <IoSearch />
                    </SearchButton>
                  </VideoSearchInputContainer>
                  {this.renderContent(isDarkMode)}
                </HomeContainer>
              </>
            </>
          )
        }}
      </DarkMode.Consumer>
    )
  }
}
