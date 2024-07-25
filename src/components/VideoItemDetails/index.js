import React, {Component} from 'react'
import Cookies from 'js-cookie'
import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Sidebar from '../Sidebar'
import DarkMode from '../../context/DarkModeContext'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {
  VideoItemDetailsContainer,
  LoadingViewContainer,
  SuccessViewContainer,
  FailureViewContainer,
  VideoContainer,
  DetailsAndActionBtnsContainer,
  VideoTitle,
  VideoDetailsAndActionsContainer,
  ViewsAndPublishedAtContainer,
  Views,
  PublishedAt,
  ActionBtnsContainer,
  LikeBtn,
  DislikeBtn,
  SaveBtn,
  ChannelDetails,
  ProfileImageContainer,
  ProfileImage,
  NameAndSubscribersAndDescriptionContainer,
  NameAndSubscribersContainer,
  ChannelName,
  SubscribersCount,
  VideoDescription,
  FailureViewImageContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewDescription,
  RetryBtn,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

export default class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.fetchVideos()
  }

  fetchVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const fetchApiUrl = `https://apis.ccbp.in/videos/${id}`
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
        const {video_details} = jsonResponse
        const formattedVideoDetails = {
          id: video_details.id,
          channelName: video_details.channel.name,
          profileImageUrl: video_details.channel.profile_image_url,
          publishedAt: video_details.published_at,
          thumbnailUrl: video_details.thumbnail_url,
          title: video_details.title,
          viewCount: video_details.view_count,
          videoUrl: video_details.video_url,
          subscriberCount: video_details.channel.subscriber_count,
          description: video_details.description,
        }
        this.setState({
          videoDetails: formattedVideoDetails,
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

  handleLike = () =>
    this.setState(prevState => ({
      isLiked: prevState.isDisliked ? true : !prevState.isLiked,
      isDisliked: prevState.isDisliked ? false : prevState.isDisliked,
    }))

  handleDisLike = () =>
    this.setState(prevState => ({
      isDisliked: prevState.isLiked ? true : !prevState.isDisliked,
      isLiked: prevState.isLiked ? false : prevState.isLiked,
    }))

  handleSaved = () =>
    this.setState(prevState => ({isSaved: !prevState.isSaved}))

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

  renderSuccessView = (isDarkMode, addVideo) => {
    const {videoDetails, isLiked, isDisliked, isSaved} = this.state
    const {
      title,
      videoUrl,
      channelName,
      profileImageUrl,
      subscriberCount,
      viewCount,
      publishedAt,
      description,
    } = videoDetails
    return (
      <SuccessViewContainer isDarkMode={isDarkMode}>
        <VideoContainer>
          <ReactPlayer url={videoUrl} width="100%" height="100%" />
        </VideoContainer>
        <VideoDetailsAndActionsContainer>
          <VideoTitle isDarkMode={isDarkMode}>{title}</VideoTitle>
          <DetailsAndActionBtnsContainer>
            <ViewsAndPublishedAtContainer>
              <Views isDarkMode={isDarkMode}>{viewCount} views</Views>
              <BsDot
                style={{
                  color: isDarkMode ? '#94a3b8' : '#606060',
                  fontSize: '1.25rem',
                }}
              />
              <PublishedAt isDarkMode={isDarkMode}>{publishedAt}</PublishedAt>
            </ViewsAndPublishedAtContainer>
            <ActionBtnsContainer>
              <LikeBtn
                type="button"
                onClick={this.handleLike}
                isDarkMode={isDarkMode}
                isActive={isLiked}
              >
                <BiLike /> Like
              </LikeBtn>
              <DislikeBtn
                type="button"
                onClick={this.handleDisLike}
                isDarkMode={isDarkMode}
                isActive={isDisliked}
              >
                <BiDislike /> Dislike
              </DislikeBtn>
              <SaveBtn
                type="button"
                onClick={() => {
                  this.handleSaved()
                  addVideo(videoDetails)
                }}
                isDarkMode={isDarkMode}
                isActive={isSaved}
              >
                <MdPlaylistAdd /> {isSaved ? 'Saved' : 'Save'}
              </SaveBtn>
            </ActionBtnsContainer>
          </DetailsAndActionBtnsContainer>
          <hr
            style={{
              width: '100%',
              border: `1px solid ${isDarkMode ? '#475569' : '#181818'}`,
            }}
          />
          <ChannelDetails>
            <ProfileImageContainer>
              <ProfileImage src={profileImageUrl} alt="channel logo" />
            </ProfileImageContainer>
            <NameAndSubscribersAndDescriptionContainer>
              <NameAndSubscribersContainer>
                <ChannelName isDarkMode={isDarkMode}>{channelName}</ChannelName>
                <SubscribersCount isDarkMode={isDarkMode}>
                  {subscriberCount} subscribers
                </SubscribersCount>
              </NameAndSubscribersContainer>
              <VideoDescription isDarkMode={isDarkMode}>
                {description}
              </VideoDescription>
            </NameAndSubscribersAndDescriptionContainer>
          </ChannelDetails>
        </VideoDetailsAndActionsContainer>
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
        We are having some trouble to complete your request. Please try again.
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

  renderContent = (isDarkMode, addVideo) => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.loading:
        return this.renderLoadingView(isDarkMode)
      case apiStatusConstants.success:
        return this.renderSuccessView(isDarkMode, addVideo)
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
          const {isDarkMode, addVideo} = value
          return (
            <>
              <Header />
              <>
                <Sidebar />
                <VideoItemDetailsContainer
                  isDarkMode={isDarkMode}
                  data-testid="videoItemDetails"
                >
                  {this.renderContent(isDarkMode, addVideo)}
                </VideoItemDetailsContainer>
              </>
            </>
          )
        }}
      </DarkMode.Consumer>
    )
  }
}
