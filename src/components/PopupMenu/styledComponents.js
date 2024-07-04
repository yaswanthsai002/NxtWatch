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
  return isDarkMode ? '#7e858e' : '#616e7c'
}

export const MenuContainer = styled.div`
  background-color: ${props => (!props.isDarkMode ? '#fff' : '#231f20')};
  height: 100vh;
  width: 100vw;
  padding: 2rem;
`

export const MenuHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const MenuCloseBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => (props.isDarkMode ? '#fff' : '#231f20')};
`

export const MenuBody = styled.div`
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ToggleMenuBtn = styled.button`
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

export const TabsList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

export const TabListItem = styled.li`
  width: 100%;
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0 0.75rem;
  margin: 0.25rem 0;
  font-size: 1rem;
  padding: 0.5rem 0;
  background-color: ${props =>
    getBackgroundColor(props.isActive, props.isDarkMode)};
  color: ${props => getTextColor(props.isActive, props.isDarkMode)};
`

export const TabText = styled.p`
  color: ${props => getTextColor(props.isActive, props.isDarkMode)};
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
`
