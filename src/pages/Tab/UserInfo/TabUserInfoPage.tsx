import { message } from 'antd'
import { getCategories } from 'apis/getCategories'
import { getUserInfo } from 'apis/getUserInfo'
import { putUserInfoUpdate } from 'apis/putUserInfoUpdate'
import { Header } from 'components/Header'
import { TabBar } from 'components/TabBar'
import { FC, useEffect, useState } from 'react'
import {
  ContentButton,
  ContentContainer,
  ContentInput,
  ContentInputContainer,
  ContentInputTypo,
  ContentSelect,
  ContentTitleTypo,
  Root,
} from './styled'

type TabUserInfoPageProps = {
  className?: string
}

export const TabUserInfoPage: FC<TabUserInfoPageProps> = ({ className }) => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')
  const [categoryList, setCategoryList] = useState<any[]>([])
  const [selectedCategoryList, setSelectedCategoryList] = useState<any[]>([])

  const onChangeSelectedCategoryList = (value: any) => {
    setSelectedCategoryList(value)
  }

  const onSubmit = () => {
    if (name === '') {
      message.error('이름을 입력해주세요.')
      return
    }
    if (password === '') {
      message.error('비밀번호를 입력해주세요.')
      return
    }
    if (selectedCategoryList.length === 0) {
      message.error('관심사를 선택해주세요.')
      return
    }
    putUserInfoUpdate({
      email,
      name,
      password: newPassword === '' ? password : newPassword,
      selected_category_ids: selectedCategoryList,
    }).then((res) => {
      if (res) {
        if (res.status.type === 'success') {
          alert('프로필 정보 수정이 완료되었습니다.')
          window.location.reload()
        } else {
          alert(res.status.message)
        }
      }
    })
  }

  useEffect(() => {
    getUserInfo().then((res) => {
      if (res) {
        setName(res.data.name)
        setEmail(res.data.email)
        setSelectedCategoryList(res.data.categories.map((value) => +value.id))
      }
    })
    getCategories().then((res) => {
      setCategoryList(res.data.categories.map((value: any) => ({ value: value.id, label: value.name })))
    })
  }, [])

  return (
    <Root className={className}>
      <Header />
      <ContentTitleTypo>프로필 정보</ContentTitleTypo>
      <ContentContainer>
        <ContentInputContainer>
          <ContentInputTypo>이름</ContentInputTypo>
          <ContentInput
            placeholder="이름을 입력해주세요."
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />
        </ContentInputContainer>
        <ContentInputContainer>
          <ContentInputTypo>이메일</ContentInputTypo>
          <ContentInput value={email} disabled />
        </ContentInputContainer>
        <ContentInputContainer>
          <ContentInputTypo>새로운 비밀번호</ContentInputTypo>
          <ContentInput
            type="password"
            placeholder="새로운 비밀번호를 입력해주세요."
            value={newPassword}
            onChange={(e: any) => setNewPassword(e.target.value)}
          />
          <ContentInputTypo style={{ fontSize: 10 }}>공란으로 두면 비밀번호가 변경되지 않습니다.</ContentInputTypo>
        </ContentInputContainer>
        <ContentInputContainer>
          <ContentInputTypo>비밀번호</ContentInputTypo>
          <ContentInput
            type="password"
            placeholder="본인 확인용 비밀번호를 입력해주세요."
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />
        </ContentInputContainer>
        <ContentInputContainer>
          <ContentInputTypo>관심사</ContentInputTypo>
          <ContentSelect
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="관심사 선택"
            onChange={onChangeSelectedCategoryList}
            value={selectedCategoryList}
            options={categoryList}
          />
        </ContentInputContainer>
        <ContentButton type={'primary'} size={'large'} onClick={onSubmit}>
          수정
        </ContentButton>
      </ContentContainer>
      <TabBar />
    </Root>
  )
}
