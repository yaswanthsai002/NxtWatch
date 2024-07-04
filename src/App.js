import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {HiFire} from 'react-icons/hi'
import {MdPlaylistAdd} from 'react-icons/md'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import DarkModeContext from './context/DarkModeContext'
import './App.css'

const tabsList = [
  {tabId: 'HOME', tabDisplayText: 'Home', tabIcon: AiFillHome, to: '/'},
  {
    tabId: 'TRENDING',
    tabDisplayText: 'Trending',
    tabIcon: HiFire,
    to: '/trending',
  },
  {
    tabId: 'GAMING',
    tabDisplayText: 'Gaming',
    tabIcon: SiYoutubegaming,
    to: '/gaming',
  },
  {
    tabId: 'SAVED',
    tabDisplayText: 'Saved videos',
    tabIcon: MdPlaylistAdd,
    to: '/saved-videos',
  },
]

export default class App extends Component {
  state = {
    isDarkMode: false,
    activeTab: tabsList[0].tabId,
    savedVideos: [],
  }

  toggleDarkMode = () =>
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))

  setActiveTab = id => this.setState({activeTab: id})

  addVideo = videoDetails => {
    this.setState(prevState => {
      const {savedVideos} = prevState
      const foundVideo = savedVideos.find(video => video.id === videoDetails.id)
      if (foundVideo) {
        return {
          savedVideos: savedVideos.filter(
            video => video.id !== videoDetails.id,
          ),
        }
      }
      return {savedVideos: [...savedVideos, videoDetails]}
    })
  }

  render() {
    const {isDarkMode, activeTab, savedVideos} = this.state
    return (
      <DarkModeContext.Provider
        value={{
          isDarkMode,
          activeTab,
          tabsList,
          savedVideos,
          addVideo: this.addVideo,
          toggleDarkMode: this.toggleDarkMode,
          setActiveTab: this.setActiveTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </DarkModeContext.Provider>
    )
  }
}
