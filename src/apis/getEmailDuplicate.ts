import { commonAxios, CommonResponseType } from './common'

type Props = {
  email: string
}

type Type = {
  is_duplicated: boolean
}

export const getEmailDuplicate = async ({ email }: Props) => {
  return await commonAxios('GET')(`auth/validate-id`, { email }, true).then((res) => {
    if (res) {
      return res.data as CommonResponseType<Type>
    }
  })
}
