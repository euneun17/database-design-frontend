import { commonAxios, CommonResponseType } from './common'

type Props = {
  email: string
}

type Type = {}

export const postFindPassword = async ({ email }: Props) => {
  return await commonAxios('POST')(`auth/find-password`, { email }, true).then((res) => {
    if (res) {
      return res.data as CommonResponseType<Type>
    }
  })
}
