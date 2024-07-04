import React from 'react'

const DarkModeContext = React.createContext({
  isDarkMode: '',
  activeTab: '',
  tabsList: [],
  savedVideos: [],
  addVideo: () => {},
  setActiveTab: () => {},
  toggleDarkMode: () => {},
})

export default DarkModeContext
