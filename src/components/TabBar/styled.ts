import { HomeOutlined, MessageOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons'
import { Typography } from 'antd'
import { PRIMARY_COLOR } from 'constants/color'
import { MOBILE_CONTAINER_MAX_WIDTH, MOBILE_CONTAINER_MIN_WIDTH, TAB_BAR_HEIGHT } from 'constants/layout'
import styled from 'styled-components'

export const Root = styled.div`
  max-width: ${MOBILE_CONTAINER_MAX_WIDTH}px;
  width: 100%;
  min-width: ${MOBILE_CONTAINER_MIN_WIDTH}px;
  height: ${TAB_BAR_HEIGHT}px;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 15px;
  box-sizing: border-box;
  border-top: 1px #d9d9d9 solid;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 100;
`

export const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  cursor: pointer;
`

export const MenuItemTypo = styled(Typography)<{ isSelected: boolean }>`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  ${(props) =>
    props.isSelected &&
    `color: ${PRIMARY_COLOR};
    font-weight: bold;
  `}
`

export const ContentHomeOutlined = styled(HomeOutlined)<{ isSelected: boolean }>`
  font-size: 24px;
  color: #333;
  ${(props) =>
    props.isSelected &&
    `color: ${PRIMARY_COLOR};
  `}
`

export const ContentGroupOutlined = styled(TeamOutlined)<{ isSelected: boolean }>`
  font-size: 24px;
  color: #333;
  ${(props) =>
    props.isSelected &&
    `color: ${PRIMARY_COLOR};
  `}
`

export const ContentChatOutlined = styled(MessageOutlined)<{ isSelected: boolean }>`
  font-size: 24px;
  color: #333;
  ${(props) =>
    props.isSelected &&
    `color: ${PRIMARY_COLOR};
  `}
`

export const ContentUserInfoOutlined = styled(UserOutlined)<{ isSelected: boolean }>`
  font-size: 24px;
  color: #333;
  ${(props) =>
    props.isSelected &&
    `color: ${PRIMARY_COLOR};
  `}
`
