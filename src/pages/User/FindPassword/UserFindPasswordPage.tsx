import { message } from 'antd'
import { postFindPassword } from 'apis/postFindPassword'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  BannerContainer,
  BannerSubTitleTypo,
  BannerTitleTypo,
  ConfirmButton,
  FindContainer,
  FindTitleTypo,
  FooterContainer,
  FooterLink,
  InputField,
  Root,
  StyledForm,
  StyledFormItem,
} from './styled'

type UserFindPasswordPageProps = {
  className?: string
}

export const UserFindPasswordPage: FC<UserFindPasswordPageProps> = ({ className }) => {
  const navigate = useNavigate()

  const [email, setEmail] = useState<string>('')

  const onClickConfirmButton = () => {
    if (email === '') {
      message.error('이메일을 입력해주세요.')
      return
    }
    postFindPassword({ email }).then((res) => {
      if (res) {
        alert('새로운 비밀번호가 이메일로 전송되었습니다.')
        navigate('/user/login') // 필요에 따라 경로 조정
      }
    })
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

      <StyledForm layout="vertical">
        <FindContainer>
          <FindTitleTypo>비밀번호 찾기</FindTitleTypo>
          <StyledFormItem name="name" label="이메일" rules={[{ required: false, message: '이름을 입력해주세요' }]}>
            <InputField
              placeholder="이메일을 입력해주세요."
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
          </StyledFormItem>
          <StyledFormItem>
            <ConfirmButton type="primary" htmlType="submit" onClick={onClickConfirmButton}>
              새로운 비밀번호 보내기
            </ConfirmButton>
          </StyledFormItem>
        </FindContainer>
      </StyledForm>

      <FooterContainer>
        <p>
          <FooterLink href="/terms-of-service">이용약관</FooterLink>{' '}
          <FooterLink href="/privacy-policy">개인정보처리방침</FooterLink>
        </p>
      </FooterContainer>
    </Root>
  )
}
