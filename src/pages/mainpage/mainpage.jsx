import { Autoplay, Pagination, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import mainheaderImg1 from "../../assets/mainpage/image1.png";
import mainheaderImg2 from "../../assets/mainpage/image2.png";
import mainheaderImg3 from "../../assets/mainpage/image3.png";
import mainheaderImg4 from "../../assets/mainpage/image4.png";
import mainheaderImg5 from "../../assets/mainpage/image5.png";
import mainImgContent from "../../assets/mainpage/mainImgContents.png";
import mainImgBigLogo from "../../assets/mainpage/mainBigLog0.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  AboutUsContainer,
  AboutUsImg,
  AboutUsImgBox,
  AboutUsImgContainer,
  AboutUsImgSideContainer,
  AboutUsImgSideTextContainer,
  AboutUsImgSideTextbox1,
  AboutUsImgSideTextbox2,
  AboutUsImgSideTextbox3,
  AboutUsTitleBox,
  AboutUsWrapper,
  AboutusTitle,
  CoderBtn,
  ContentsImg,
  ContentsTextBold,
  ContentsTextBox1,
  ContentsTextBox2,
  ContentsTextContainer,
  DividingLine,
  Dot1,
  Dot2,
  DotPatternContainer,
  DotPatternContainer2,
  ImageTextBox1,
  ImageTextBox2,
  ImageTextBox3,
  ImageTextBox4,
  ImageTextContainer1,
  ImageTextContainer2,
  ImageTextContainer3,
  ImageWrapper,
  ImgBox,
  ImgContainer,
  ImgDescription,
  ImgSideBoxImg1,
  ImgSideBoxImg2,
  ImgSideBoxImg3,
  ImgSideText3,
  ImgSideTextBoxDes1,
  ImgSideTextBoxDes2,
  ImgSideTextBoxDes3,
  ImgSideTextBoxTitle1,
  ImgSideTextBoxTitle2,
  ImgSideTextBoxTitle3,
  InstaLogo,
  LineBold,
  LineLight,
  MainContents,
  MainContentsWrapper,
  MainHeaderSlide,
  MainValueContainer,
  MainValueWrapper,
  MainWrapper,
  MainheaderImg,
  MnmLogo,
  SideInstaLogo,
  TextBold,
  TextLight,
  TextLogo,
  TextWrapper,
  Title,
  TitleText,
  TitleTextBold,
  TogetherContainer,
  TogetherText,
  TogetherTitle,
  TogetherWrapper,
  ValueContetsBox,
  ValueImgBox,
  ValueImgContainer,
  ValueImgText,
  ValueImgTextBold,
  ValueText,
  ValueTextBold,
  ValueTextBox,
  ValueTextContainer,
  ValueTitle, HeaderTextContainer5, Img5TextBox1, SlideWrapper5,
} from "./mainpage.style.jsx";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import img1 from "../../assets/mainpage/mainpage_contents_1.png";
import img2 from "../../assets/mainpage/mainpage_contents_2.png";
import img3 from "../../assets/mainpage/mainpage_contents_3.png";
import valueImg1 from "../../assets/mainpage/value_img_1.png";
import valueImg2 from "../../assets/mainpage/value_img_2.png";
import valueImg3 from "../../assets/mainpage/value_img_3.png";
import mnmLogo from "../../assets/mainpage/MNM_Logo.png";
import aboutImg1 from "../../assets/mainpage/aboutus/AboutImg1.png";
import aboutImg2 from "../../assets/mainpage/aboutus/AboutImg2.png";
import aboutImg3 from "../../assets/mainpage/aboutus/AboutImg3.png";
import aboutImg4 from "../../assets/mainpage/aboutus/AboutImg4.png";
import instaLogo from "../../assets/mainpage/aboutus/about_us_ins.svg";
import MiniLogoM1 from "../../assets/mainpage/aboutus/about_us_M.svg";
import MiniLogoM2 from "../../assets/mainpage/aboutus/about_us_M2.svg";
import MiniLogoN from "../../assets/mainpage/aboutus/about_us_N.svg";
import { SlideWrapper } from "./mainpage.style.jsx";
import { HeaderTextContainer1 } from "./mainpage.style.jsx";
import { Img1TextBox1 } from "./mainpage.style.jsx";
import { Img1TextBox2 } from "./mainpage.style.jsx";
import { Img2TextBox1 } from "./mainpage.style.jsx";
import { SlideWrapper2 } from "./mainpage.style.jsx";
import { HeaderTextContainer2 } from "./mainpage.style.jsx";
import { Img2contentsBox } from "./mainpage.style.jsx";
import { Img3TextBox1 } from "./mainpage.style.jsx";
import { Img3TextBox } from "./mainpage.style.jsx";
import { Img3TextBox2 } from "./mainpage.style.jsx";
import { Img3TextBox3 } from "./mainpage.style.jsx";
import { HeaderTextContainer3 } from "./mainpage.style.jsx";
import { SlideWrapper3 } from "./mainpage.style.jsx";
import { HeaderTextContainer4 } from "./mainpage.style.jsx";
import { Img4TextBox1 } from "./mainpage.style.jsx";
import { Img4Img } from "./mainpage.style.jsx";
import { HeaderContainer4 } from "./mainpage.style.jsx";

const MainPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // 애니메이션 지속 시간 (ms)
    });
  }, []);

  return (
    <MainWrapper>
      <MainHeaderSlide>
        <Swiper
          modules={[Parallax, Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          resistanceRatio={0}
          watchOverflow={true}
        >
          <SwiperSlide>
            <SlideWrapper>
              <MainheaderImg src={mainheaderImg1} alt="img" />
              <HeaderTextContainer1>
                <Img1TextBox1>
                  <p>LESS BUT BETTER</p> WE GO TOGETHER
                </Img1TextBox1>
                <Img1TextBox2>
                  본질적인 가치에 집중하며 함께 더 나아지는 : 캠코더
                </Img1TextBox2>
              </HeaderTextContainer1>
            </SlideWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <SlideWrapper2>
              <MainheaderImg src={mainheaderImg2} alt="img" />
              <HeaderTextContainer2>
                <Img2TextBox1>
                  <p>
                    국내 최초 <a>IN-CAMPUS 리필스테이션</a>
                  </p>
                  <p>
                    Cam;Coder <a>project</a>
                  </p>

                  <p>
                    환경보호에 대한 <a>진입장벽을 낮추고</a>
                  </p>
                  <p>
                    Plastic Free 문화를 <a>MZ세대로 확산하기위한</a>
                  </p>
                  <p>캠퍼스 기반 리필스테이션 !</p>
                </Img2TextBox1>
                <Img2contentsBox src={mainImgContent}></Img2contentsBox>
              </HeaderTextContainer2>
            </SlideWrapper2>
          </SwiperSlide>
          <SwiperSlide>
            <SlideWrapper>
              <MainheaderImg src={mainheaderImg3} alt="img" />
              <HeaderTextContainer3>
                <Img3TextBox>
                  <Img3TextBox1>
                    <p>일상 속, 지구를 위한 작은 실천 ! </p>
                    <p>친환경 고제 생활용품 소분 플랫폼</p>
                  </Img3TextBox1>
                  <Img3TextBox2>
                    <p>
                      이론이 아닌 현실에 발 붙이고 서서 할 수 있는 작은 실천
                    </p>
                  </Img3TextBox2>
                  <Img3TextBox3>
                    <p>
                      Cam;Coder <a>project</a>
                    </p>
                  </Img3TextBox3>
                </Img3TextBox>
              </HeaderTextContainer3>
            </SlideWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <SlideWrapper3>
              <MainheaderImg src={mainheaderImg4} alt="img" />
              <HeaderContainer4>
                <HeaderTextContainer4>
                  <Img4Img src={mainImgBigLogo} />
                  <Img4TextBox1>
                    <p>그 누구도 상상 못했던 혁신</p>
                    <p>
                      이제 <a>Cam;Coder</a>가 시작합니다.
                    </p>
                  </Img4TextBox1>
                </HeaderTextContainer4>
              </HeaderContainer4>
            </SlideWrapper3>
          </SwiperSlide>
        <SwiperSlide>
          <SlideWrapper5>
            <MainheaderImg src={mainheaderImg5} alt="img" />
              <HeaderTextContainer5>
                <Img5TextBox1>
                  <p>재밌고, 간편하지만 확실한 환경보호는 없을까?</p>
                  <p>캠코더가 찾아낸 지속가능한 혁신적 대안</p>
                </Img5TextBox1>
              </HeaderTextContainer5>
          </SlideWrapper5>
        </SwiperSlide>
      </Swiper>
      </MainHeaderSlide>
      <MainContentsWrapper>
        <MainContents data-aos="fade-up">
          <LineBold />
          <Title>
            <TextWrapper>
              <TextBold>캠</TextBold>
              <TextLight>퍼스에 </TextLight>
              <TextBold>에</TextBold>
              <TextLight>코를 </TextLight>
              <TextBold>더</TextBold>
              <TextLight>하다</TextLight>
            </TextWrapper>
            <TextLogo>camcoder</TextLogo>
          </Title>
          <LineLight />
          <ContentsTextContainer>
            <ContentsTextBox1>
              <a> 캠코더 프로젝트는</a>{" "}
              <ContentsTextBold>
                국내 최초 IN-CAMPUS 리필스테이션으로
              </ContentsTextBold>
              <p>
                생활반경안에서 누구나 실천 가능한 환경 보호를 목표로 합니다.{" "}
              </p>
            </ContentsTextBox1>
            <ContentsTextBox2>
              <a>또한, 환경 보호에 대한 진입장벽을 낮추고</a>
              <a>Plastic Free 문화를 MZ세대로 확산시키기 위해 노력합니다. </a>
            </ContentsTextBox2>
          </ContentsTextContainer>
          <ImgContainer>
            <ImgBox>
              <ContentsImg src={img1} />
              <ImgDescription>일상 속 제로웨이스트</ImgDescription>
            </ImgBox>
            <ImgBox>
              <ContentsImg src={img2} />
              <ImgDescription>대학 내 리필문화 확산</ImgDescription>
            </ImgBox>
            <ImgBox>
              <ContentsImg src={img3} />
              <ImgDescription>MZ세대 환경문화 독려</ImgDescription>
            </ImgBox>
          </ImgContainer>
        </MainContents>
      </MainContentsWrapper>
      <MainValueWrapper>
        <MainValueContainer
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <ValueTextContainer>
            <ValueTitle>
              <TitleText>Core Value</TitleText>
              <TitleTextBold>가치관</TitleTextBold>
            </ValueTitle>
            <ValueContetsBox>
              <ValueText>
                작은 실천이 모여 큰 변화를 만드는{" "}
                <ValueTextBold>지속 가능성</ValueTextBold>, 함께할 때 더 큰 힘을
                발휘하는 <ValueTextBold>참여와 연대</ValueTextBold>
              </ValueText>
              <ValueText>
                일상 속에서 지속 가능한{" "}
                <ValueTextBold>혁신적 변화</ValueTextBold>이 세가지의 가치를
                두고 캠코더를 진행합니다.{" "}
              </ValueText>
            </ValueContetsBox>
          </ValueTextContainer>
          <ValueImgContainer>
            <ValueImgBox>
              <img src={valueImg1} />
              <ValueTextBox>
                <ValueImgTextBold>지속가능성</ValueImgTextBold>
                <ValueImgText>Sustainability</ValueImgText>
              </ValueTextBox>
            </ValueImgBox>
            <ValueImgBox>
              <img src={valueImg2} />
              <ValueTextBox>
                <ValueImgTextBold>연대의 힘</ValueImgTextBold>
                <ValueImgText>Solidarity</ValueImgText>
              </ValueTextBox>
            </ValueImgBox>
            <ValueImgBox>
              <img src={valueImg3} />
              <ValueTextBox>
                <ValueImgTextBold>혁신적 도전</ValueImgTextBold>
                <ValueImgText>Innovation</ValueImgText>
              </ValueTextBox>
            </ValueImgBox>
          </ValueImgContainer>
        </MainValueContainer>
      </MainValueWrapper>
      <DividingLine>LESS BUT BETTER</DividingLine>
      <AboutUsWrapper>
        <AboutUsContainer>
          <AboutUsTitleBox>
            <MnmLogo src={mnmLogo} alt="mnm_logo" />
            <AboutusTitle>ABOUT US</AboutusTitle>
          </AboutUsTitleBox>
          <AboutUsImgContainer>
            <AboutUsImgBox>
              <ImageWrapper>
                <AboutUsImg src={aboutImg1}></AboutUsImg>
                <ImageTextContainer1>
                  <ImageTextBox1>
                    <p>MNM </p>
                    <p>: Make n Move</p>{" "}
                  </ImageTextBox1>
                  <ImageTextBox2>
                    <a>직접 움직이며 발로 뛰는</a>
                    <a>Team MNM</a>
                  </ImageTextBox2>
                </ImageTextContainer1>
              </ImageWrapper>
              <ImageWrapper>
                <AboutUsImg src={aboutImg4} />
                <ImageTextContainer2>
                  <ImageTextBox3>
                    <a>동덕여자대학교</a>
                    <a>SK LOOKIE ㅣ DDSL</a>
                  </ImageTextBox3>
                  <InstaLogo src={instaLogo} />
                </ImageTextContainer2>
              </ImageWrapper>
              <ImageWrapper>
                <AboutUsImg src={aboutImg2} />
                <ImageTextContainer3>
                  <ImageTextBox4>
                    <p>SK LOOKIE</p>
                    <p>
                      대학생의 독창적인 시각으로 사회문제를 해결하는 혁신적인
                      동아리입니다.
                    </p>
                  </ImageTextBox4>
                  <InstaLogo src={instaLogo} />
                </ImageTextContainer3>
              </ImageWrapper>
            </AboutUsImgBox>
            <AboutUsImgSideContainer>
              <AboutUsImg src={aboutImg3}></AboutUsImg>
              <AboutUsImgSideTextContainer>
                <AboutUsImgSideTextbox1>
                  <ImgSideTextBoxTitle1>
                    열정
                    <ImgSideBoxImg1 src={MiniLogoM1} />
                  </ImgSideTextBoxTitle1>
                  <ImgSideTextBoxDes1>
                    리필스테이션 사용자인척 수업끝날때마다 기웃거렸던
                  </ImgSideTextBoxDes1>
                </AboutUsImgSideTextbox1>
                <AboutUsImgSideTextbox2>
                  <ImgSideTextBoxTitle2>
                    <ImgSideBoxImg2 src={MiniLogoN} />
                    끈기
                  </ImgSideTextBoxTitle2>
                  <ImgSideTextBoxDes2>
                    많은 피버팅에도
                    <p>‘우리 다시해보자’라고 말하는</p>
                  </ImgSideTextBoxDes2>
                </AboutUsImgSideTextbox2>
                <AboutUsImgSideTextbox3>
                  <ImgSideTextBoxTitle3>팀분위기</ImgSideTextBoxTitle3>
                  <ImgSideTextBoxDes3>
                    <ImgSideText3>
                      <p>무엇보다</p> <p>서로를</p> 배려하는 ‘말투’에 기반한
                    </ImgSideText3>
                    <ImgSideBoxImg3 src={MiniLogoM2} />
                  </ImgSideTextBoxDes3>
                </AboutUsImgSideTextbox3>
              </AboutUsImgSideTextContainer>
              <SideInstaLogo src={instaLogo} />
            </AboutUsImgSideContainer>
          </AboutUsImgContainer>
        </AboutUsContainer>
      </AboutUsWrapper>
      <TogetherWrapper>
        <DotPatternContainer>
          {[...Array(35)].map((_, index) => (
            <Dot1 key={index} />
          ))}
        </DotPatternContainer>
        <DotPatternContainer2>
          {[...Array(35)].map((_, index) => (
            <Dot2 key={index} />
          ))}
        </DotPatternContainer2>
        <TogetherContainer>
          <TogetherTitle>
            <p>Get started!</p>
          </TogetherTitle>
          <TogetherText>
            <p>캠코더를 원하는 어느 대학이든 MNM팀은 두팔 벌려 환영입니다.</p>
            <p>
              같이 <a>캠코더</a>해요!
            </p>
          </TogetherText>
          <CoderBtn>함께 코더하기</CoderBtn>
        </TogetherContainer>
      </TogetherWrapper>
    </MainWrapper>
  );
};

export default MainPage;
