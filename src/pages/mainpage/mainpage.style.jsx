import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export const MainHeaderSlide = styled.div`
  display: flex;
  width: 100%;
  height: 636px;
`;

export const SlideWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const SlideWrapper2 = styled.div`
  display: flex;
  position: relative;
  background-color: rgba(35, 68, 61, 1);
`;

export const SlideWrapper3 = styled.div`
  display: flex;
  position: relative;
  background-color: rgba(0, 0, 0, 1);
  align-items: center;
  justify-content: center;
`;
export const MainheaderImg = styled.img`
  width: 100%;
  height: 636px;
  object-fit: cover;
`;

export const HeaderTextContainer1 = styled.div`
  display: flex;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%); /* 중앙에 위치하게 설정 */
  flex-direction: column;
  width: 100%;
  height: 313px;
`;

export const Img1TextBox1 = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 556px;
  height: 200px;
  top: 0;
  left: 0;
  margin-left: 50px;
  line-height: 100px;
  font-family: "Hakgyoansim-Dunggeunmiso-B";
  color: rgba(255, 255, 255, 0.9);
  font-size: 60px;
  text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3); /* 그림자 추가 */
`;
export const Img1TextBox2 = styled.div`
  position: absolute;
  display: flex;
  width: 603px;
  height: 37px;
  font-family: "Pretendard-Light";
  color: rgba(255, 255, 255, 1);
  font-size: 30px;
  line-height: 36.6px;
  margin-right: 50px;
  bottom: 0; /* 아래쪽 끝에 위치 */
  right: 0; /* 왼쪽 끝에 위치 */
`;

export const HeaderTextContainer2 = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 중앙에 위치하게 설정 */
  width: 100%;
  height: 406.9px;
  align-items: center;
  justify-content: flex-start;
`;
export const Img2contentsBox = styled.img`
  display: flex;
  position: absolute;
  right: 0;
  margin-left: 278px; /* 왼쪽 여백 조정 */
  margin-right: 100px;
  width: 425px;
  height: 406.59px;
`;

export const Img2TextBox1 = styled.div`
  display: flex;
  position: absolute;
  text-align: left;
  flex-direction: column;
  justify-content: center;
  width: 704px;
  line-height: 38.9px;
  margin-left: 50px;

  left: 0;
  p:nth-child(1) {
    font-family: "Pretendard-Regular";
    font-size: 27.92px;
    color: rgba(255, 255, 255, 1);
  }
  p:nth-child(1) a {
    font-family: "Pretendard-Bold"; /* 원하는 폰트로 변경 */
    font-size: 27.92px; /* 동일한 크기 유지 또는 다른 크기 설정 */
    /* 다른 스타일 추가 가능 */
  }

  p:nth-child(2) {
    font-family: "Hakgyoansim-Dunggeunmiso-B";
    font-size: 72.29px;
    color: rgba(255, 255, 255, 1);
    padding-top: 68px;
    padding-bottom: 49px;
  }

  p:nth-child(2) a {
    font-family: "Hakgyoansim-Dunggeunmiso-R";
    font-size: 55.61px;
  }

  p:nth-child(3),
  p:nth-child(4) {
    font-family: "Pretendard-Regular";
    font-size: 23.89px;
    color: rgba(255, 255, 255, 1);
  }
  p:nth-child(3) a,
  p:nth-child(4) a {
    font-family: "Pretendard-Semi-Bold";
    color: rgba(180, 226, 205, 1);
  }

  p:nth-child(5) {
    font-family: "Pretendard-Semi-Bold";
    font-size: 23.89px;
    color: rgba(255, 255, 255, 1);
  }
`;

export const HeaderTextContainer3 = styled.div`
  display: flex;
  position: absolute;
  top: 50%; /* 세로 중앙 정렬 */
  transform: translateY(-50%); /* 중앙 정렬 보정 */
  margin-left: 200px;
`;

