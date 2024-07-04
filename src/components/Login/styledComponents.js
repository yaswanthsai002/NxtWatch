import styled from 'styled-components'

export const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.isDark ? '#231f20' : '#ebebeb')};
  padding: 0 2rem;
`
export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 450px;
  width: 450px;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#fff')};
  border-radius: 0.5rem;
`
export const WebsiteLogo = styled.img`
  width: 200px;
  object-fit: contain;
  align-self: center;

  @media screen and (max-width: 425px) {
    width: 175px;
  }
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  width: 80%;
`
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: cemnter;
  gap: 1rem;
`
export const InputGrp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: cemnter;
  gap: 0.25rem;
`
export const Label = styled.label`
  font-size: 0.9rem;
  color: ${props => (props.isDark ? '#fff' : '#959ea6')};
  font-weight: bold;
`
export const UsernameInput = styled.input`
  padding: 0.65rem 1rem;
  border: 2px solid ${props => (props.isDark ? '#475569' : '#959ea6')};
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#fff')};
  color: ${props => (props.isDark ? '#fff' : '#0f0f0f')};
  caret-color: ${props => (props.isDark ? '#fff' : '#0f0f0f')};
  border-radius: 0.25rem;
  outline: none;
`

export const PasswordInput = styled.input`
  padding: 0.65rem 1rem;
  border: 2px solid ${props => (props.isDark ? '#475569' : '#959ea6')};
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#fff')};
  color: ${props => (props.isDark ? '#fff' : '#0f0f0f')};
  caret-color: ${props => (props.isDark ? '#fff' : '#0f0f0f')};
  border-radius: 0.25rem;
  outline: none;
`
export const ShowPasswordInputGrp = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.25rem;
`
export const ShowPasswordLabel = styled.label`
  color: ${props => (props.isDark ? '#fff' : '#0f0f0f')};
`
export const ShowPasswordInput = styled.input`
  cursor: pointer;
  height: 0.9rem;
  width: 0.9rem;
`
export const LoginButton = styled.button`
  border: none;
  outline: none;
  padding: 0.75rem 0;
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
`
