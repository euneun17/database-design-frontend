import { UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import { getNoticeGroups } from 'apis/getNoticeGroups'
import { postNoticeGroupJoin } from 'apis/postNoticeGroupJoin'
import { postNoticeGroupLeave } from 'apis/postNoticeGroupLeave'
import { Header } from 'components/Header'
import { FC, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { NoticeGroupItemType } from 'types/common'
import {
  ContentButton,
  ContentButtonContainer,
  ContentContainer,
  ContentSectionCategoryChip,
  ContentSectionCategoryChipContainer,
  ContentSectionCategoryChipTypo,
  ContentSectionContainer,
  ContentSectionContentContainer,
  ContentSectionContentTypo,
  ContentSectionSiteContainer,
  ContentSectionSiteTypo,
  ContentSectionSiteWrapper,
  ContentSectionTitleTypo,
  ContentTitleTypo,
  Root,
} from './styled'

type TabGroupDetailsPageProps = {
  className?: string
}

const pastelColorPairs = [
  { background: '#FFB3BA55', text: '#5A5A5Abb' }, // Light Pink background with dark gray text
  { background: '#FFDFBA55', text: '#4A4A4Abb' }, // Peach background with dark gray text
  { background: '#FFFFBA55', text: '#3A3A3Abb' }, // Light Yellow background with dark gray text
  { background: '#BAFFC955', text: '#3A3A3Abb' }, // Light Mint background with dark gray text
  { background: '#BAE1FF55', text: '#3A3A3Abb' }, // Light Sky Blue background with dark gray text
  { background: '#D2BAFF55', text: '#3A3A3Abb' }, // Lavender background with dark gray text
  { background: '#FFBAFA55', text: '#4A4A4Abb' }, // Light Rose background with dark gray text
  { background: '#FFEFB655', text: '#4A4A4Abb' }, // Light Cream background with dark gray text
  { background: '#BAFFF755', text: '#3A3A3Abb' }, // Pale Aqua background with dark gray text
  { background: '#E6E6FA55', text: '#3A3A3Abb' }, // Very Light Lavender background with dark gray text
]

const categories = [
  '장학금',
  '시간표 변경',
  '시험 일정',
  '대학원 진학',
  '취업 정보',
  '교환학생',
  '동아리',
  '인턴십',
  '자격증',
  '교내 행사',
  '특강',
  '학술제',
  '학부 회의',
  '휴학/복학',
  '졸업',
  '공모전',
  '학생 복지',
  '교과 과정',
  '멘토링',
  '학과 규정',
]

export const TabGroupDetailsPage: FC<TabGroupDetailsPageProps> = ({ className }) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { id } = useParams()
  const [noticeGroupItem, setNoticeGroupItem] = useState<NoticeGroupItemType>()

  const onClickJoinButton = () => {
    if (id) {
      postNoticeGroupJoin({ group_id: +id })
        .then((res) => {
          if (res) {
            if (res.status.type === 'success') {
              alert('그룹 참가에 성공하였습니다.')
              navigate('/tab/group', { replace: true })
            } else {
              alert(res.status.message)
            }
          }
        })
        .catch((res) => {
          if (res) {
            alert('이미 참가한 공지 그룹입니다.')
          }
        })
    }
  }

  const onClickLeaveButton = () => {
    if (id) {
      postNoticeGroupLeave({ group_id: +id })
        .then((res) => {
          if (res) {
            if (res.status.type === 'success') {
              alert('그룹 탈퇴에 성공하였습니다.')
              navigate('/tab/group', { replace: true })
            } else {
              alert(res.status.message)
            }
          }
        })
        .catch((res) => {
          if (res) {
            alert('이미 탈퇴한 공지 그룹입니다.')
          }
        })
    }
  }

  useEffect(() => {
    getNoticeGroups().then((res) => {
      if (res) {
        if (id) {
          res.data.groups.forEach((value) => {
            if (value.id === +id) {
              setNoticeGroupItem(value)
            }
          })
        }
      }
    })
  }, [])

  return (
    <Root className={className}>
      <Header type={'SUB'} title={'공지 그룹 상세'} />
      {noticeGroupItem && (
        <>
          <ContentContainer>
            <ContentTitleTypo>기본 정보</ContentTitleTypo>
            <ContentSectionContainer>
              <ContentSectionTitleTypo>공지 그룹 명</ContentSectionTitleTypo>
              <ContentSectionContentTypo>{noticeGroupItem.name}</ContentSectionContentTypo>
            </ContentSectionContainer>
            <ContentSectionContainer>
              <ContentSectionTitleTypo>공지 그룹 상세 설명</ContentSectionTitleTypo>
              <ContentSectionContentTypo>{noticeGroupItem.description}</ContentSectionContentTypo>
            </ContentSectionContainer>
            <ContentSectionContainer>
              <ContentSectionTitleTypo>그룹장</ContentSectionTitleTypo>
              <ContentSectionContentContainer>
                <Avatar size={20} icon={<UserOutlined />} style={{ marginLeft: 2 }} />
                <ContentSectionContentTypo>아마추어그래머</ContentSectionContentTypo>
              </ContentSectionContentContainer>
            </ContentSectionContainer>
            <ContentSectionContainer>
              <ContentSectionTitleTypo>크롤링 출처 사이트</ContentSectionTitleTypo>
              <ContentSectionSiteContainer>
                <ContentSectionSiteWrapper>
                  <ContentSectionSiteTypo>{noticeGroupItem.site_url}</ContentSectionSiteTypo>
                </ContentSectionSiteWrapper>
              </ContentSectionSiteContainer>
            </ContentSectionContainer>
            <ContentSectionContainer>
              <ContentSectionTitleTypo>공유 url</ContentSectionTitleTypo>
              <ContentSectionSiteContainer>
                <ContentSectionSiteWrapper>
                  <ContentSectionSiteTypo>{`http://gongalgongal.dothome.co.kr${pathname}`}</ContentSectionSiteTypo>
                </ContentSectionSiteWrapper>
              </ContentSectionSiteContainer>
            </ContentSectionContainer>
            <ContentSectionContainer>
              <ContentSectionTitleTypo>카테고리</ContentSectionTitleTypo>
              <ContentSectionCategoryChipContainer>
                {noticeGroupItem.group_category.map((categoryItem, index) => (
                  <ContentSectionCategoryChip
                    style={{
                      backgroundColor: pastelColorPairs[index % 10].background,
                    }}
                    key={`category_item_${categoryItem.id}`}
                  >
                    <ContentSectionCategoryChipTypo
                      style={{
                        color: pastelColorPairs[index % 10].text,
                      }}
                    >
                      {categoryItem.name}
                    </ContentSectionCategoryChipTypo>
                  </ContentSectionCategoryChip>
                ))}
              </ContentSectionCategoryChipContainer>
            </ContentSectionContainer>
          </ContentContainer>
          <ContentButtonContainer>
            {noticeGroupItem.participant === false ? (
              <ContentButton type={'primary'} size={'large'} onClick={onClickJoinButton}>
                그룹 가입하기
              </ContentButton>
            ) : (
              <ContentButton danger type={'primary'} size={'large'} onClick={onClickLeaveButton}>
                그룹 탈퇴하기
              </ContentButton>
            )}
          </ContentButtonContainer>
        </>
      )}
    </Root>
  )
}
