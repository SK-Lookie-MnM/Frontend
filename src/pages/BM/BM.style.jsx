// style.jsx
import styled from 'styled-components';
import bmBanner from '../../assets/BM/bmBanner.png';

// 배경 이미지가 있는 컨테이너 스타일
export const BannerContainer = styled.div`
  background-image: url(${bmBanner});
  background-size: cover;         /* 이미지가 컨테이너에 맞게 조정됨 */
  background-position: center;    /* 이미지가 가운데에 위치 */
  width: 100%;                    /* 전체 너비 사용 */
  height: 641px;                  /* 높이는 필요에 맞게 조정 */
  display: flex;
    align-items: flex-start;           /* 수직 방향으로 왼쪽 정렬 */
    justify-content: center;       /* 수평 방향으로 왼쪽 정렬 */
    flex-direction: column;
    padding-left: 7rem;             /* 전체 텍스트에 왼쪽 여백 */
`;

export const TextContainer = styled.div`
  margin-left: 20px;              /* 텍스트 왼쪽 여백 */
  color: white;                   /* 텍스트 색상 */
  font-size: 24px;                /* 텍스트 크기 */
  line-height: 1.5;
  display: flex;
  flex-direction: column;
`;

// 텍스트가 가운데에 오도록 할 경우 추가 스타일
export const BannerBold = styled.h1`
    font-family: "Pretendard-Bold";
  color: black;                 /* 텍스트 색상 */
  font-size: 36px;                /* 텍스트 크기 */
  font-weight: bold;
    margin-bottom: 0; /* 아래 여백 최소화 */
`;

export const BannerText = styled.div`
    font-family: "Pretendard-Regular";
    color: black;
    font-size: 25px;
    margin-top: 0; /* 위 여백 최소화 */
`;

export const TextLogo = styled.p`
  font-family: "Hakgyoansim-Dunggeunmiso-B";
  font-size: 45px;
  color: rgba(35, 68, 61, 1);
    margin-top: 30px;
`;

export const ContentsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard-Regular";
  font-size: 24.16px;
    margin: 50px;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export const ContentBM = styled.div`
    color:#F6F8F6;
    margin:50px;
`;

export const CoderBtn = styled.button`
  font-family: "Pretendard-Bold";
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(35, 68, 61, 1);
  width: 180.57px;
    height: 49.25px;
  border-radius: 9.77px;
    margin-top: 30px;
    margin-right: 15px;
`;

export const BMImg = styled.img`
    height: 449.53px;
    margin-top: 4rem;
`;

export const BMImg2 = styled.img`
width: 300px;
`;


export const CampaignContainer = styled.div`
  display: flex;
  align-items: flex-start;
    width: 65%; // 전체 화면의 80%만 사용
    margin: 0 auto; // 화면 가운데 정렬
  padding: 20px;
  background-color: #ffffff;
    margin-top: 10rem;
    margin-bottom: 10rem;
`;

export const CampaignContainer2 = styled.div`
  display: flex;
  align-items: flex-start;
    width: 90%; // 전체 화면의 80%만 사용
    margin: 0 auto; // 화면 가운데 정렬
  padding: 20px;
  background-color: #ffffff;
    margin-top: 10rem;
    margin-bottom: 10rem;
`;


export const TextSection = styled.div`
  flex: 2;
  margin-right: 20px;
`;

export const TextSection2 = styled.div`
  flex: 2;
  margin-right: 20px;
`;


export const CampaignTitle = styled.h2`
    font-family: "Pretendard-Bold";
  font-size: 30px;
  font-weight: bold;
  color: #23443D;
  margin-bottom: 25px;
    line-height: 45.7px;
`;

export const CampaignText = styled.p`
    font-family: "Pretendard-Regular";
  font-size: 25px;
  line-height: 38px;
  color: black;
`;

export const CampaignBold = styled.p`
    font-family: "Pretendard-Bold";
  font-size: 25px;
  line-height: 38px;
  color: black;
`;

export const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
    margin-left: 20rem;
`;

export const ImageSection2 = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
    margin-left: 3rem;
`;

export const CampaignImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 1000px;
  border-radius: 8px;
`;

export const CampaignImage2 = styled.img`
  width: 100%;
  height: auto;
  max-width: 1000px;
  border-radius: 8px;
`;

export const CampaignImage3 = styled.img`
  width: 744px;
  height: 515px;
    margin-top: 60px;
`;


export const ContentsTextBox1 = styled.div`
    font-family: "Pretendard-Regular";
    color: black;
    margin-bottom: 2.5rem;
    font-size: 25.1px;
    line-height: 29.96px;
`;

export const ContentsTextBox2 = styled.div`
    font-family: "Pretendard-Regular";
    color: black;
    margin-bottom: 30px;
    font-size: 20.08px;
    line-height: 28.7px;
`;

export const ContentsTextBox3 = styled.div`
    font-family: "Pretendard-Bold";
    color: #23443D;
    margin-bottom: 30px;
    font-size: 20.08px;
    line-height: 28.7px;
`;


export const ContentsTextBold = styled.a`
  font-family: "Hakgyoansim-Dunggeunmiso";
  color: rgba(175, 149, 122, 1);
    font-size: 30px;
    margin-left: 10px;
    margin-top: 40px; // 위 요소와의 간격을 설정
    display: block; // 한 줄 차지
`;

export const TextRow = styled.div`
  display: flex;
  align-items: center; // 수직 가운데 정렬
  gap: 10px; // 두 요소 사이 간격 설정
    margin-bottom: 20px;
`;

export const InstagramContainer = styled.div`
    font-family: "Pretendard-Bold";
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background: linear-gradient(to bottom, #ffffff, #f0f4f8);
    width: 100%;
`;

export const InstagramTitle = styled.h2`
    font-family: "Pretendard-Medium";
  font-size: 24px;
  color: #23443D;
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const ProfileName = styled.a`
  font-size: 18px;
  color: #3a3a3a;
  text-decoration: none;
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
  max-width: 600px;
    margin-top: 20px;
    margin-bottom: 15rem;
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
  background-color: #f9f9f9;
  padding: 20px;
    width: 80%;
`;

export const ContainerBack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
  background-color: #f9f9f9;
  padding: 150px;
    width: 100%;
`;

export const Title = styled.h1`
    font-family: "Pretendard-Bold";
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

export const Subtitle = styled.p`
    font-family: "Pretendard-Medium";
  font-size: 35px;
  color: #666;
  margin-bottom: 3rem;
  text-align: center;
    margin-top: 20px;
`;

export const OrgChart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainBranch = styled.div`
  padding: 15px 30px;
  border-radius: 8px;
  margin-bottom: 5rem;
    width: 394px;
    height: 110px;
`;

export const BranchesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 140%;
`;

export const Branch = styled.div`
  padding: 1px 30px;
  border-radius: 3px;
    width: 364px;
    height: 110px;
    margin-top: 0;
    margin-bottom: 4rem;
`;

export const LineContainer = styled.div`
    width: 600px;
    height: 154px;
`;

export const FooterText = styled.p`
    font-family: "Pretendard-Medium";
  font-size: 20px;
  color: #888;
  text-align: center;
  margin-top: 30px;
  line-height: 2;
`;