export const HeaderTextContainer5 = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    flex-direction: row;
`;
export const Img5TextBox1 = styled.div`
  font-family: "Pretendard-Semi-Bold";
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    width: 556px;
    height: 200px;
    bottom: 0; /* 아래쪽에 정렬 */
    right: 0;  /* 오른쪽에 정렬 */
    margin-right: 110px; /* 오른쪽 여백 */
    margin-bottom: 1.5rem;
    line-height: 50px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 30px;
    text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3); /* 그림자 추가 */
`;
export const SlideWrapper5 = styled.div`
    display: flex;
    position: relative;
`;

export const Img3TextBox1 = styled.div`
  font-family: "Pretendard-Semi-Bold";
  font-size: 30px;
  color: rgba(0, 0, 0, 1);
  line-height: 55px;
`;
export const Img3TextBox2 = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 30px;
  color: rgba(0, 0, 0, 1);
`;
export const Img3TextBox3 = styled.div`
  font-family: "Hakgyoansim-Dunggeunmiso-B";
  color: rgba(35, 68, 61, 1);
  font-size: 30px;
  a: nth-child(1) {
    font-family: "Hakgyoansim-Dunggeunmiso-R";
    color: rgba(193, 167, 142, 1);
  }
`;
export const Img3TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  width: 666px;
  height: 233px;
  gap: 25px;
`;
export const HeaderContainer4 = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 중앙에 위치하게 설정 */
  width: 100%;
`;

export const HeaderTextContainer4 = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 343px;
  margin: 50px;
  flex-direction: row;
  gap: 643px; /* Img4Img와 Img4TextBox1 간의 간격 설정 */
`;

export const Img4Img = styled.img`
  display: flex;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 382.91px;
  height: 322px;
`;
export const Img4TextBox1 = styled.div`
  position: absolute; /* 오른쪽 아래에 고정 */
  bottom: 0;
  right: 0;
  margin-left: 643px;
  width: 600px;
  height: 154px;
  display: flex;
  flex-direction: column;
  color: rgba(255, 255, 255, 1);
  line-height: 80px;
  text-align: right;
  p: nth-child(1) {
    font-family: "Pretendard-Semi-Bold";
    font-size: 40px;
  }
  p: nth-child(2) {
    font-family: "Pretendard-Regular";
    font-size: 45px;
  }
  p: nth-child(2) a {
    font-family: "Hakgyoansim-Dunggeunmiso-B";
    font-size: 45px;
    color: rgba(186, 229, 209, 1);
  }
`;

export const MainContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1417px;
`;
export const MainContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%; /* 전체 너비의 70%를 차지하게 설정 */
  margin: 46px;
  gap: 91px;
`;

export const LineBold = styled.div`
  width: 887px;
  border-top: 1.98px solid black; /* 두꺼운 선 */
`;

export const LineLight = styled.div`
  width: 887px;
  border-top: 0.95px solid black; /* 두꺼운 선 */
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TextWrapper = styled.div``;

export const TextLight = styled.a`
  font-family: "Pretendard-Light";
  font-size: 25px;
  color: #8b8b8b;
`;

export const TextBold = styled.a`
  font-family: "Pretendard-Semi-Bold";
  font-size: 34.51px;
  color: rgba(35, 68, 61, 1);
`;

export const TextLogo = styled.p`
  font-family: "Hakgyoansim-Dunggeunmiso-B";
  font-size: 34.51px;
  color: rgba(35, 68, 61, 1);
`;

export const ContentsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard-Regular";
  font-size: 24.16px;
  gap: 32.8px;
`;

export const ContentsTextBox1 = styled.div``;

export const ContentsTextBold = styled.a`
  font-family: "Pretendard-Semi-Bold";
  color: rgba(175, 149, 122, 1);
`;

export const ContentsTextBox2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 85px;
`;

export const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 43px;
`;

export const ContentsImg = styled.img``;

export const ImgDescription = styled.a`
  font-family: "Pretendard-Semi-Bold";
  font-size: 25.81px;
  color: rgba(35, 68, 61, 1);
