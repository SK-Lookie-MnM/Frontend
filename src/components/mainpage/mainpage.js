import React from 'react';
import './mainpage.css';

const MainPage = () => {
    return (
        <div className="main-container">
            <div>
                <img src={require('../assets/mainpage/mainheader_background.png')} className="mainheader_bg"/>
                <img src={require('../assets/mainpage/mainheader_text.png')} className="mainheader_text"/>
                <a href="https://forms.gle/YqSgkjhDM86mjX9N8" target="_blank" rel="noopener noreferrer"
                   className="coder_bt2">
                    <img src={require('../assets/mainpage/coder_button2.png')} className="button-img"
                         alt="Coder Button"/>
                </a>
            </div>
            <div>
                <img src={require('../assets/mainpage/main_about.png')} className="main_about"/>
            </div>
            <div>
                <img src={require('../assets/mainpage/corevalue_bg.png')} className="corevalue_bg"/>
                <img src={require('../assets/mainpage/core.png')} className="core" />
                <img src={require('../assets/mainpage/core_about.png')} className="core_about" />
                <img src={require('../assets/mainpage/core_title.png')} className="core_title" />
            </div>
            <div>
                <img src={require('../assets/mainpage/title_2.png')} className="title_2" />
                <img src={require('../assets/mainpage/Group.png')} className="group" />
                <img src={require('../assets/mainpage/line.png')} className="line" />
                <img src={require('../assets/mainpage/LESS BUT BETTER.png')} className="line_2" />
            </div>
            <div>
                <img src={require('../assets/mainpage/mnm_aboutus.png')} className="mnm_aboutus"/>
                <img src={require('../assets/mainpage/mnm_about_img.png')} className="mnm_aboutus_img"/>

                <img src={require('../assets/mainpage/mnm_instagram.png')} className="mnm_instagram"/>
                <a href="https://www.instagram.com/mnm_ddsl?igsh=MWIydjVkcW40ZW8xaw==" target="_blank"
                   rel="noopener noreferrer"
                   className="instar_mnm">
                    <img src={require('../assets/mainpage/instagram.png')}/>
                </a>

                <img src={require('../assets/mainpage/ddsl_instagram.png')} className="ddsl_instagram"/>
                <a href="https://www.instagram.com/sklookie_ddwu?igsh=MTFkNzRiNGpod3JsbA==" target="_blank"
                   rel="noopener noreferrer"
                   className="instar_ddsl">
                    <img src={require('../assets/mainpage/instagram.png')}/>
                </a>

                <img src={require('../assets/mainpage/lookie_bg.png')} className="lookie_bg"/>
                <a href="https://www.instagram.com/sklookie_ddwu?igsh=MTFkNzRiNGpod3JsbA==" target="_blank"
                   rel="noopener noreferrer"
                   className="instar_lookie">
                    <img src={require('../assets/mainpage/instagram.png')}/>
                </a>
                <a href="https://www.sklookie.com/" target="_blank"
                   rel="noopener noreferrer"
                   className="link_lookie">
                    <img src={require('../assets/mainpage/Group 2609308.png')}/>
                </a>
            </div>
            <div>
                <img src={require('../assets/mainpage/getstarted.png')} className="getstarted"/>
                <img src={require('../assets/mainpage/footer.png')} className="footer_bg"/>
                <img src={require('../assets/mainpage/camcoder_logo2.png')} className="camcoder_logo2"/>
                <img src={require('../assets/mainpage/Line_3.png')} className="line_3"/>
                <img src={require('../assets/mainpage/SK_LOOKIE_MNM.png')} className="sk_mnm"/>
                <a href="https://forms.gle/YqSgkjhDM86mjX9N8" target="_blank" rel="noopener noreferrer"
                   className="coder_bt">
                    <img src={require('../assets/mainpage/coder_button.png')} className="button-img"
                         alt="Coder Button"/>
                </a>
            </div>
        </div>
    );
};

export default MainPage;
