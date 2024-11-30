import { NoticeItemType } from 'types/common'
import { commonAxios, CommonResponseType } from './common'

type Props = {
  id: number
}

type Type = {} & NoticeItemType

export const getNoticeDetails = async ({ id }: Props) => {
  return await commonAxios('GET')(`notices/${id}`, {}, true).then((res) => {
    if (res) {
      return res.data as CommonResponseType<Type>
    }
  })
}
