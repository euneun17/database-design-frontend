import { commonAxios, CommonResponseType } from './common'

type Type = {
  email: string
  name: string
  categories: { id: string; name: string }[]
}

export const getUserInfo = async () => {
  return await commonAxios('GET')('user/info', {}, true).then((res) => {
    if (res) {
      return res.data as CommonResponseType<Type>
    }
  })
}
