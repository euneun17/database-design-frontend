import { commonAxios, CommonResponseType } from './common'

type Props = {
  group_name: string
  description: string
  group_category: number[]
  crawl_site_url: string
}

type Type = {
  created: boolean
  group_id: number
  share_url: string
}

export const postNoticeGroup = async (props: Props) => {
  return await commonAxios('POST')('notice-groups', props, true).then((res) => {
    if (res) {
      return res.data as CommonResponseType<Type>
    }
  })
}
