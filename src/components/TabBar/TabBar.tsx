import { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  ContentChatOutlined,
  ContentGroupOutlined,
  ContentHomeOutlined,
  ContentUserInfoOutlined,
  MenuItemContainer,
  MenuItemTypo,
  Root,
} from './styled'

type TabBarProps = {
  className?: string
}

export const TabBar: FC<TabBarProps> = ({ className }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const onClickMenu = (type: 'HOME' | 'GROUP' | 'CHAT' | 'USER_INFO') => () => {
    if (type === 'HOME' && pathname !== '/tab/home') {
      navigate('/tab/home')
      return
    }
    if (type === 'GROUP' && pathname !== '/tab/group') {
      navigate('/tab/group')
      return
    }
    if (type === 'CHAT' && pathname !== '/tab/chat') {
      navigate('/tab/chat')
      return
    }
    if (type === 'USER_INFO' && pathname !== '/tab/user-info') {
      navigate('/tab/user-info')
      return
    }
  }

  return (
    <Root className={className}>
      <MenuItemContainer onClick={onClickMenu('HOME')}>
        <ContentHomeOutlined isSelected={pathname === '/tab/home'} />
        <MenuItemTypo isSelected={pathname === '/tab/home'}>홈</MenuItemTypo>
      </MenuItemContainer>
      <MenuItemContainer onClick={onClickMenu('GROUP')}>
        <ContentGroupOutlined isSelected={pathname === '/tab/group'} />
        <MenuItemTypo isSelected={pathname === '/tab/group'}>공지 그룹</MenuItemTypo>
      </MenuItemContainer>
      <MenuItemContainer onClick={onClickMenu('CHAT')}>
        <ContentChatOutlined isSelected={pathname === '/tab/chat'} />
        <MenuItemTypo isSelected={pathname === '/tab/chat'}>대화방</MenuItemTypo>
      </MenuItemContainer>
      <MenuItemContainer onClick={onClickMenu('USER_INFO')}>
        <ContentUserInfoOutlined isSelected={pathname === '/tab/user-info'} />
        <MenuItemTypo isSelected={pathname === '/tab/user-info'}>프로필</MenuItemTypo>
      </MenuItemContainer>
    </Root>
  )
}
