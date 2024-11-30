import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { NoticeGroupItemType } from 'types/common'
import {
  ContentContainer,
  ContentCountTypo,
  ContentTypo,
  HeaderContainer,
  HeaderMenuContainer,
  HeaderMenuIcon,
  HeaderTypo,
  Root,
} from './styled'

type GroupCardProps = {
  className?: string
  noticeGroupItem: NoticeGroupItemType
}

export const GroupCard: FC<GroupCardProps> = ({ className, noticeGroupItem }) => {
  const navigate = useNavigate()

  const onClickDetailsPage = () => {
    navigate(`/tab/group/details/${noticeGroupItem.id}`)
  }

  return (
    <Root className={className} onClick={onClickDetailsPage}>
      <HeaderContainer>
        <HeaderTypo>{noticeGroupItem.name}</HeaderTypo>
        <HeaderMenuContainer>
          <HeaderMenuIcon />
        </HeaderMenuContainer>
      </HeaderContainer>
      <ContentContainer>
        <ContentTypo>{noticeGroupItem.description}</ContentTypo>
        <ContentCountTypo>{noticeGroupItem.members?.length} 멤버</ContentCountTypo>
      </ContentContainer>
    </Root>
  )
}
