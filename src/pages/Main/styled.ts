import { Button, Typography } from 'antd'
import styled from 'styled-components'

export const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const BannerContainer = styled.div`
  width: 100%;
  height: 350px;
  background: linear-gradient(180deg, #5691c8 25%, #457fca 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding-top: 100px;
`

export const BannerTitleTypo = styled(Typography)`
  font-size: 40px;
  font-weight: bold;
  color: white;
`

export const BannerSubTitleTypo = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
  color: white;
`

export const BannerContentTypo = styled(Typography)`
  font-size: 16px;
  font-weight: 300;
  color: white;
  text-align: center;
`

export const ContentContainer = styled.div`
  width: calc(100% - 40px);
  background: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  box-sizing: border-box;
  border: 1px #d9d9d9 solid;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: -50px;
`

export const ContentDescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const ContentDescriptionTypo = styled(Typography)`
  &&& {
    font-size: 16px;
    color: #333;
  }
`
export const ContentDescriptionIconWrapper = styled.span`
  width: 30px;
  display: inline-flex;
  justify-content: center;
  margin-right: 5px;
`

export const ContentButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
`

export const ContentButton = styled(Button)``
export const ContentButtonCaptionTypo = styled(Typography)`
  font-size: 14px;
  font-weight: 400;
  color: #333;
`
