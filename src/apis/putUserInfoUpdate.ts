import { commonAxios, CommonResponseType } from './common'

type Props = {
  name: string
  email: string
  password: string
  selected_category_ids: number[]
}

type Type = {}

export const putUserInfoUpdate = async (props: Props) => {
  return await commonAxios('PUT')('user/update', props, true).then((res) => {
    if (res) {
      return res.data as CommonResponseType<Type>
    }
  })
}
