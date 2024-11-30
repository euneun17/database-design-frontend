import styled from 'styled-components';
import { Button, Typography, Input, Form } from 'antd';

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

export const LoginContainer = styled.div`
  width: calc(100% - 90px);
  height: 270px; 
  background: white;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 15px;
  box-sizing: border-box;
  border: 1px #d9d9d9 solid;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: -110px;
  margin-bottom: 5px;
`

export const LoginTitleTypo = styled(Typography)`
  font-size: 20px;
  font-weight: bold;
  color: black;
  text-align: center;
`

export const LoginButton = styled(Button)`
  font-size: 14px;
  color: white; 
  width: 100%; 
  margin-bottom: 15px; 
  margin-top: 10px;
`

export const FindPasswordButton = styled(Button)`  
  font-size: 14px;
  color: ;    
  width: 100%;    
  margin-bottom: 15px;    
  text-decoration: underline;
`

export const FindPasswordButtonContainer = styled.div`
  text-align: center;
  margin-top: -15px;
`

export const JoinButtonContainer = styled.div`
  text-align: center;
  margin-top: 10px;
`

export const JoinTypo = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: black; 
  text-decoration: none; 
  white-space: nowrap;
`

export const JoinButton = styled(Button)`
  font-size: 14px;
  color: ; 
  width: auto; 
  margin-bottom: 15px;
  text-decoration: underline; 
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