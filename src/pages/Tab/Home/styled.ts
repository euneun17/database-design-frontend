import { Button, Typography } from 'antd'
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
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  box-sizing: border-box;
  border: 1px #d9d9d9 solid;
  border-radius: 8px;
  margin-top: 20px;
`

export const FilterChipContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`

export const FilterChip = styled.div`
  background: #eee;
  padding: 4px 12px;
  box-sizing: border-box;
  border-radius: 12px;
`

export const FilterChipTypo = styled(Typography)`
  font-size: 14px;
  font-weight: 500;
  color: #333;
`

export const FilterChipButton = styled(Button)``

export const NoticeCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 0 20px;
  box-sizing: border-box;
  margin-top: 20px;
`
