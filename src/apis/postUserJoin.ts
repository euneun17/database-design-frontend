import { commonAxios, CommonResponseType } from './common'

type Props = {
  name: string
  email: string
  password: string
  selected_category_ids: number[]
}

type Type = {
  access_token: string
}

export const postUserJoin = async (props: Props) => {
  return await commonAxios('POST')('auth/join', props).then((res) => {
    if (res) {
      return res.data as CommonResponseType<Type>
    }
  })
}
