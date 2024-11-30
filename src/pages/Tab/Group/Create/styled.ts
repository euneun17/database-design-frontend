import { DeleteOutlined } from '@ant-design/icons'
import { Button, Input, Select, Typography } from 'antd'
import TextArea from 'antd/es/input/TextArea'
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

export const ContentSectionContentInput = styled(Input)`
  font-size: 14px;
  color: #333;
  letter-spacing: -0.5px;
  line-height: 120%;
  word-break: keep-all;
`

export const ContentSectionContentTextArea = styled(TextArea)`
  font-size: 14px;
  color: #333;
  letter-spacing: -0.5px;
  line-height: 120%;
  word-break: keep-all;
`

export const ContentSectionSiteContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const ContentSectionItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

export const ContentSectionSiteWrapper = styled.div`
  width: 100%;
  background: #e9e9e9;
  border-radius: 12px;
  padding: 4px 8px;
`

export const ContentSectionSiteTypo = styled(Typography)`
  font-size: 14px;
  font-weight: 500;
  color: #777;
`

export const ContentSectionSiteDelete = styled(DeleteOutlined)`
  color: #f007;
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

export const ContentSelect = styled(Select)``
