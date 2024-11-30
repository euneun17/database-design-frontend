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

export const ContentContainer = styled.div`
  width: calc(100% - 40px);
  background: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px 20px;
  box-sizing: border-box;
  border: 1px #d9d9d9 solid;
  border-radius: 8px;
  margin-top: 10px;
`

export const ContentTitleTypo = styled(Typography)`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.5px;
  color: #333;
`

export const ContentSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const ContentSectionTitleTypo = styled(Typography)`
  font-size: 12px;
  color: #777;
  letter-spacing: -0.5px;
  text-indent: 3px;
  line-height: 100%;
`

export const ContentSectionContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

export const ContentSectionContentTypo = styled(Typography)`
  font-size: 16px;
  color: #333;
  letter-spacing: -0.5px;
  text-indent: 3px;
  line-height: 100%;
  word-break: keep-all;
`

export const ContentSectionCaptionTypo = styled(Typography)`
  font-size: 14px;
  color: #333;
  letter-spacing: -0.5px;
  text-indent: 3px;
  line-height: 100%;
  word-break: keep-all;
`

export const ContentSectionCategoryChipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`

export const ContentSectionCategoryChip = styled.div`
  padding: 5px;
  background-color: '#f0f0f0';
  border-radius: 10px;
`

export const ContentSectionCategoryChipTypo = styled(Typography)`
  font-size: 12;
  font-weight: bold;
  color: '#777';
  letter-spacing: -0.5;
`

export const ContentButtonContainer = styled.div`
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
`

export const ContentButton = styled(Button)`
  width: 100%;
`

export const ContentButtonCaptionTypo = styled(Typography)`
  font-size: 14px;
  color: #777;
`
