import { commonAxios, CommonResponseType } from './common'

type Props = {
  id: number
}

type Type = {}

export const deleteNoticeStar = async ({ id }: Props) => {
  return await commonAxios('DELETE')(`notices/${id}/star`, {}, true).then((res) => {
    if (res) {
      return res.data as CommonResponseType<Type>
    }
  })
}
