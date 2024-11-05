// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// eslint-disable-next-line no-unused-vars
import React from 'react';
import {
    BannerContainer,
    BannerBold,
    BannerText,
    TextLogo,
    MainWrapper,
    CoderBtn,
    BMImg,
    CampaignContainer,
    TextSection,
    CampaignTitle,
    CampaignText,
    ImageSection,
    CampaignImage,
    ImageSection2,
    TextSection2,
    ContentsTextBold,
    ContentsTextBox1,
    TextRow,
    ContentsTextBox2,
    InstagramContainer,
    InstagramTitle,
    ProfileSection,
    ProfileImage,
    ProfileName,
    GalleryGrid,
    GalleryImage,
    Title,
    Container,
    Subtitle,
    OrgChart,
    MainBranch,
    BranchesContainer,
    Branch,
    FooterText,
    LineContainer,
    CampaignImage2,
    ContainerBack,
    ContentsTextBox3,
    CampaignImage3,
    CampaignContainer2,
    CampaignBold
} from './BM.style';
import bm1 from "../../assets/BM/bm1.png";
import mnm from "../../assets/BM/mnm.png";
import swwu from "../../assets/BM/swwu.png";
import sj from "../../assets/BM/sj.png";
import line from "../../assets/BM/line.png";
import campaignImage from "../../assets/BM/campaign.png";
import profilePic from '../../assets/BM/instagram/logo.png'; // 프로필 이미지 경로
import img1 from '../../assets/BM/instagram/insta1.png';
import img2 from '../../assets/BM/instagram/insta2.png';
import img3 from '../../assets/BM/instagram/insta3.png';
import img4 from '../../assets/BM/instagram/insta4.png';
import img5 from '../../assets/BM/instagram/insta5.png';
import img6 from '../../assets/BM/instagram/insta6.png';
import img7 from '../../assets/BM/instagram/insta7.png';
import img8 from '../../assets/BM/instagram/insta8.png';
import img9 from '../../assets/BM/instagram/insta9.png';

