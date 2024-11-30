export type NoticeCardIconType = 'DOLLAR' | 'BOOK' | 'AWARD'

export type NoticeItemType = {
  author: string
  categories: { id: number; name: string }[]
  id: number
  noticed_date: string
  starred: boolean
  stored: boolean
  title: string
  content: string
  url: string
}

export type NoticeListType = NoticeItemType[]

export type ChatItemType = {
  id: number
  author: {
    id: number
    name: string
  }
  content: string
  created_at: string
}

export type ChatListType = ChatItemType[]

export type NoticeGroupItemType = {
  id: number
  name: string
  admin_id: number // 그룹장 id
  site_url: string
  group_category: { id: number; name: string }[]
  description: string
  share_url: string
  members: { id: number; name: string }[]
  participant: boolean
}

export type NoticeGroupListType = NoticeGroupItemType[]

export type ChatRoomItemType = {
  id: number
  notice_id: number
  categories: { id: number; name: string }[]
  title: string
  members: { id: number; name: string; email: string }[]
}

export type ChatRoomListType = ChatRoomItemType[]
