import styled from 'styled-components'

const getBackgroundColor = (isActive, isDarkMode) => {
  if (isActive) {
    return isDarkMode ? '#909090' : '#cccccc'
  }
  return 'transparent'
}

const getTextColor = (isActive, isDarkMode) => {
  if (isActive) {
    return isDarkMode ? '#fff' : '#1e293b'
  }
  return isDarkMode ? '#fff' : '#616e7c'
}

export const SidebarContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#231f20' : '#fff')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  top: 75px;
  left: 0;
  width: 15%;
  height: 100%;
  padding-bottom: 5rem;
  position: fixed;
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 20%;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const TabsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-betweem;
  align-items: flex-start;
  width: 100%;
  gap: 1rem 0;
`

export const TabListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0 0.75rem;
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
  background-color: ${props =>
    getBackgroundColor(props.isActive, props.isDarkMode)};
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
`

export const TabListItemText = styled.p`
  color: ${props => getTextColor(props.isActive, props.isDarkMode)};
  font-weight: ${props => (props.isActive ? 'bold' : '500')};
`

export const ContactUs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-betweem;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1rem;
`

export const ContactUsHeading = styled.p`
  font-size: 1.125rem;
  font-weight: bold;
  color: ${props => (props.isDarkMode ? '#fff' : '#1e293b')};

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`

export const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0 0.5rem;
`

export const SocialIcon = styled.img`
  width: 30px;
  object-fit: contain;
`

export const ContactUsDescription = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${props => (props.isDarkMode ? '#fff' : '#1e293b')};
`
