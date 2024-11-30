import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Input } from 'antd';
import { Header } from 'components/Header';
import { FC, useEffect, useState } from 'react';
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
} from './styled';
import { commonAxios, CommonResponseType } from '../../../../apis/common'; // 올바른 경로로 임포트

type TabGroupManagePageProps = {
  className?: string;
};

const pastelColorPairs = [
  { background: '#FFB3BA55', text: '#5A5A5Abb' },
  { background: '#FFDFBA55', text: '#4A4A4Abb' },
  { background: '#FFFFBA55', text: '#3A3A3Abb' },
  { background: '#BAFFC955', text: '#3A3A3Abb' },
  { background: '#BAE1FF55', text: '#3A3A3Abb' },
  { background: '#D2BAFF55', text: '#3A3A3Abb' },
  { background: '#FFBAFA55', text: '#4A4A4Abb' },
  { background: '#FFEFB655', text: '#4A4A4Abb' },
  { background: '#BAFFF755', text: '#3A3A3Abb' },
  { background: '#E6E6FA55', text: '#3A3A3Abb' },
];

// API 응답 타입 정의
type GroupDetailsResponse = {
  group_name: string;
  description: string;
  group_category: number[];
  crawl_site_url: string;
  group_leader: string;
  crawling_sites: string[];
};

// Props 타입 정의 (API 요청에 사용)
type Props = {
  group_name: string;
  description: string;
  group_category: number[];
  crawl_site_url: string;
};

// fetchGroupDetails 함수
const fetchGroupDetails = async (): Promise<CommonResponseType<GroupDetailsResponse>> => {
  return await commonAxios('GET')('group-details', {}, true)
    .then((response) => {
      if (response && response.data) {
        return response.data as CommonResponseType<GroupDetailsResponse>;
      } else {
        throw new Error('Response or response.data is undefined');
      }
    })
    .catch((error: unknown) => {
      console.error('Error fetching group details:', error);
      throw error; // 에러 처리
    });
};


