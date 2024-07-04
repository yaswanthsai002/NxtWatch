import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {Link, withRouter} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {IoSunnyOutline} from 'react-icons/io5'
import {FiLogOut} from 'react-icons/fi'
import DarkModeContext from '../../context/DarkModeContext'
import PopupMenu from '../PopupMenu'
import {
  NavBar,
  WebsiteImage,
  NavItemsList,
  NavItem,
  ModeButton,
  ProfileImg,
  LogoutBtn,
  MobileNavItemsList,
  MobileNavItem,
  MobileLogoutBtn,
  LogoutPopupWarpper,
  LogoutPopupContainer,
  LogoutQuestion,
  ActionBtnsContainer,
  CancelBtn,
  ConfirmBtn,
} from './styledComponents'

const Header = props => {
  const handleLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <DarkModeContext.Consumer>
      {value => {
        const {isDarkMode, toggleDarkMode} = value
        return (
          <NavBar isDarkMode={isDarkMode}>
            <Link to="/">
              <WebsiteImage
                src={
                  isDarkMode
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
              />
            </Link>
            <NavItemsList>
              <NavItem>
                <ModeButton
                  data-testid="theme"
                  type="button"
                  onClick={toggleDarkMode}
                  isDarkMode={isDarkMode}
                >
                  {!isDarkMode ? <FaMoon /> : <IoSunnyOutline />}
                </ModeButton>
              </NavItem>
              <NavItem>
                <ProfileImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </NavItem>
              <NavItem>
                <Popup
                  modal
                  trigger={
                    <LogoutBtn type="button" isDarkMode={isDarkMode}>
                      Logout
                    </LogoutBtn>
                  }
                >
                  {close => (
                    <LogoutPopupWarpper>
                      <LogoutPopupContainer isDarkMode={isDarkMode}>
                        <LogoutQuestion isDarkMode={isDarkMode}>
                          Are you sure, you want to logout
                        </LogoutQuestion>
                        <ActionBtnsContainer>
                          <CancelBtn
                            type="btn"
                            onClick={close}
                            isDarkMode={isDarkMode}
                          >
                            Cancel
                          </CancelBtn>
                          <ConfirmBtn type="btn" onClick={handleLogout}>
                            Confirm
                          </ConfirmBtn>
                        </ActionBtnsContainer>
                      </LogoutPopupContainer>
                    </LogoutPopupWarpper>
                  )}
                </Popup>
              </NavItem>
            </NavItemsList>
            <MobileNavItemsList>
              <MobileNavItem>
                <ModeButton
                  data-testid="theme"
                  type="button"
                  onClick={toggleDarkMode}
                  isDarkMode={isDarkMode}
                >
                  {!isDarkMode ? <FaMoon /> : <IoSunnyOutline />}
                </ModeButton>
              </MobileNavItem>
              <MobileNavItem>
                <PopupMenu />
              </MobileNavItem>
              <MobileNavItem>
                <MobileLogoutBtn
                  type="button"
                  onClick={handleLogout}
                  isDarkMode={isDarkMode}
                >
                  <FiLogOut />
                </MobileLogoutBtn>
              </MobileNavItem>
            </MobileNavItemsList>
          </NavBar>
        )
      }}
    </DarkModeContext.Consumer>
  )
}

export default withRouter(Header)