`;

export const MainValueWrapper = styled.div`
  width: 100%;
  height: 1100px;
  background-color: rgba(12, 69, 54, 1);
`;

export const MainValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 130px;
  gap: 105px;
`;

export const ValueTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 46px;
`;

export const ValueContetsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 1);
`;

export const ValueText = styled.a`
  font-family: "Pretendard-Regular";
  font-size: 30px;
`;
export const ValueTextBold = styled.a`
  font-family: "Pretendard-Semi-Bold";
  font-size: 30px;
`;
export const ValueTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 47px;
  color: rgba(255, 255, 255, 1);
`;

export const TitleText = styled.a`
  font-family: "Pretendard-Medium";
  font-size: 28px;
`;
export const TitleTextBold = styled.a`
  font-family: "Pretendard-Semi-Bold";
  font-size: 40px;
`;

export const ValueImgContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;
`;

export const ValueImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 341px;
  height: 405px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 50px rgba(193, 167, 142, 0.5);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease; /* 부드러운 전환 효과 */

  &:hover {
    transform: scale(1.05); /* 1.05배 확대 */
    box-shadow: 0px 10px 60px rgba(193, 167, 142, 0.6);
  }
`;

export const ValueTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 26px;
  gap: 26px;
`;

export const ValueImgText = styled.a`
  font-family: "Pretendard-Medium";
  font-size: 25px;
  color: rgba(35, 68, 61, 1);
`;
export const ValueImgTextBold = styled.a`
  font-family: "Pretendard-Semi-Bold";
  font-size: 28px;
`;

export const MainCooperationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 858px;
`;

export const MainCooperationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1250px;
  height: 446px;
  gap: 110px;
`;

export const CooperationText = styled.a`
  display: flex;
  font-family: "Pretendard-Semi-Bold";
  font-size: 40px;
`;

export const MainCooperation = styled.div`
  display: flex;
  flex-wrap: no wrap;
  justify-content: center;
  width: 100%;
  height: 276px;
  gap: 80px;
`;

export const CircleWrapper = styled.div`
  width: 180px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #f0f0f0; /* 배경 색 지정 */

  &:nth-child(odd) {
    transform: translateY(-45px); /* 지그재그 효과: 홀수번째 요소는 아래로 */
  }

  &:nth-child(even) {
    transform: translateY(45px); /* 지그재그 효과: 짝수번째 요소는 위로 */
  }
`;

export const LogoImage = styled.img`
  width: 65%;
  height: 65%;
  object-fit: contain; /* 이미지 비율 유지하며 잘리지 않도록 설정 */
`;

export const DividingLine = styled.div`
  display: flex;
  width: 100%;
  height: 126px;
  background-color: rgba(12, 69, 54, 1);
  justify-content: center;
  align-items: center;
  font-family: "Hakgyoansim-Dunggeunmiso-R";
  font-size: 28px;
  color: rgba(255, 255, 255, 0.8);
`;

// AboutUs 부분
export const AboutUsWrapper = styled.div`
  width: 100%;
  height: 1201px;
`;

export const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 171px 0;
  width: 100%;
  height: 782px;
  gap: 105px;
`;

export const AboutUsTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 201px;
  height: 116px;
  font-family: "Pretendard-Bold";
  font-size: 40px;
  gap: 32px;
`;

export const MnmLogo = styled.img`
  width: 53.66px;
  height: 18.51px;
`;

export const AboutusTitle = styled.a`
  color: rgba(35, 68, 61, 1);
`;

export const AboutUsImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 560px;
  gap: 19px;
`;
export const AboutUsImgBox = styled.div`
  display: flex;
  width: 897px;
  height: 560px;
  flex-wrap: wrap;
  div:nth-child(2) {
    padding-top: 21px; /* 원하는 패딩 값 설정 */
  }
  div:nth-child(3) {
    padding-top: 21px;
    padding-left: 22px; /* 원하는 패딩 값 설정 */
  }
