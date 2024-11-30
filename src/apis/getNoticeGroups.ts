import { NoticeGroupListType } from 'types/common'
import { commonAxios, CommonResponseType } from './common'

type Type = {
  groups: NoticeGroupListType
}

export const getNoticeGroups = async () => {
  return await commonAxios('GET')(`notice-groups`, {}, true).then((res) => {
    if (res) {
      return res.data as CommonResponseType<Type>
    }
  })
}
