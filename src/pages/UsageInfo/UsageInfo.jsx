import './UsageInfo.css';
import header from '../../assets/UsageInfo/header.png';
import info_header from '../../assets/UsageInfo/info_header.png';
import info from '../../assets/UsageInfo/info.png';
import button from '../../assets/UsageInfo/button.png';
import get from '../../assets/UsageInfo/getstarted.png';
import button2 from '../../assets/UsageInfo/button2.png'


const UsageInfo = () => {
    return (
        <div>
            <img src={header} className="header"/>
            <a href="https://www.instagram.com/mnm_ddsl/?igsh=MWIydjVkcW40ZW8xaw%3D%3D" target="_blank"
               rel="noopener noreferrer" className="button-link">
                <img src={button} className="button" alt="Map Button"/>
            </a>
            <img src={info_header} className="info_header"/>
            <img src={info} className="info"/>
            <img src={get} className="get"/>
            <a href="https://forms.gle/5KKR1ojquKTHSmc18" target="_blank"
               rel="noopener noreferrer" className="button-link2">
                <img src={button2} className="button2" alt="buy Button"/>
            </a>
        </div>
    );
};

export default UsageInfo;