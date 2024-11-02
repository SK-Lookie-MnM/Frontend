//import { Autoplay, Pagination, Parallax } from "swiper/modules";
//import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
    BackgroundContainer,
    ContentsTextBox1, ContentsTextBox2,
    ContentsTextContainer,
    MainContentsWrapper,
    MainWrapper, StyledImage, StyledLogo, TextBold, TextContainer, TextLogo,
    TextWrapper,
    Title
} from "./Union.style";
import {
    CoderBtn,
    ContentsImg, Dot1, Dot2,
    DotPatternContainer, DotPatternContainer2,
    ImgBox,
    ImgContainer,
    ImgDescription,
    TogetherContainer, TogetherText, TogetherTitle,
    TogetherWrapper
} from "../mainpage/mainpage.style";
import img1 from "../../assets/Union/union_1.png";
import img2 from "../../assets/Union/union_2.png";
import img3 from "../../assets/Union/union_3.png";
import img4 from "../../assets/icon/Signup/Group2609363.png";
import img_c1 from "../../assets/Union/cam1.png";
import img_c2 from "../../assets/Union/cam2.png";
import img_c3 from "../../assets/Union/cam3.png";

const Union = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // 애니메이션 지속 시간 (ms)
        });
    }, []);

    return (
        <MainWrapper>
            <MainContentsWrapper>
                <BackgroundContainer>
                <Title>
                    <TextWrapper>
                        <ContentsTextContainer>
                            <ContentsTextBox1>
                                <TextBold>본사 계열사 연합구조</TextBold>
                            </ContentsTextBox1>
                        </ContentsTextContainer>
                    </TextWrapper>
                </Title>

                <ImgContainer>
                    <ImgBox>
                        <ContentsImg src={img1}/>
                        <ImgDescription>일상 속 제로웨이스트</ImgDescription>
                        <ContentsTextBox2>
                            <a>언제 어느 대학이든</a>
                            <a>바로 적용 가능한 용이성</a>
                        </ContentsTextBox2>
                    </ImgBox>
                    <ImgBox>
                        <ContentsImg src={img2}/>
                        <ImgDescription>대학 내 리필문화 확산</ImgDescription>
                        <ContentsTextBox2>
                            <a>본사의 전반적 운영 관리</a>
                            <a>계열사의 상세 현장 관리</a>
                        </ContentsTextBox2>
                    </ImgBox>
                    <ImgBox>
                        <ContentsImg src={img3}/>
                        <ImgDescription>MZ세대 환경문화 독려</ImgDescription>
                        <ContentsTextBox2>
                            <a>단순히 하나의 캠퍼스에서</a>
                            <a>머무는 것이 캠코터 확산</a>
                        </ContentsTextBox2>
                    </ImgBox>
                </ImgContainer>
                </BackgroundContainer>

                <ContentsTextContainer>
                    <TextContainer>
                    <TextLogo>Cam;coder</TextLogo> 는 동덕여자대학교에 본사를 두고 있으며
                    </TextContainer>
                    <a>서울여대 | 세종대</a>
                    <a>2곳의 학교와 함께 프로젝트를 진행 중입니다. </a><p/>
                    <StyledLogo src={img4}/><p/>

                    <ContentsTextBox1>
                        <TextBold>[우리의 가치에 동참하는 가족들]</TextBold>
                    </ContentsTextBox1>
                    <ImgDescription>본사</ImgDescription><p/>
                    <StyledImage src={img_c1}/><p/>
                    <ImgDescription>연합사</ImgDescription><p/>
                    <TextContainer>
                        <StyledImage src={img_c2}/>
                        <StyledImage src={img_c3}/>
                    </TextContainer>
                </ContentsTextContainer>

                <TogetherWrapper>
                    <DotPatternContainer>
                        {[...Array(35)].map((_, index) => (
                            <Dot1 key={index}/>
                        ))}
                    </DotPatternContainer>
                    <DotPatternContainer2>
                        {[...Array(35)].map((_, index) => (
                            <Dot2 key={index}/>
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
            </MainContentsWrapper>
        </MainWrapper>
    );
};

export default Union;
