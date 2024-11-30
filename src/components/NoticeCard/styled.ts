import { BookOutlined, DollarCircleOutlined, TrophyOutlined } from '@ant-design/icons'
import { Button, Typography } from 'antd'
import { PRIMARY_COLOR } from 'constants/color'
import styled from 'styled-components'

type RootProps = {
  isStarred: boolean
}

export const Root = styled.div<RootProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;
  border: 1px #e9e9e9 solid;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  ${(props) =>
    props.isStarred &&
    `
    border: 1px #1677ff solid;
    box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);
  `}
`

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  padding: 20px;
  padding-bottom: 15px;
  box-sizing: border-box;
`

export const ContentIconContainer = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
`

export const ContentIconDollar = styled(DollarCircleOutlined)`
  font-size: 32px;
  color: ${PRIMARY_COLOR};
`

export const ContentIconBook = styled(BookOutlined)`
  font-size: 32px;
  color: ${PRIMARY_COLOR};
`

export const ContentIconAward = styled(TrophyOutlined)`
  font-size: 32px;
  color: ${PRIMARY_COLOR};
`

export const ContentInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const ContentInfoTitleTypo = styled(Typography)`
  font-size: 18px;
  font-weight: bold;
  color: #111;
  line-height: 120%;
`

export const ContentInfoCaptionTypo = styled(Typography)`
  font-size: 12px;
  color: #555;
  line-height: 120%;
`

export const ContentInfoContentTypo = styled(Typography)`
  font-size: 14px;
  color: #555;
  line-height: 120%;
`

export const ContentDivider = styled.div`
  width: 100%;
  height: 1px;
  background: #d9d9d9;
`

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  box-sizing: border-box;
`

export const FooterDetailsButton = styled(Button)`
  color: ${PRIMARY_COLOR};
`

export const FooterButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const FooterButton = styled(Button)``
