import { Button, Spin } from 'antd'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  LogoTypo,
  MenuButtonBack,
  MenuButtonBell,
  MenuButtonSetting,
  MenuButtonSpace,
  MenuContainer,
  Root,
  SecretButton,
  TitleTypo,
} from './styled'

type HeaderProps = {
  className?: string
  type?: 'ROOT' | 'SUB'
  title?: string
}

export const Header: FC<HeaderProps> = ({ className, type = 'ROOT', title }) => {
  const navigate = useNavigate()
  const [hover, setHover] = useState<boolean>(false)
  const [loading, setLoading] = useState<'LOADING' | 'DONE'>('DONE')

  const onClickBackPage = () => {
    navigate(-1)
  }

  const onClickSecretButton = () => {
    setLoading('LOADING')
    setTimeout(() => {
      setLoading('DONE')
    }, 10000)
  }

  if (type === 'ROOT') {
    return (
      <Root className={className} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <LogoTypo>공지알림e</LogoTypo>
        {hover && (
          <SecretButton
            type={loading === 'LOADING' ? 'text' : 'primary'}
            disabled={loading === 'LOADING'}
            onClick={onClickSecretButton}
          >
            {loading === 'DONE' && '크롤링'}
            {loading === 'LOADING' && <Spin />}
          </SecretButton>
        )}
        <MenuContainer>
          <Button icon={<MenuButtonBell />} shape={'circle'} size={'large'} type={'text'} />
          <Button icon={<MenuButtonSetting />} shape={'circle'} size={'large'} type={'text'} />
        </MenuContainer>
      </Root>
    )
  }
  return (
    <Root className={className}>
      <Button icon={<MenuButtonBack />} shape={'circle'} size={'large'} type={'text'} onClick={onClickBackPage} />
      <TitleTypo>{title}</TitleTypo>
      <MenuButtonSpace />
    </Root>
  )
}
