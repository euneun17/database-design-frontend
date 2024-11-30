import { BellOutlined, SearchOutlined, ShareAltOutlined } from '@ant-design/icons'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  BannerContainer,
  BannerContentTypo,
  BannerSubTitleTypo,
  BannerTitleTypo,
  ContentButton,
  ContentButtonContainer,
  ContentContainer,
  ContentDescriptionContainer,
  ContentDescriptionIconWrapper,
  ContentDescriptionTypo,
  Root,
} from './styled'

type MainPageProps = {
  className?: string
}

export const MainPage: FC<MainPageProps> = ({ className }) => {
  const navigate = useNavigate()

  const onClickStartButton = () => {
    navigate('/user/login') //after fix
  }

  return (
    <Root className={className}>
      <BannerContainer>
        <BannerTitleTypo>공지알림e</BannerTitleTypo>
        <BannerSubTitleTypo>중요 공지를 놓치지 마세요!</BannerSubTitleTypo>
        <BannerContentTypo>
          맞춤형 실시간 알림 서비스로, <br />
          중요한 공지를 한 눈에 확인하세요!
        </BannerContentTypo>
      </BannerContainer>
      <ContentContainer>
        <ContentDescriptionContainer>
          <ContentDescriptionTypo>
            <ContentDescriptionIconWrapper>
              <SearchOutlined />
            </ContentDescriptionIconWrapper>
            관심사에 맞는 공지사항만 받아보세요!
          </ContentDescriptionTypo>
          <ContentDescriptionTypo>
            <ContentDescriptionIconWrapper>
              <BellOutlined />
            </ContentDescriptionIconWrapper>
            매일 중요한 공지를 실시간으로 제공 받아보세요!
          </ContentDescriptionTypo>
          <ContentDescriptionTypo>
            <ContentDescriptionIconWrapper>
              <ShareAltOutlined />
            </ContentDescriptionIconWrapper>
            다른 학생들과 함께 공지를 공유하고 토론하세요!
          </ContentDescriptionTypo>
        </ContentDescriptionContainer>
        <ContentButtonContainer>
          <ContentButton size={'large'} type={'primary'} onClick={onClickStartButton}>
            시작하기
          </ContentButton>
        </ContentButtonContainer>
      </ContentContainer>
    </Root>
  )
}
