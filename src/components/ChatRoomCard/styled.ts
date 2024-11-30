import { InfoCircleOutlined } from '@ant-design/icons'
import { Typography } from 'antd'
import styled from 'styled-components'

export const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 12px;
  box-shadow: 1.5px 3px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderTypo = styled(Typography)`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`

export const HeaderMenuContainer = styled.div``

export const HeaderMenuIcon = styled(InfoCircleOutlined)`
  font-size: 20px;
  color: #333;
  cursor: pointer;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContentTypo = styled(Typography)`
  font-size: 16px;
  color: #333;
`

export const ContentCountTypo = styled(Typography)`
  font-size: 12px;
  color: #555;
`
