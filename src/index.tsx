import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css'
import { MOBILE_CONTAINER_MAX_WIDTH, MOBILE_CONTAINER_MIN_WIDTH } from 'constants/layout'
import { MainPage } from 'pages/Main'
import { NoticeDetailsPage } from 'pages/Notice/Details'
import { TabChatPage } from 'pages/Tab/Chat'
import { TabChatRoomPage } from 'pages/Tab/ChatRoom/ChatRoom'
import { TabGroupPage } from 'pages/Tab/Group'
import { TabGroupCreatePage } from 'pages/Tab/Group/Create'
import { TabGroupDetailsPage } from 'pages/Tab/Group/Details'
import { TabGroupManagePage } from 'pages/Tab/Group/Manage'
import { TabHomePage } from 'pages/Tab/Home'
import { TabUserInfoPage } from 'pages/Tab/UserInfo'
import { TermsPage } from 'pages/Terms'
import { UserFindPasswordPage } from 'pages/User/FindPassword'
import { UserJoinPage } from 'pages/User/Join'
import { UserLoginPage } from 'pages/User/Login'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import './styles/global.css'

const root = ReactDOM.createRoot(document.getElementById('root') as any)

const theme = {
  token: {
    fontFamily: 'Pretendard',
  },
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContentContainer = styled.div`
  max-width: ${MOBILE_CONTAINER_MAX_WIDTH}px;
  width: 100%;
  min-width: ${MOBILE_CONTAINER_MIN_WIDTH}px;
  min-height: 100vh;
  background: #fff;
`

root.render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <BrowserRouter>
        <Container>
          <ContentContainer>
            <Routes>
              <Route path="/" element={<MainPage />} />

              <Route path="/terms" element={<TermsPage />} />

              <Route path="/user/login" element={<UserLoginPage />} />
              <Route path="/user/join" element={<UserJoinPage />} />
              <Route path="/user/find-password" element={<UserFindPasswordPage />} />

              <Route path="/tab/home" element={<TabHomePage />} />

              <Route path="/tab/group" element={<TabGroupPage />} />
              <Route path="/tab/group/create" element={<TabGroupCreatePage />} />
              <Route path="/tab/group/details/:id" element={<TabGroupDetailsPage />} />
              <Route path="/tab/group/manage/:id" element={<TabGroupManagePage />} />

              <Route path="/tab/chatroom/:id" element={<TabChatRoomPage />} />
              <Route path="/tab/chat" element={<TabChatPage />} />
              <Route path="/tab/user-info" element={<TabUserInfoPage />} />

              <Route path="/notice/details/:id" element={<NoticeDetailsPage />} />
            </Routes>
          </ContentContainer>
        </Container>
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
)
