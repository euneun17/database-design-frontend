import { ArrowLeftOutlined, MessageOutlined } from '@ant-design/icons'
import { Button, Dropdown, Input, Menu, message, Modal, Select, Typography } from 'antd'
import { postChat } from 'apis/postChat'
import { postChatroomJoin } from 'apis/postChatoomJoin'
import { FC, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ChatListType } from 'types/common'
import {
  ChatContainer,
  Header,
  InputContainer,
  MessageBody,
  MessageContainer,
  MessageHeader,
  ReportContentContainer,
  Root,
} from './styled'

const { TextArea } = Input

// Props 타입 정의
type ChatRoomProps = {
  className?: string
}

export const TabChatRoomPage: FC<ChatRoomProps> = ({ className }) => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const [messages, setMessages] = useState<ChatListType>([])
  const [newMessage, setNewMessage] = useState<string>('')
  const [reportVisible, setReportVisible] = useState<boolean>(false)
  const [reportMessageId, setReportMessageId] = useState<number | null>(null)
  const [reportContent, setReportContent] = useState<string>('')
  const [reportType, setReportType] = useState()

  const fetchMessages = async () => {
    try {
      if (id) {
        const response = await postChatroomJoin({ noticeId: +id })
        const newMessages = response?.data.chats as ChatListType
        setMessages((prevMessages) => [...newMessages])
      }
    } catch (error) {
      console.error('메시지 로드 오류:', error)
    }
  }

  const handleSendMessage = () => {
    if (newMessage.length > 1) {
      if (id) {
        if (newMessage.trim()) {
          postChat({ noticeId: +id, content: newMessage })
          setNewMessage('')
        }
      }
    } else {
      message.error('두 글자 이상만 입력 가능합니다.')
    }
  }

  const handleReportMessage = (messageId: number) => {
    setReportMessageId(messageId)
    setReportVisible(true)
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <a onClick={() => console.log('채팅방 알림 끄기')}>채팅방 정보</a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={() => console.log('채팅방 알림 끄기')}>채팅방 알림 끄기</a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={() => console.log('채팅방 나가기')}>채팅방 나가기</a>
      </Menu.Item>
    </Menu>
  )

  useEffect(() => {
    fetchMessages()

    const interval = setInterval(() => {
      fetchMessages()
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Root className={className}>
      <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button onClick={() => navigate(`/tab/home`)} style={{ border: 'none', marginRight: 'auto', padding: 0 }}>
          <ArrowLeftOutlined />
        </Button>
        <Typography.Title level={4} style={{ textAlign: 'center', flexGrow: 1 }}>
          대화방
        </Typography.Title>
        <Dropdown overlay={menu} trigger={['click']}>
          <Button icon={<MessageOutlined />} />
        </Dropdown>
      </Header>
      <ChatContainer>
        {messages.map((msg, index) => (
          <MessageContainer
            key={index}
            style={{
              alignSelf: msg.author.name === '이름' ? 'flex-end' : 'flex-start',
              width: msg.author.name === '이름' ? 'calc(33.33% - 16px)' : 'calc(66.67% - 16px)',
              marginLeft: msg.author.name === '이름' ? 'auto' : '0',
            }}
          >
            <MessageHeader>
              <Typography.Text strong>{msg.author.name}</Typography.Text>
              <Typography.Text type="secondary">
                {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </Typography.Text>
            </MessageHeader>
            <MessageBody>
              <Typography.Text>{msg.content}</Typography.Text>
              <Button type="link" onClick={() => handleReportMessage(index)} style={{ float: 'right' }}>
                신고
              </Button>
            </MessageBody>
          </MessageContainer>
        ))}
      </ChatContainer>
      <InputContainer>
        <TextArea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onPressEnter={(e) => {
            e.preventDefault()
            handleSendMessage()
          }}
          placeholder="메시지를 입력하세요..."
          autoSize={{ minRows: 1, maxRows: 4 }}
        />
        <Button type="primary" onClick={handleSendMessage}>
          전송
        </Button>
      </InputContainer>
      {/* <ReactionContainer>
        <LikeOutlined onClick={() => handleReactionClick('👍')} />
        <SmileOutlined onClick={() => handleReactionClick('😊')} />
        <FrownOutlined onClick={() => handleReactionClick('😞')} />
        <DislikeOutlined onClick={() => handleReactionClick('👎')} />
      </ReactionContainer> */}

      <Modal title="신고하기" visible={reportVisible} onCancel={() => setReportVisible(false)} footer={null}>
        <ReportContentContainer>
          <Typography.Text>신고 유형을 선택하세요:</Typography.Text>
          <Select
            options={[
              { value: 1, label: '스팸' },
              { value: 2, label: '부적절한 내용' },
              { value: 3, label: '욕설' },
              { value: 4, label: '기타' },
            ]}
            value={reportType}
            onChange={(value) => setReportType(value)}
          />
          {reportType === 4 && (
            <TextArea
              value={reportContent}
              onChange={(e) => setReportContent(e.target.value)}
              placeholder="상세 내용을 입력하세요 (30자 이내)"
              maxLength={30}
            />
          )}
          <Button
            type={'primary'}
            onClick={() => {
              alert('신고 접수가 완료되었습니다.')
              setReportVisible(false)
            }}
          >
            신고하기
          </Button>
          <Button type={'text'} onClick={() => setReportVisible(false)}>
            취소
          </Button>
        </ReportContentContainer>
      </Modal>
    </Root>
  )
}
