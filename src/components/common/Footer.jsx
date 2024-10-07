import './Footer.css';
import footerBg from '../../assets/mainpage/footer.png';
import camcoderLogo from '../../assets/mainpage/camcoder_logo2.png';
import lineDecoration from '../../assets/mainpage/Line_3.png';
import skLookieMNM from '../../assets/mainpage/SK_LOOKIE_MNM.png';

const Footer = () => {
  return (
      <div>
        <img src={footerBg} className="footer_bg" alt="Footer Background"/>
        <img src={camcoderLogo} className="camcoder_logo2" alt="Camcoder Logo"/>
        <img src={lineDecoration} className="line_3" alt="Line Decoration"/>
        <img src={skLookieMNM} className="sk_mnm" alt="SK Lookie MNM"/>
      </div>
  );
};

export default Footer;
