import { commonAxios, CommonResponseType } from './common'

type Props = {
  noticeId: number
  content: string
}

type Type = {}

export const postChat = async ({ noticeId, content }: Props) => {
  return await commonAxios('POST')(`chatrooms/${noticeId}/chat`, { content }, true).then((res) => {
    if (res) {
      return res.data as CommonResponseType<Type>
    }
  })
}
