import { message } from 'antd'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ContentContainer,
  ContentCountTypo,
  ContentTypo,
  HeaderContainer,
  HeaderMenuContainer,
  HeaderMenuIcon,
  HeaderTypo,
  Root,
} from './styled'

type ChatCardProps = {
  className?: string
  title: string
  description: string
  memberCount: number
}

export const ChatCard: FC<ChatCardProps> = ({ className, title, description, memberCount }) => {
  const navigate = useNavigate()

  const onClickDetailsPage = () => {
    message.info('미구현된 기능입니다.')
  }

  return (
    <Root className={className} onClick={onClickDetailsPage}>
      <HeaderContainer>
        <HeaderTypo>{title}</HeaderTypo>
        <HeaderMenuContainer>
          <HeaderMenuIcon />
        </HeaderMenuContainer>
      </HeaderContainer>
      <ContentContainer>
        <ContentTypo>{description}</ContentTypo>
        <ContentCountTypo>{memberCount.toLocaleString()} 멤버</ContentCountTypo>
      </ContentContainer>
    </Root>
  )
}
