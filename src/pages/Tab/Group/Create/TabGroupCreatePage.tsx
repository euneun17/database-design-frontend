import { getCategories } from 'apis/getCategories'
import { postNoticeGroup } from 'apis/postNoticeGroups'
import { Header } from 'components/Header'
import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ContentButton,
  ContentButtonContainer,
  ContentContainer,
  ContentSectionContainer,
  ContentSectionContentInput,
  ContentSectionContentTextArea,
  ContentSectionTitleTypo,
  ContentSelect,
  ContentTitleTypo,
  Root,
} from './styled'

type TabGroupCreatePageProps = {
  className?: string
}

export const TabGroupCreatePage: FC<TabGroupCreatePageProps> = ({ className }) => {
  const navigate = useNavigate()
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [url, setUrl] = useState<string>('')
  const [categoryList, setCategoryList] = useState<any[]>([])
  const [selectedCategoryList, setSelectedCategoryList] = useState<any[]>([])

  const onChangeSelectedCategoryList = (value: any) => {
    setSelectedCategoryList(value)
  }

  const onSubmit = () => {
    postNoticeGroup({ group_name: name, crawl_site_url: url, description, group_category: selectedCategoryList }).then(
      (res) => {
        if (res) {
          if (res.status.type === 'success') {
            alert('공지 그룹 생성에 성공했습니다.')
            navigate('/tab/group')
          } else {
            alert(res.status.message)
          }
        }
      }
    )
  }

  useEffect(() => {
    getCategories().then((res) => {
      if (res) {
        setCategoryList(res.data.categories.map((value: any) => ({ value: value.id, label: value.name })))
      }
    })
  }, [])

  return (
    <Root className={className}>
      <Header type={'SUB'} title={'공지 그룹 생성'} />
      <ContentContainer>
        <ContentTitleTypo>기본 정보</ContentTitleTypo>
        <ContentSectionContainer>
          <ContentSectionTitleTypo>공지 그룹 명</ContentSectionTitleTypo>
          <ContentSectionContentInput
            placeholder={'공지 그룹 명을 입력해주세요.'}
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />
        </ContentSectionContainer>
        <ContentSectionContainer>
          <ContentSectionTitleTypo>공지 그룹 상세 설명</ContentSectionTitleTypo>
          <ContentSectionContentTextArea
            placeholder={'공지 그룹 상세 설명을 입력해주세요.'}
            value={description}
            autoSize={{ minRows: 3, maxRows: 5 }}
            onChange={(e: any) => setDescription(e.target.value)}
          />
        </ContentSectionContainer>
        <ContentSectionContainer>
          <ContentSectionTitleTypo>크롤링 사이트 url</ContentSectionTitleTypo>
          <ContentSectionContentInput
            placeholder={'크롤링 사이트 url을 입력해주세요.'}
            value={url}
            onChange={(e: any) => setUrl(e.target.value)}
          />
        </ContentSectionContainer>

        {/* <ContentSectionContainer>
          <ContentSectionTitleTypo>크롤링 출처 사이트</ContentSectionTitleTypo>
          <ContentSectionSiteContainer>
            <ContentSectionItemContainer>
              <ContentSectionSiteWrapper>
                <ContentSectionSiteTypo>https://www.dongguk.edu/article/JANGHAKNOTICE/list</ContentSectionSiteTypo>
              </ContentSectionSiteWrapper>
              <ContentSectionSiteDelete />
            </ContentSectionItemContainer>
            <ContentSectionItemContainer>
              <ContentSectionSiteWrapper>
                <ContentSectionSiteTypo>https://ai.dongguk.edu/main</ContentSectionSiteTypo>
              </ContentSectionSiteWrapper>
              <ContentSectionSiteDelete />
            </ContentSectionItemContainer>
            <ContentSectionItemContainer>
              <ContentSectionSiteWrapper>
                <ContentSectionSiteTypo>https://cs.dongguk.edu/main</ContentSectionSiteTypo>
              </ContentSectionSiteWrapper>
              <ContentSectionSiteDelete />
            </ContentSectionItemContainer>
            <ContentSectionItemContainer>
              <ContentSectionSiteWrapper>
                <ContentSectionSiteTypo> https://dice.dongguk.edu/board/list.do</ContentSectionSiteTypo>
              </ContentSectionSiteWrapper>
              <ContentSectionSiteDelete />
            </ContentSectionItemContainer>
          </ContentSectionSiteContainer>
          <ContentSectionContentInput
            placeholder={'크롤링할 사이트 url을 입력해주세요.'}
            value={url}
            onChange={(e: any) => setUrl(e.target.value)}
          />
          <ContentButton color={'primary'} variant={'outlined'}>
            크롤링 출처 사이트 추가
          </ContentButton>
        </ContentSectionContainer> */}
        <ContentSectionContainer>
          <ContentSectionTitleTypo>관심사</ContentSectionTitleTypo>
          <ContentSelect
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="관심사 선택"
            onChange={onChangeSelectedCategoryList}
            options={categoryList}
          />
        </ContentSectionContainer>
      </ContentContainer>
      <ContentButtonContainer>
        <ContentButton type={'primary'} size={'large'} onClick={onSubmit}>
          공지 그룹 생성
        </ContentButton>
      </ContentButtonContainer>
    </Root>
  )
}
