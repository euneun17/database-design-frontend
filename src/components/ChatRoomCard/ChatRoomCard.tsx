import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChatRoomItemType } from 'types/common'
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

type ChatRoomCardProps = {
  className?: string
  chatRoomItem: ChatRoomItemType
}

export const ChatRoomCard: FC<ChatRoomCardProps> = ({ className, chatRoomItem }) => {
  const navigate = useNavigate()

  const onClickChatRoomButton = () => {
    navigate(`/tab/chatroom/${chatRoomItem.notice_id}`)
  }

  return (
    <Root className={className} onClick={onClickChatRoomButton}>
      <HeaderContainer>
        <HeaderTypo>{chatRoomItem.title}</HeaderTypo>
        <HeaderMenuContainer>
          <HeaderMenuIcon />
        </HeaderMenuContainer>
      </HeaderContainer>
      <ContentContainer>
        <ContentTypo>{chatRoomItem.categories.map((value) => value.name).join(', ')}</ContentTypo>
        <ContentCountTypo>{chatRoomItem.members.length} 멤버</ContentCountTypo>
      </ContentContainer>
    </Root>
  )
}