`;

export const ImageWrapper = styled.div`
  position: relative; /* 자식 요소인 텍스트와 이미지를 위한 기준점 설정 */
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ImageTextContainer1 = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 849px;
  height: 210px;
  padding: 5px; /* 텍스트 주변에 여백 추가 */
`;
export const ImageTextBox1 = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute; /* 부모 요소인 ImageTextContainer1 기준으로 위치 */
  top: 0; /* 상단으로 정렬 */
  left: 0; /* 왼쪽으로 정렬 */
  color: rgba(35, 68, 61, 1);
  p:nth-child(1) {
    font-family: "Pretendard-Semi-Bold";
    font-size: 30px;
  }
  p:nth-child(2) {
    font-family: "Pretendard-Regular";
    font-size: 30px;
  }
`;
export const ImageTextBox2 = styled.div`
  position: absolute; /* 부모 요소인 ImageTextContainer1 기준으로 위치 */
  font-family: "Pretendard-Regular";
  color: rgba(255, 255, 255, 1);
  a:nth-child(1) {
    font-size: 28px;
  }
  a:nth-child(2) {
    font-family: "Pretendard-Regular";
    font-size: 50px;
  }
  bottom: 0;
  right: 0;
`;

export const ImageTextContainer2 = styled.div`
  position: absolute;
  width: 236px;
  height: 244px;
`;

export const ImageTextContainer3 = styled.div`
  position: absolute;
  right: 0;
  margin: 30px;
  width: 383px;
  height: 244px;
`;

export const ImageTextBox3 = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  font-family: "Pretendard-Semi-Bold";
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
  top: 0; /* 상단으로 정렬 */
  left: 0; /* 왼쪽으로 정렬 */
`;

export const ImageTextBox4 = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  font-size: 19px;
  align-items: flex-end; /* 자식 텍스트 요소를 오른쪽으로 정렬 */
  text-align: right;
  p:nth-child(1) {
    font-family: "Pretendard-Semi-Bold";
  }
  p:nth-child(2) {
    font-family: "Pretendard-Medium";
  }
`;

export const InstaLogo = styled.img`
  position: absolute;
  width: 31px;
  height: 31px;
  bottom: 0;
  right: 0;
`;

export const SideInstaLogo = styled.img`
  position: absolute; /* 부모 요소를 기준으로 위치를 조정 */
  left: 0; /* 오른쪽 끝에 정렬 */
  bottom: 0; /* 아래쪽 끝에 정렬 */
  margin: 20px;
`;
export const AboutUsImgSideContainer = styled.div`
  display: flex;
  width: 285px;
  height: 560px;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const AboutUsImgSideTextContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 229px;
  height: 499.81px;
  gap: 8px;
`;

export const AboutUsImgSideTextbox1 = styled.div`
  display: flex;
  margin-right: auto;
  flex-direction: column;
  width: 162px;
  height: 90px;
  gap: 8px;
`;

export const ImgSideTextBoxTitle1 = styled.div`
  display: flex;
  font-family: "Pretendard-ExtraBold";
  font-size: 30px;
  color: rgba(155, 108, 92, 1);
  width: 67px;
  height: 42px;
`;

export const ImgSideTextBoxDes1 = styled.div`
  font-family: "Pretendard-Medium";
  font-size: 15px;
`;

export const ImgSideBoxImg1 = styled.img`
  display: flex;
  width: 12px;
  height: 14.6px;
`;
export const ImgSideBoxImg2 = styled.img`
  display: flex;
  width: 11px;
  height: 10.69px;
`;
export const ImgSideBoxImg3 = styled.img`
  position: relative; /* 현재 위치를 기준으로 조정 */
  right: -5px; /* 위쪽으로 10px 이동 */
  align-self: flex-end; /* 이미지가 왼쪽에 정렬되도록 설정 (필요한 경우) */
  width: 20px;
  height: 23.824px;
`;
export const AboutUsImgSideTextbox2 = styled.div`
  display: flex;
  margin-left: auto;
  margin-top: 79px;
  flex-direction: column;
  width: 170px;
  height: 66px;
`;

