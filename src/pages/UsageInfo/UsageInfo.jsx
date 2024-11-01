import './UsageInfo.css';
import check from '../../../src/assets/UsageInfo/checkmark.png';
import image from '../../../src/assets/UsageInfo/image.png';
import dot1 from '../../../src/assets/UsageInfo/dot1.png'
import dot2 from '../../../src/assets/UsageInfo/dot2.png'
import { useNavigate } from 'react-router-dom'; // useNavigate를 사용하여 내부 링크 연결

const UsageInfo = () => {
    const navigate = useNavigate(); // navigate 객체 생성

    const handleButtonClick = () => {
        navigate('/univMap'); // 버튼 클릭 시 내부 링크로 이동
    };

    const ButtonClick2 = () => {
        window.location.href = "https://forms.gle/hY4Ngh2EechEs3nh9";
    }

    return (
        <div>
            <div className="joincamcoder">
                <div className="left-container">
                    <p className="title1">
                        Join <span style={{color: '#23443D'}}>Camcoder!</span>
                    </p>
                    <div className="image-text-container">
                        <div className="image-text-item">
                            <img src={check} className="img" alt="이미지 1"/>
                            <p className="info-text">한 달간 이용 가능한 횟수권을 구독하세요.</p>
                        </div>
                        <div className="image-text-item">
                            <img src={check} className="img" alt="이미지 2"/>
                            <p className="info-text">1회 이용 시 캡슐 1개를 가져가실 수 있습니다.</p>
                        </div>
                        <div className="image-text-item">
                            <img src={check} className="img" alt="이미지 3"/>
                            <p className="info-text">월 5,000원의 이용료로 다양한 친환경 제품을 만나보세요!</p>
                        </div>
                    </div>
                    <div className="usage-info-container">
                        <button className="rounded-button" onClick={handleButtonClick}>
                            가까운 캠코더 맵 이동하기
                        </button>
                    </div>
                </div>
                <img src={image} className="image" alt="이미지"/>
            </div>

            <div className="ourSystem">
            <hr className="hr1"/>
                <p className="title2">• Our System •</p>
                <p className="info"> 횟수권 구매 후 대학 내 설치된 캠코더 스테이션에 방문합니다.<br/>
                    사전에 고지한 전용주화를 이용해 캡슐 기계를 사용해주세요!
                </p>
                <hr className="hr2"/>

                <div className="square1"></div>
                <div className="square2"></div>
                <div className="square3"></div>
            </div>

            <div className="getstarted">
                <img src={dot1} className="dot1" alt="Dot 1"/>
                <div className="usage-info-container">
                    <button className="button2" onClick={ButtonClick2}>
                        결제하기
                    </button>
                </div>
                <p className="title3">Get Started!</p>
                <p className="info2">캠코더를 이용해 손쉽게 누구나 환경보호에 동참할 수 있어요<br/>같이 캠코더 해요!</p>
                <img src={dot2} className="dot2" alt="Dot 2"/>
            </div>
        </div>
    );
};

export default UsageInfo;
