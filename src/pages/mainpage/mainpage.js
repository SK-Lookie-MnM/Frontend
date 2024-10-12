import './mainpage.css';
import mainHeaderBackground1 from '../../assets/mainpage/mainheader_background.png';
import mainHeaderBackground2 from '../../assets/mainpage/mainheader_bg2.jpeg';
import mainHeaderBackground3 from '../../assets/mainpage/mainheader_bg3.jpeg';
import mainHeaderBackground4 from '../../assets/mainpage/mainheader_bg4.jpeg';
import mainHeaderBackground5 from '../../assets/mainpage/mainheader_bg5.jpeg';
import mainHeaderText from '../../assets/mainpage/mainheader_text.png';
import coderButton2 from '../../assets/mainpage/coder_button2.png';
import mainAbout from '../../assets/mainpage/main_about.png';
import coreValueBg from '../../assets/mainpage/corevalue_bg.png';
import coreImage from '../../assets/mainpage/core.png';
import coreAbout from '../../assets/mainpage/core_about.png';
import coreTitle from '../../assets/mainpage/core_title.png';
import title2 from '../../assets/mainpage/title_2.png';
import groupImage from '../../assets/mainpage/Group.png';
import lineImage from '../../assets/mainpage/line.png';
import mnmAboutUs from '../../assets/mainpage/mnm_aboutus.png';
import mnmAboutImg from '../../assets/mainpage/mnm_about_img.png';
import mnmInstagram from '../../assets/mainpage/mnm_instagram.png';
import instagramIcon from '../../assets/mainpage/instagram.png';
import ddslInstagram from '../../assets/mainpage/ddsl_instagram.png';
import lookieBg from '../../assets/mainpage/lookie_bg.png';
import getStarted from '../../assets/mainpage/getstarted.png';
import coderButton from '../../assets/mainpage/coder_button.png';
import group2609308 from '../../assets/mainpage/Group 2609308.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const MainPage = () => {
    return (
        <div className="main-container">
            <div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}  // Autoplay 모듈 추가
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{  // 5초마다 자동으로 슬라이드 변경
                        delay: 5000,  // 5초
                        disableOnInteraction: false  // 상호작용 후에도 자동 재생 유지
                    }}
                    allowTouchMove={false}  // 터치/드래그로 슬라이드를 넘기지 않게 함
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >

                <SwiperSlide>
                        <img src={mainHeaderBackground1} className="mainheader_bg1" alt="bg1"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={mainHeaderBackground2} className="mainheader_bg2" alt="bg2"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={mainHeaderBackground3} className="mainheader_bg3" alt="bg3"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={mainHeaderBackground4} className="mainheader_bg4" alt="bg4"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={mainHeaderBackground5} className="mainheader_bg5" alt="bg5"/>
                    </SwiperSlide>
                </Swiper>
                <img src={mainHeaderText} className="mainheader_text" alt="Main Header Text"/>
                <a href="https://forms.gle/YqSgkjhDM86mjX9N8" target="_blank" rel="noopener noreferrer"
                   className="coder_bt2">
                    <img src={coderButton2} className="button-img" alt="Coder Button 2"/>
                </a>
            </div>
            <div>
                <img src={mainAbout} className="main_about" alt="Main About"/>
            </div>
            <div>
                <img src={coreValueBg} className="corevalue_bg" alt="Core Value Background"/>
                <img src={coreImage} className="core" alt="Core Image"/>
                <img src={coreAbout} className="core_about" alt="Core About"/>
                <img src={coreTitle} className="core_title" alt="Core Title"/>
            </div>
            <div>
                <img src={title2} className="title_2" alt="Title 2"/>
                <img src={groupImage} className="group" alt="Group Image"/>
                <img src={lineImage} className="line" alt="Line Image"/>
            </div>
            <div>
                <img src={mnmAboutUs} className="mnm_aboutus" alt="MNM About Us"/>
                <img src={mnmAboutImg} className="mnm_aboutus_img" alt="MNM About Image"/>
                <img src={mnmInstagram} className="mnm_instagram" alt="MNM Instagram"/>
                <a href="https://www.instagram.com/mnm_ddsl?igsh=MWIydjVkcW40ZW8xaw==" target="_blank" rel="noopener noreferrer" className="instar_mnm">
                    <img src={instagramIcon} alt="Instagram Icon"/>
                </a>
                <img src={ddslInstagram} className="ddsl_instagram" alt="DDS Instagram"/>
                <a href="https://www.instagram.com/sklookie_ddwu?igsh=MTFkNzRiNGpod3JsbA==" target="_blank" rel="noopener noreferrer" className="instar_ddsl">
                    <img src={instagramIcon} alt="Instagram Icon"/>
                </a>
                <img src={lookieBg} className="lookie_bg" alt="Lookie Background"/>
                <a href="https://www.instagram.com/sklookie_ddwu?igsh=MTFkNzRiNGpod3JsbA==" target="_blank" rel="noopener noreferrer" className="instar_lookie">
                    <img src={instagramIcon} alt="Instagram Icon"/>
                </a>
                <a href="https://www.sklookie.com/" target="_blank" rel="noopener noreferrer" className="link_lookie">
                    <img src={group2609308} alt="Link Lookie"/>
                </a>
            </div>
            <div>
                <img src={getStarted} className="getstarted" alt="Get Started"/>
                <a href="https://forms.gle/YqSgkjhDM86mjX9N8" target="_blank" rel="noopener noreferrer" className="coder_bt">
                    <img src={coderButton} className="button-img" alt="Coder Button"/>
                </a>
            </div>
        </div>
    );
};

export default MainPage;
