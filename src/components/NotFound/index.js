import {
  NotFoundContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'
import Header from '../Header'
import Sidebar from '../Sidebar'
import DarkModeContext from '../../context/DarkModeContext'

const NotFound = () => (
  <DarkModeContext.Consumer>
    {value => {
      const {isDarkMode} = value
      return (
        <>
          <Header />
          <>
            <Sidebar />
            <NotFoundContainer isDarkMode={isDarkMode}>
              <NotFoundImg
                src={
                  isDarkMode
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not found"
              />
              <NotFoundHeading isDarkMode={isDarkMode}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundDescription isDarkMode={isDarkMode}>
                We are sorry, the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundContainer>
          </>
        </>
      )
    }}
  </DarkModeContext.Consumer>
)

export default NotFound
