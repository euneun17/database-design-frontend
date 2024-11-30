import { Checkbox, Typography } from 'antd'
import { getNotices } from 'apis/getNotices'
import { Header } from 'components/Header'
import { NoticeCard } from 'components/NoticeCard'
import { TabBar } from 'components/TabBar'
import { FC, useEffect, useState } from 'react'
import { NoticeListType } from 'types/common'
import { FilterChipContainer, FilterContainer, NoticeCardContainer, Root } from './styled'

type TabHomePageProps = {
  className?: string
}

export const TabHomePage: FC<TabHomePageProps> = ({ className }) => {
  const [noticeList, setNoticeList] = useState<NoticeListType>([])
  const [isStored, setIsStored] = useState<boolean>(false)

  const toggleIsStored = () => {
    setIsStored((prev) => !prev)
  }

  const washedNoticeList = (() => {
    if (isStored) {
      return noticeList.filter((noticeItem) => noticeItem.stored)
    }
    return noticeList
  })()

  useEffect(() => {
    getNotices().then((res) => {
      if (res) {
        setNoticeList(res.data.notices)
      }
    })
  }, [])

  return (
    <Root className={className}>
      <Header />
      <FilterContainer>
        <FilterChipContainer>
          <Checkbox checked={isStored} onClick={toggleIsStored} />
          <Typography>보관 중</Typography>
        </FilterChipContainer>
      </FilterContainer>
      <NoticeCardContainer>
        {washedNoticeList &&
          washedNoticeList.map((noticeItem) => (
            <NoticeCard noticeItem={noticeItem} key={`notice_item_${noticeItem.id}`} />
          ))}
      </NoticeCardContainer>
      <TabBar />
    </Root>
  )
}
