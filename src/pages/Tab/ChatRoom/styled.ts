import styled from 'styled-components'

export const Root = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative; /* 자식 요소의 절대 위치를 위한 기준 설정 */
  height: 100vh; /* 전체 화면 높이 설정 */
  display: flex;
  flex-direction: column; /* 수직 방향으로 배치 */
  justify-content: space-between; /* 요소 사이에 공간 배치 */
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ChatContainer = styled.div`
  margin: 20px 0;
  height: calc(100% - 100px);
  overflow-y: auto; /* 스크롤 가능 */
`

export const MessageContainer = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  background: #f6f8fa;
  border-radius: 5px;
`

export const MessageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const MessageBody = styled.div`
  padding: 10px 0;
`

export const ReactionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: -170px; /* 감정 표현과의 간격 */
`

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px; /* 입력 필드와 버튼 사이의 간격 */
`

export const ReportContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
