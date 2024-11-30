import { commonAxios } from './common'

export const getCategories = async () => {
  return await commonAxios('GET')('categories', {}).then((res) => {
    if (res) {
      return res.data
    }
  })
}