const BM = () => {

    return (
        <MainWrapper>
        <BannerContainer>
            <BannerBold>
                일상 속, 지구를 위한 작은 실천 !<br/>
                친환경 고체 생활용품 소분 플랫폼<br/>
            </BannerBold>
            <BannerText>
                <br/><a>이론이 아닌 현실에 발 붙이고 서서 할 수 있는 작은 실천</a>
            </BannerText>
            <TextRow>
                <TextLogo>Cam;Coder</TextLogo>
                <ContentsTextBold>Project</ContentsTextBold>
            </TextRow>
        </BannerContainer>

            <CampaignContainer>
                <TextSection>
                    <ContentsTextBox1>
                        국내 최초 IN-CAMPUS 리필스테이션<br/>
                    </ContentsTextBox1>
                    <TextRow>
                        <TextLogo>Cam;Coder</TextLogo>
                        <ContentsTextBold>Project</ContentsTextBold>
                    </TextRow>
                    <ContentsTextBox2>
                <br/>캠코더 프로젝트는 생활반경 안에서
                <p/>누구나 실천가능 환경보호를 제안합니다. <br/><br/>
                <p/>환경보호에 대한 진입장벽을 낮추고
                <p/>Plastic Free 문화를 MZ세대로 확신하기 위한
                <p/><ContentsTextBox3>캠퍼스 기반 리필스테이션 !</ContentsTextBox3><p/>
                    </ContentsTextBox2>
            <CoderBtn>PDF 다운받기</CoderBtn>
            <CoderBtn>함께 코더하기</CoderBtn>
        </TextSection>
            <ImageSection>
            <BMImg src={bm1}></BMImg>
            </ImageSection>
            </CampaignContainer>

            <ContainerBack>
            <Container>
                <Title>Business Model</Title>
                <Subtitle>서울권 연합 본사-계열사 구조로 운영</Subtitle>

                <OrgChart>
                    <MainBranch><CampaignImage src={mnm} alt="Our Campaign" /></MainBranch>
                    <LineContainer>
                        <CampaignImage2 src={line} alt="Our Campaign" />
                    </LineContainer>
                    <BranchesContainer>
                        <Branch><CampaignImage2 src={swwu} alt="Our Campaign" /></Branch>
                        <Branch><CampaignImage2 src={sj} alt="Our Campaign" /></Branch>
                    </BranchesContainer>
                </OrgChart>

                <FooterText>
                    각 대학별 운영진은 먼저 본교 내에서 학생들이 가장 많이 오가는 &#39;핵심 장소&#39;를 선정합니다.
                    <br/>
                    그곳에 저희의 고체 세계 가치를 설치하고, 학생들이 편리하게 이용할 수 있도록 관리합니다.
                    <br/>
                    운영진은 세계 공급 상태와 기계의 유지 보수를 철저히 관리하고, 본사는 이 진행 상황을
                    체계적으로 체크하면서 일괄한 운영을 지원합니다.
                </FooterText>
            </Container>
            </ContainerBack>

            <CampaignContainer2>
                <TextSection2>
                    <CampaignTitle>Our Campaign</CampaignTitle>
                    <CampaignText>
                        2024 동덕여자대학교 대동제에서 우리는 특별한 환경 캠페인을 펼쳤습니다!<br/>
                        <CampaignBold>
                            동덕여대 환경지기 x 리필스테이션 &#39;일상공감&#39; x SK LOOKIE MNM<br/>
                        </CampaignBold>
                        3대 연합이 힘을 모아, 캠퍼스에 새로운 바람을 불러일으켰습니다.
                        <br/><br/>
                        축제 현장에서는 환경 인식을 높이기 위한 특별 부스를 운영했는데요<br/>
                        <CampaignBold>
                            특히 이번에는 만 5세 어린이집 아이들을 초대해 환경 인식을 높이기 위한<br/>
                            환경교육을 진행하는 뜻깊은 시간을 가졌습니다.
                        </CampaignBold>
                        <br/><br/>
                        아이들이 자연스럽게 환경의 중요성을 배우고, 작은 실천으로도 큰 변화를<br/>
                        만들 수 있다는 메시지를 전달했습니다.
                        <br/><br/>
                        이 경험이 어린아이들에게 환경을 생각하는 첫걸음이 되길 바라며, 대학생들과<br/>
                        지역사회가 함께하는 더욱 의미 있는 캠페인으로 발전해 나가고자 합니다!
                    </CampaignText>
                </TextSection2>
                <ImageSection2>
                    <CampaignImage3 src={campaignImage} alt="Our Campaign" />
                </ImageSection2>
            </CampaignContainer2>

            <InstagramContainer>
                <InstagramTitle>Instagram</InstagramTitle><br/><br/><br/>
                <ProfileSection>
                    <ProfileImage src={profilePic} alt="Profile" /><br/>
                    <ProfileName href="https://instagram.com/mnm_ddsl">@mnm_ddsl</ProfileName><br/>
                </ProfileSection>
                <GalleryGrid>
                    <GalleryImage src={img1} alt="Gallery Image 1" />
                    <GalleryImage src={img2} alt="Gallery Image 2" />
                    <GalleryImage src={img3} alt="Gallery Image 3" />
                    <GalleryImage src={img4} alt="Gallery Image 4" />
                    <GalleryImage src={img5} alt="Gallery Image 5" />
                    <GalleryImage src={img6} alt="Gallery Image 6" />
                    <GalleryImage src={img7} alt="Gallery Image 7" />
                    <GalleryImage src={img8} alt="Gallery Image 8" />
                    <GalleryImage src={img9} alt="Gallery Image 9" />
                </GalleryGrid>
            </InstagramContainer>
        </MainWrapper>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default BM;