export const TabGroupManagePage: FC<TabGroupManagePageProps> = ({ className }) => {
  const [crawlingSites, setCrawlingSites] = useState<string[]>([]);
  const [newSite, setNewSite] = useState<string>('');
  const [newCategory, setNewCategory] = useState<string>('');
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [groupName, setGroupName] = useState<string>('');
  const [groupDescription, setGroupDescription] = useState<string>('');
  const [groupLeader, setGroupLeader] = useState<string>('');

  useEffect(() => {
    const loadGroupDetails = async () => {
      try {
        const response = await fetchGroupDetails();
        if (response) {
          setGroupName(response.data.group_name);
          setGroupDescription(response.data.description);
          setGroupLeader(response.data.group_leader);
          setCrawlingSites(response.data.crawling_sites);
          setCategories(response.data.group_category.map((_, index) => `Category ${index + 1}`)); // 예시로 카테고리 설정
        }
      } catch (error) {
        console.error('Failed to load group details:', error);
      }
    };

    loadGroupDetails();
  }, []);

  const removeCrawlingSite = (site: string) => {
    setCrawlingSites((prev) => prev.filter((item) => item !== site));
  };

  const addCrawlingSite = () => {
    if (newSite) {
      setCrawlingSites((prev) => [...prev, newSite]);
      setNewSite('');
    } else {
      alert('URL을 입력해주세요.');
    }
  };

  const addCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories((prev) => [...prev, newCategory]);
      setNewCategory('');
    } else {
      alert('유효한 카테고리 이름을 입력하세요.');
    }
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((item) => item !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const clearSelectedCategories = () => {
    setCategories((prev) => prev.filter((category) => !selectedCategories.includes(category)));
    setSelectedCategories([]);
  };

  return (
    <Root className={className}>
      <Header type={'SUB'} title={'공지 그룹 상세'} />
      <ContentContainer>
        <ContentTitleTypo>기본 정보</ContentTitleTypo>
        <ContentSectionContainer>
          <ContentSectionTitleTypo>공지 그룹 명</ContentSectionTitleTypo>
          <ContentSectionContentTypo>{groupName}</ContentSectionContentTypo>
        </ContentSectionContainer>
        <ContentSectionContainer>
          <ContentSectionTitleTypo>공지 그룹 상세 설명</ContentSectionTitleTypo>
          <ContentSectionContentTypo>{groupDescription}</ContentSectionContentTypo>
        </ContentSectionContainer>
        <ContentSectionContainer>
          <ContentSectionTitleTypo>그룹장</ContentSectionTitleTypo>
          <ContentSectionContentContainer>
            <Avatar size={20} icon={<UserOutlined />} style={{ marginLeft: 2 }} />
            <ContentSectionContentTypo>{groupLeader}</ContentSectionContentTypo>
          </ContentSectionContentContainer>
        </ContentSectionContainer>
        <ContentSectionContainer>
          <ContentSectionTitleTypo>크롤링 출처 사이트</ContentSectionTitleTypo>
          <ContentSectionSiteContainer>
            {crawlingSites.map((site, index) => (
              <ContentSectionSiteWrapper key={index}>
                <ContentSectionSiteTypo>{site}</ContentSectionSiteTypo>
                <Button
                  type="link"
                  onClick={() => removeCrawlingSite(site)}
                  style={{ color: '#f007', marginLeft: 10 }}
                >
                  삭제
                </Button>
              </ContentSectionSiteWrapper>
            ))}
          </ContentSectionSiteContainer>
          <Input
            placeholder="새로운 크롤링 사이트 URL을 입력하세요."
            value={newSite}
            onChange={(e) => setNewSite(e.target.value)}
            style={{ marginTop: 10 }}
          />
          <Button type="primary" onClick={addCrawlingSite} style={{ marginTop: 10 }}>
            추가
          </Button>
        </ContentSectionContainer>
        <ContentSectionContainer>
          <ContentSectionTitleTypo>카테고리</ContentSectionTitleTypo>
          <ContentSectionCategoryChipContainer>
            {categories.map((categoryItem, index) => (
              <ContentSectionCategoryChip
                key={`category_item_${index}`}
                style={{ backgroundColor: pastelColorPairs[index % 10].background }}
                onClick={() => toggleCategory(categoryItem)}
              >
                                <ContentSectionCategoryChipTypo style={{ color: pastelColorPairs[index % 10].text }}>
                  {categoryItem}
                </ContentSectionCategoryChipTypo>
              </ContentSectionCategoryChip>
            ))}
          </ContentSectionCategoryChipContainer>
          <ContentSectionContainer>
            <ContentSectionTitleTypo>선택된 카테고리</ContentSectionTitleTypo>
            <ContentSectionCategoryChipContainer>
              {selectedCategories.map((category, index) => (
                <ContentSectionCategoryChip key={`selected_category_${index}`} style={{ backgroundColor: '#e0e0e0' }}>
                  <ContentSectionCategoryChipTypo>{category}</ContentSectionCategoryChipTypo>
                </ContentSectionCategoryChip>
              ))}
            </ContentSectionCategoryChipContainer>
            {selectedCategories.length > 0 && (
              <Button onClick={clearSelectedCategories} style={{ color: '#f007', marginTop: 10 }}>
                선택된 카테고리 삭제
              </Button>
            )}
          </ContentSectionContainer>
          <Input
            placeholder="새로운 카테고리를 입력하세요."
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            style={{ marginTop: 10 }}
          />
          <Button type="primary" onClick={addCategory} style={{ marginTop: 10 }}>
            추가
          </Button>
        </ContentSectionContainer>
      </ContentContainer>
      <ContentButtonContainer>
        <ContentButton type={'primary'} size={'large'}>
          변경내용 저장
        </ContentButton>
      </ContentButtonContainer>
    </Root>
  );
};

