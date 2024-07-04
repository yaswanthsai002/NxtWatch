import {Link} from 'react-router-dom'
import {
  SidebarContainer,
  TabsList,
  TabListItem,
  TabListItemText,
  ContactUs,
  ContactUsHeading,
  SocialIconsContainer,
  SocialIcon,
  ContactUsDescription,
} from './styledComponents'
import DarkModeContext from '../../context/DarkModeContext'

const getIconColor = (isActive, isDarkMode) => {
  if (isActive) {
    return '#ff0000'
  }
  return isDarkMode ? '#ffffff' : '#000000'
}

const Sidebar = () => (
  <DarkModeContext.Consumer>
    {value => {
      const {isDarkMode, setActiveTab, tabsList, activeTab} = value
      return (
        <SidebarContainer isDarkMode={isDarkMode}>
          <TabsList>
            {tabsList.map(tabItem => {
              const isActive = activeTab === tabItem.tabId
              return (
                <Link
                  to={tabItem.to}
                  key={tabItem.tabId}
                  onClick={() => setActiveTab(tabItem.tabId)}
                  style={{width: '100%'}}
                >
                  <TabListItem isDarkMode={isDarkMode} isActive={isActive}>
                    <tabItem.tabIcon
                      style={{
                        color: getIconColor(isActive, isDarkMode),
                      }}
                    />
                    <TabListItemText
                      isActive={isActive}
                      isDarkMode={isDarkMode}
                    >
                      {tabItem.tabDisplayText}
                    </TabListItemText>
                  </TabListItem>
                </Link>
              )
            })}
          </TabsList>
          <ContactUs>
            <ContactUsHeading isDarkMode={isDarkMode}>
              CONTACT US
            </ContactUsHeading>
            <SocialIconsContainer>
              <SocialIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialIconsContainer>
            <ContactUsDescription isDarkMode={isDarkMode}>
              Enjoy! Now to see your channels and recommendations!
            </ContactUsDescription>
          </ContactUs>
        </SidebarContainer>
      )
    }}
  </DarkModeContext.Consumer>
)

export default Sidebar
