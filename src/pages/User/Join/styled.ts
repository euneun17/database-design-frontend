import { Button, Form, Input, Select, Typography } from 'antd'
import styled from 'styled-components'

export const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  position: relative;
  padding-bottom: 100px;
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
  font-size: 16px;
  color: white;
  text-align: center;
`

export const StyledForm = styled(Form)`
  width: 100%;
  padding: 0;
`

export const StyledFormItem = styled(Form.Item)`
  margin-bottom: 5px;
`

export const RegisterContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  box-sizing: border-box;
  border: 1px #d9d9d9 solid;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: -110px;
`

export const RegisterButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
  background-color: #457fca;
  border: none;
  color: white;

  &:hover {
    background-color: #5691c8;
  }
`

export const InterestSelect = styled.select`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
`

export const FooterContainer = styled.div`
  text-align: center;
  font-size: 14px;
  color: #808080;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px 0;
`

export const FooterLink = styled.a`
  margin: 50px;
  color: #007bff;
  text-decoration: none;
`

export const InputField = styled(Input)`
  margin-bottom: 5px;
`

export const ContentSelect = styled(Select)``

export const EmailDuplicateContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const EmailDuplicateTypo = styled(Typography)``