export const ImgSideTextBoxTitle2 = styled.div`
  display: flex;
  margin-left: auto;
  position: relative;
  font-family: "Pretendard-ExtraBold";
  font-size: 30px;
  color: rgba(155, 50, 50, 1);
  width: 66px;
  height: 39px;
`;

export const ImgSideTextBoxDes2 = styled.div`
  width: 179px;
  height: 40px;
  position: relative;
  top: -10px;
  font-family: "Pretendard-Medium";
  font-size: 15px;
`;
export const AboutUsImgSideTextbox3 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 93px;
  width: 193px;
  height: 62px;
`;
export const ImgSideTextBoxDes3 = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  width: 173px;
  height: 60px;
  font-family: "Pretendard-Medium";
  font-size: 15px;
`;

export const ImgSideText3 = styled.div`
  text-align: right; /* 텍스트를 왼쪽으로 정렬 */
`;
export const ImgSideTextBoxTitle3 = styled.div`
  display: flex;
  position: relative;
  bottom: -33px;
  font-family: "Pretendard-ExtraBold";
  font-size: 30px;
  color: rgba(35, 68, 61, 1);
`;

export const AboutUsImg = styled.img``;

export const TogetherWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* 수직 가운데 정렬을 위해 추가 */
  width: 100%;
  height: 600px;
  background-color: rgba(232, 238, 234, 1);
  position: relative; /* 위치 설정 */
  clip-path: inset(0px 0px 0px 0px);
`;

export const TogetherContainer = styled.div`
  display: flex;
  position: absolute; /* 위치 기준 설정 */
  z-index: 2; /* 도트 패턴 위에 콘텐츠가 표시되도록 설정 */
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AboutTextBox = styled.div``;

export const TogetherTitle = styled.div`
  width: 215px;
  height: 55px;
  font-family: "Pretendard-Bold";
  font-size: 36.58px;
`;

export const TogetherText = styled.div`
  display: flex;
  margin-top: 54px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 806px;
  height: 101px;
  color: rgba(35, 68, 61, 1);
  font-size: 32.01px;
  font-family: Pretendard-Medium;  
  a: nth-child(1) {
    font-family: Pretendard-Bold;
  }
`;

export const CoderBtn = styled.button`
  font-family: "Pretendard-Bold";
  margin-top: 79px;
  font-size: 27.44px;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(35, 68, 61, 1);
  width: 251.78px;
  height: 68.67px;
  border-radius: 9.77px;
`;

export const DotPatternContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 10px); /* 가로 7개, 각 도트의 너비는 10px */
  grid-template-rows: repeat(5, 10px); /* 세로 5개, 각 도트의 높이는 10px */
  grid-column-gap: 38.83px; /* 가로 간격 */
  grid-row-gap: 52px; /* 세로 간격 */
  width: 318px;
  height: 205px;
  position: absolute;
  top: -67px;
  left: 150px;
  z-index: 1;
`;

export const Dot1 = styled.div`
  width: 12.14px; /* 도트의 너비 */
  height: 12.14px; /* 도트의 높이 */
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%; /* 도트를 원형으로 설정 */
`;

export const DotPatternContainer2 = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 10px); /* 가로 7개, 각 도트의 너비는 10px */
  grid-template-rows: repeat(5, 10px); /* 세로 5개, 각 도트의 높이는 10px */
  grid-column-gap: 38.83px; /* 가로 간격 */
  grid-row-gap: 52px; /* 세로 간격 */
  width: 318px;
  height: 205px;
  position: absolute;
  bottom: -8px;
  right: -18px;
  z-index: 1;
`;

export const Dot2 = styled.div`
  width: 12.14px; /* 도트의 너비 */
  height: 12.14px; /* 도트의 높이 */
  background-color: rgba(35, 68, 61, 0.47);
  border-radius: 50%; /* 도트를 원형으로 설정 */
`;
