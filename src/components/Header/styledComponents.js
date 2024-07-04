import styled from 'styled-components'

export const NavBar = styled.header`
  height: 75px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: ${props => (props.isDarkMode ? '#231f20' : '#fff')};
  @media screen and (max-width: 425px) {
    padding: 1rem;
    gap: 0 1rem;
  }
`
export const WebsiteImage = styled.img`
  width: 175px;
  object-fit: contain;

  @media screen and (max-width: 425px) {
    width: 150px;
  }
`
export const NavItemsList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0 1.5rem;

  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const NavItem = styled.li`
  list-style-type: none;
`
export const ModeButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => (props.isDarkMode ? '#fff' : '#231f20')};
  @media screen and (max-width: 425px) {
    font-size: 1.5rem;
  }
`
export const ProfileImg = styled.img`
  width: 2.2rem;
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LogoutBtn = styled.button`
  border: none;
  outline: 2px solid ${props => (props.isDarkMode ? '#fff' : '#3b82f6')};
  cursor: pointer;
  background: transparent;
  color: ${props => (props.isDarkMode ? '#fff' : '#3b82f6')};
  font-size: 1rem;
  font-weight: 500;
  padding: 0.35rem 1.25rem;
  border-radius: 0.25rem;
`
export const MobileNavItemsList = styled.ul`
  display: none;
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0 1.5rem;
  }

  @media screen and (max-width: 425px) {
    gap: 1rem;
  }
`
export const MobileNavItem = styled(NavItem)``

export const MobileLogoutBtn = styled(ModeButton)``

export const LogoutPopupWarpper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LogoutPopupContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#231f20' : '#fff')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  gap: 1rem;
  border-radius: 0.5rem;
`
export const LogoutQuestion = styled.p`
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#3b82f6')};
  font-size: 1rem;
  font-weight: 500;
`
export const ActionBtnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`
export const CancelBtn = styled.button`
  border: 1px solid #94a3b8;
  cursor: pointer;
  color: #94a3b8;
  font-size: 1rem;
  font-weight: 500;
  background-color: transparent;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
`
export const ConfirmBtn = styled.button`
  border: none;
  cursor: pointer;
  color: #fff;
  background-color: #3b82f6;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
`
