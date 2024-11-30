import { commonAxios, CommonResponseType } from './common'

type Props = {
  group_id: number
}

type Type = {}

export const postNoticeGroupLeave = async ({ group_id }: Props) => {
  return await commonAxios('POST')(`notice-groups/${group_id}/leave`, {}, true).then((res) => {
    if (res) {
      return res.data as CommonResponseType<Type>
    }
  })
}
