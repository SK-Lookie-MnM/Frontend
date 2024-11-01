import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
    ContentsTextBox1,
    ContentsTextContainer,
    MainContents,
    MainContentsWrapper,
    MainWrapper,
    TextLogo,
    StyledImage
} from "./Union.style.jsx";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {ContentsImg, ContentsTextBox2, ImgBox, ImgContainer, ImgDescription} from "../mainpage/mainpage.style";
import img1 from "../../assets/Union/union_1.png";
import img2 from "../../assets/Union/union_2.png";
import img3 from "../../assets/Union/union_3.png";
import img4 from "../../assets/icon/Signup/Group2609363.png";

const Union = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // 애니메이션 지속 시간 (ms)
        });
    }, []);

    return (
        <MainWrapper>
            <MainContentsWrapper>
                <MainContents data-aos="fade-up">
                    <ContentsTextContainer>
                        <ContentsTextBox1>
                            <a> 본사 계열사 연합구조</a>
                        </ContentsTextBox1>
                    </ContentsTextContainer>
                    <ImgContainer>
                        <ImgBox>
                            <ContentsImg src={img1} />
                            <ImgDescription>일상 속 제로웨이스트</ImgDescription>
                            <ContentsTextBox2>
                                <a>언제 어느 대학이든</a>
                                <a>바로 적용 가능한 용이성</a>
                            </ContentsTextBox2>
                        </ImgBox>
                        <ImgBox>
                            <ContentsImg src={img2} />
                            <ImgDescription>대학 내 리필문화 확산</ImgDescription>
                            <ContentsTextBox2>
                                <a>본사의 전반적 운영 관리</a>
                                <a>계열사의 상세 현장 관리</a>
                            </ContentsTextBox2>
                        </ImgBox>
                        <ImgBox>
                            <ContentsImg src={img3} />
                            <ImgDescription>MZ세대 환경문화 독려</ImgDescription>
                            <ContentsTextBox2>
                            <a>단순히 하나의 캠퍼스에서</a>
                            <a>머무는 것이 캠코터 확산</a>
                            </ContentsTextBox2>
                        </ImgBox>
                    </ImgContainer>
                    <ContentsTextContainer>
                        <TextLogo><a>Cam;coder</a></TextLogo>
                        <span>는 동덕여자대학교에 본사를 두고 있으며</span>
                        <a>서울여대 | 세종대</a>
                        <a>2곳의 학교와 함께 프로젝트를 진행 중입니다. </a>
                    </ContentsTextContainer>
                    <StyledImage src={img4} />
                </MainContents>
            </MainContentsWrapper>
        </MainWrapper>
    );
};

export default Union;
