import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
    ContentsTextBox1,
    ContentsTextContainer,
    MainContents,
    MainContentsWrapper,
    MainWrapper
} from "./Union.style.jsx";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {ContentsImg, ImgBox, ImgContainer, ImgDescription} from "../mainpage/mainpage.style";
import img1 from "../../assets/Union/union_1.png";
import img2 from "../../assets/Union/union_2.png";
import img3 from "../../assets/Union/union_3.png";

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
        </MainWrapper>
    );
};

export default Union;
