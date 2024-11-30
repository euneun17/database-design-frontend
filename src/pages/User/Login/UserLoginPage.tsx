import { message } from 'antd'
import { postUserLogin } from 'apis/postUserLogin'
import { useLocalStorage } from 'hooks/useLocalStorage'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  BannerContainer,
  BannerSubTitleTypo,
  BannerTitleTypo,
  FindPasswordButton,
  FindPasswordButtonContainer,
  FooterContainer,
  FooterLink,
  InputField,
  JoinButton,
  JoinButtonContainer,
  JoinTypo,
  LoginButton,
  LoginContainer,
  LoginTitleTypo,
  Root,
  StyledForm,
  StyledFormItem,
} from './styled'

type UserLoginPageProps = {
  className?: string
}

export const UserLoginPage: FC<UserLoginPageProps> = ({ className }) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { setItem: setAccessToken, removeItem: removeAccessToken } = useLocalStorage('access_token')
  const navigate = useNavigate()

  const onClickLoginButton = () => {
    if (email === '') {
      message.error('이메일을 입력해주세요.')
      return
    }
    if (password === '') {
      message.error('비밀번호를 입력해주세요.')
      return
    }
    postUserLogin({ email, password }).then((res) => {
      if (res) {
        if (res.status.type === 'success') {
          alert('로그인에 성공했습니다.')
          removeAccessToken()
          setAccessToken(res.data.access_token)
          navigate('/tab/home')
        } else {
          alert(res.status.message)
        }
      }
    })
  }

  const onClickJoinButton = () => {
    navigate('/user/join')
  }

  const onClickFindPasswordButton = () => {
    navigate('/user/find-password')
  }

  return (
    <Root className={className}>
      <BannerContainer>
        <BannerTitleTypo>공지알림e</BannerTitleTypo>
        <BannerSubTitleTypo>
          맞춤형 실시간 알림 서비스로, <br />
          중요한 공지를 한 눈에 확인하세요!
        </BannerSubTitleTypo>
      </BannerContainer>
      <LoginContainer>
        <LoginTitleTypo>로그인</LoginTitleTypo>
        <StyledForm name="login" layout="vertical">
          <StyledFormItem
            name="email"
            label="이메일 주소"
            rules={[{ required: false, message: '이메일 주소를 입력해주세요' }]}
          >
            <InputField
              placeholder="이메일 주소"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              onKeyPress={(e: any) => {
                if (e.key === 'Enter') {
                  onClickLoginButton()
                }
              }}
            />
          </StyledFormItem>
          <StyledFormItem
            name="password"
            label="비밀번호"
            rules={[{ required: false, message: '비밀번호를 입력해주세요' }]}
          >
            <InputField.Password
              placeholder="비밀번호"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
              onKeyPress={(e: any) => {
                if (e.key === 'Enter') {
                  onClickLoginButton()
                }
              }}
            />
          </StyledFormItem>
          <StyledFormItem>
            <LoginButton type="primary" onClick={onClickLoginButton}>
              로그인
            </LoginButton>
          </StyledFormItem>
          <FindPasswordButtonContainer>
            <FindPasswordButton type="link" onClick={onClickFindPasswordButton}>
              비밀번호를 잊으셨나요?
            </FindPasswordButton>
          </FindPasswordButtonContainer>
        </StyledForm>
      </LoginContainer>
      <JoinButtonContainer>
        <JoinTypo>
          계정이 없으신가요?
          <JoinButton type="link" onClick={onClickJoinButton}>
            회원가입
          </JoinButton>
        </JoinTypo>
      </JoinButtonContainer>

      <FooterContainer>
        <p>
          <FooterLink href="/terms">이용약관</FooterLink> <FooterLink href="/terms">개인정보처리방침</FooterLink>
        </p>
      </FooterContainer>
    </Root>
  )
}
