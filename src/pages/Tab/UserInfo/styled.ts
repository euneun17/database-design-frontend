import { Button, Input, Select, Typography } from 'antd'
import { HEADER_HEIGHT, TAB_BAR_HEIGHT } from 'constants/layout'
import styled from 'styled-components'

export const Root = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${HEADER_HEIGHT}px;
  padding-bottom: ${TAB_BAR_HEIGHT + 20}px;
`

export const ContentTitleTypo = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-top: 20px;
`

export const ContentContainer = styled.div`
  width: calc(100% - 40px);
  background: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 15px 20px;
  box-sizing: border-box;
  border: 1px #d9d9d9 solid;
  border-radius: 8px;
  margin-top: 20px;
`

export const ContentInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const ContentInputTypo = styled(Typography)`
  font-size: 16px;
  font-weight: 500;
  color: 333;
`

export const ContentInput = styled(Input)``

export const ContentButton = styled(Button)``

export const ContentSelect = styled(Select)``
