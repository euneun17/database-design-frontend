import { ChatListType } from 'types/common'
import { commonAxios, CommonResponseType } from './common'

type Props = {
  noticeId: number
}

type Type = {
  chats: ChatListType
}

export const postChatroomJoin = async ({ noticeId }: Props) => {
  return await commonAxios('POST')(`chatrooms/${noticeId}/join`, {}, true).then((res) => {
    if (res) {
      return res.data as CommonResponseType<Type>
    }
  })
}
