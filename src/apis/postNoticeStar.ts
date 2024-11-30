import { commonAxios, CommonResponseType } from './common'

type Props = {
  id: number
}

type Type = {}

export const postNoticeStar = async ({ id }: Props) => {
  return await commonAxios('POST')(`notices/${id}/star`, {}, true).then((res) => {
    if (res) {
      return res.data as CommonResponseType<Type>
    }
  })
}
