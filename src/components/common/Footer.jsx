import email_img from "../../assets/mainpage/footer_em.png";
import insta from "../../assets/mainpage/footer_in.png";
import clip from "../../assets/mainpage/footer_c.png";
import logo from "../assets/mainpage/camcoder_logo2.png";
import {
    CamcoderLogo,
    Clip,
    ContactContainer,
    Email,
    FooterWrapper,
    Insta,
    Line,
    SkLookieMnm,
} from "./Footer.css.jsx";

const Footer = () => {
    const email = "camcoder2024.official@gmail.com";
    return (
        <FooterWrapper>
            <CamcoderLogo img src={logo} alt="camcoder logo" />
            <ContactContainer>
                <a
                    href="https://www.instagram.com/mnm_ddsl/?igsh=MWIydjVkcW40ZW8xaw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="insta-link"
                >
                    <Insta img src={insta} alt="insta Button" />
                </a>
                <a
                    href={`mailto:${email}?subject=문의 제목&body=여기에 내용을 입력하세요.`}
                    className="email-link"
                >
                    <Email src={email_img} alt="Email Button" />
                </a>
                <a
                    href="https://forms.gle/YqSgkjhDM86mjX9N8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-link"
                >
                    <Clip src={clip} alt="clip Button" />
                </a>
            </ContactContainer>
            <Line></Line>
            <SkLookieMnm>@2024 SK LOOKIE MNM</SkLookieMnm>
        </FooterWrapper>
    );
};

export default Footer;