import { ChatRoomListType } from 'types/common'
import { commonAxios, CommonResponseType } from './common'

type Type = {
  chatroom: ChatRoomListType
}

export const getChatRooms = async () => {
  return await commonAxios('GET')(`chatrooms`, {}, true).then((res) => {
    if (res) {
      return res.data as CommonResponseType<Type>
    }
  })
}
