import { Button } from 'antd'
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

export const FilterContainer = styled.div`
  width: calc(100% - 40px);
  background: white;
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 15px 20px;
  box-sizing: border-box;
  border: 1px #d9d9d9 solid;
  border-radius: 8px;
  margin-top: 20px;
`

export const GroupCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 0 20px;
  box-sizing: border-box;
  margin-top: 20px;
`

export const ContentButtonContainer = styled.div`
  width: calc(100% - 40px);
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

export const ContentButton = styled(Button)`
  width: 100%;
`
