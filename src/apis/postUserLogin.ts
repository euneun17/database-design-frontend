import { commonAxios, CommonResponseType } from './common'

type Props = {
  email: string
  password: string
}

type Type = {
  access_token: string
}

export const postUserLogin = async (props: Props) => {
  return await commonAxios('POST')('auth/login', props).then((res) => {
    if (res) {
      return res.data as CommonResponseType<Type>
    }
  })
}
