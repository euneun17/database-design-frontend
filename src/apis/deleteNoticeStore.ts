import { commonAxios, CommonResponseType } from './common'

type Props = {
  id: number
}

type Type = {}

export const deleteNoticeStore = async ({ id }: Props) => {
  return await commonAxios('DELETE')(`notices/${id}/store`, {}, true).then((res) => {
    if (res) {
      return res.data as CommonResponseType<Type>
    }
  })
}
