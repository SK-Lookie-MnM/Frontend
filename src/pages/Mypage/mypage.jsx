import mypageTitle from '../../assets/mypage/mypage_title.png';
import pass from '../../assets/mypage/pass.png';
import "./Mypage.css"

const mypage = () => {
    return (
        <div>
            <img src={mypageTitle} className="title" />
            <img src={pass} className="pass" />
        </div>
    );
};

export default mypage;