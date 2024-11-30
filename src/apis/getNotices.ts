import { NoticeListType } from 'types/common'
import { commonAxios, CommonResponseType } from './common'

type Type = {
  notices: NoticeListType
}

export const getNotices = async () => {
  return await commonAxios('GET')('notices', {}, true).then((res) => {
    if (res) {
      return res.data as CommonResponseType<Type>
    }
  })
}
