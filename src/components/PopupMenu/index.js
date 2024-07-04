import {FaBars} from 'react-icons/fa'
import {IoClose} from 'react-icons/io5'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import DarkModeContext from '../../context/DarkModeContext'

import {
  MenuContainer,
  MenuHeader,
  MenuCloseBtn,
  MenuBody,
  ToggleMenuBtn,
  TabsList,
  TabListItem,
  TabText,
} from './styledComponents'

const getIconColor = (isActive, isDarkMode) => {
  if (isActive) {
    return '#ff0000'
  }
  return isDarkMode ? '#ffffff' : '#000000'
}

const PopupMenu = () => (
  <DarkModeContext.Consumer>
    {value => {
      const {isDarkMode, tabsList, setActiveTab, activeTab} = value
      return (
        <Popup
          modal
          trigger={
            <ToggleMenuBtn isDarkMode={isDarkMode}>
              <FaBars />
            </ToggleMenuBtn>
          }
        >
          {close => (
            <MenuContainer isDarkMode={isDarkMode}>
              <MenuHeader>
                <MenuCloseBtn onClick={close} isDarkMode={isDarkMode}>
                  <IoClose />
                </MenuCloseBtn>
              </MenuHeader>
              <MenuBody>
                <TabsList>
                  {tabsList.map(tabItem => {
                    const isActive = activeTab === tabItem.tabId
                    const handleLinkClick = () => {
                      setActiveTab(tabItem.tabId)
                      close()
                    }
                    return (
                      <Link
                        key={tabItem.tabId}
                        to={tabItem.to}
                        onClick={handleLinkClick}
                        className="nav-link"
                      >
                        <TabListItem
                          isActive={isActive}
                          isDarkMode={isDarkMode}
                        >
                          <tabItem.tabIcon
                            style={{
                              color: getIconColor(isActive, isDarkMode),
                            }}
                          />
                          <TabText isActive={isActive} isDarkMode={isDarkMode}>
                            {tabItem.tabDisplayText}
                          </TabText>
                        </TabListItem>
                      </Link>
                    )
                  })}
                </TabsList>
              </MenuBody>
            </MenuContainer>
          )}
        </Popup>
      )
    }}
  </DarkModeContext.Consumer>
)

export default PopupMenu
