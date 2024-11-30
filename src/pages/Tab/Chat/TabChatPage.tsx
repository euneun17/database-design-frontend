import { getChatRooms } from 'apis/getChatRooms'
import { ChatRoomCard } from 'components/ChatRoomCard'
import { Header } from 'components/Header'
import { TabBar } from 'components/TabBar'
import { FC, useEffect, useState } from 'react'
import { ChatRoomListType } from 'types/common'
import { ChatRoomCardContainer, FilterContainer, Root } from './styled'

type TabChatPageProps = {
  className?: string
}

export const TabChatPage: FC<TabChatPageProps> = ({ className }) => {
  const [chatRoomList, setChatRoomList] = useState<ChatRoomListType>([])

  useEffect(() => {
    getChatRooms().then((res) => {
      if (res) {
        setChatRoomList(res.data.chatroom)
      }
    })
  }, [])

  return (
    <Root className={className}>
      <Header />
      <FilterContainer>참가한 채팅방</FilterContainer>
      <ChatRoomCardContainer>
        {chatRoomList.map((chatRoomItem) => (
          <ChatRoomCard chatRoomItem={chatRoomItem} key={`chat_room_item_${chatRoomItem.notice_id}`} />
        ))}
      </ChatRoomCardContainer>
      <TabBar />
    </Root>
  )
}
