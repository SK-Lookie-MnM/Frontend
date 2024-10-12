import './Footer.css';
import footerBg from '../../assets/mainpage/footer.png';
import camcoderLogo from '../../assets/mainpage/camcoder_logo2.png';
import lineDecoration from '../../assets/mainpage/Line_3.png';
import skLookieMNM from '../../assets/mainpage/SK_LOOKIE_MNM.png';
import email_img from '../../assets/mainpage/footer_em.png'
import insta from '../../assets/mainpage/footer_in.png'
import clip from '../../assets/mainpage/footer_c.png'

const Footer = () => {
    const email = "camcoder2024.official@gmail.com";
    return (
        <div className="footer"> {/* className 추가 */}
            <img src={footerBg} className="footer_bg" alt="Footer Background" />
            <img src={camcoderLogo} className="camcoder_logo2" alt="Camcoder Logo" />
            <img src={lineDecoration} className="line_3" alt="Line Decoration" />
            <img src={skLookieMNM} className="sk_mnm" alt="SK Lookie MNM" />
            <div>
                <a href="https://www.instagram.com/mnm_ddsl/?igsh=MWIydjVkcW40ZW8xaw%3D%3D" target="_blank" rel="noopener noreferrer" className="insta-link">
                    <img src={insta} className="insta" alt="insta Button" />
                </a>
                <a href={`mailto:${email}?subject=문의 제목&body=여기에 내용을 입력하세요.`} className="email-link">
                    <img src={email_img} className="email" alt="Email Button" />
                </a>
                <a href="https://forms.gle/YqSgkjhDM86mjX9N8" target="_blank" rel="noopener noreferrer" className="button-link">
                    <img src={clip} className="clip" alt="clip Button" />
                </a>
            </div>
        </div>
    );
};

export default Footer;