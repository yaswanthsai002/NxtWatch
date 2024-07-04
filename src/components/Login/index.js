import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import {
  LoginPageContainer,
  LoginFormContainer,
  WebsiteLogo,
  LoginForm,
  InputsContainer,
  InputGrp,
  Label,
  UsernameInput,
  PasswordInput,
  ShowPasswordInputGrp,
  ShowPasswordLabel,
  ShowPasswordInput,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

export default class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showErrorMsg: false,
    showPassword: false,
    isDark: false,
  }

  onUsernameChange = event => this.setState({username: event.target.value})

  onPasswordChange = event => this.setState({password: event.target.value})

  onShowPasswordChange = () =>
    this.setState(prevState => ({showPassword: !prevState.showPassword}))

  handleLogin = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const fetchApiUrl = 'https://apis.ccbp.in/login'
    const fetchOptions = {
      method: 'POST',
      body: JSON.stringify({username, password}),
    }

    try {
      const response = await fetch(fetchApiUrl, fetchOptions)
      if (response.ok) {
        const {history} = this.props
        const jsonResponse = await response.json()
        const jwtToken = jsonResponse.jwt_token
        Cookies.set('jwt_token', jwtToken, {expires: 1})
        history.replace('/')
      } else {
        const jsonResponse = await response.json()
        const errorMsg = jsonResponse.error_msg
        this.setState({errorMsg, showErrorMsg: true})
      }
    } catch (error) {
      console.log('Error occured while logging in', error)
    }
  }

  render() {
    const {username, password, errorMsg, showErrorMsg, showPassword, isDark} =
      this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginPageContainer isDark={isDark}>
        <LoginFormContainer isDark={isDark}>
          <WebsiteLogo
            src={
              isDark
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            }
            alt="website logo"
          />
          <LoginForm onSubmit={this.handleLogin}>
            <InputsContainer>
              <InputGrp>
                <Label htmlFor="username" isDark={isDark}>
                  USERNAME
                </Label>
                <UsernameInput
                  isDark={isDark}
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  autoComplete="username"
                  value={username}
                  onChange={this.onUsernameChange}
                  required
                />
              </InputGrp>
              <InputGrp>
                <Label htmlFor="password" isDark={isDark}>
                  PASSWORD
                </Label>
                <PasswordInput
                  isDark={isDark}
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  placeholder="Password"
                  autoComplete="new-password"
                  value={password}
                  onChange={this.onPasswordChange}
                  required
                />
                <ShowPasswordInputGrp>
                  <ShowPasswordInput
                    type="checkbox"
                    name="show-password-checkbox"
                    id="showPassword"
                    onChange={this.onShowPasswordChange}
                  />
                  <ShowPasswordLabel htmlFor="showPassword" isDark={isDark}>
                    Show Password
                  </ShowPasswordLabel>
                </ShowPasswordInputGrp>
              </InputGrp>
            </InputsContainer>
            <LoginButton type="submit">Login</LoginButton>
            {showErrorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
          </LoginForm>
        </LoginFormContainer>
      </LoginPageContainer>
    )
  }
}
