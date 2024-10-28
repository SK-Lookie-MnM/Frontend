import './UsageInfo.css';
import title from '../../../src/assets/UsageInfo/title.png';
import check from '../../../src/assets/UsageInfo/checkmark.png';
import image from '../../../src/assets/UsageInfo/image.png';
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
                <div className="left-container"> {/* 왼쪽 컨테이너 */}
                    <img src={title} className="title1" alt="타이틀"/>
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
                            <p className="info-text">월 9,000원의 이용료로 다양한 친환경 제품을 만나보세요!</p>
                        </div>
                    </div>
                    <div className="usage-info-container">
                        <button className="rounded-button" onClick={handleButtonClick}>
                            가까운 캠코더 맵 이동하기
                        </button>
                    </div>
                </div>
                <div className="right-container">
                    <img src={image} className="image" alt="이미지"/>
                    <div className="square"></div>
                </div>
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
                <div className="usage-info-container">
                    <button className="button2" onClick={ButtonClick2}>
                        결제하기
                    </button>
                </div>
                <p className="title3">Get Started!</p>
                <p className="info2">캠코더를 원하는 어느 대학이든 MNM은 두 팔 벌려 환영입니다! <br/>같이 캠코더 해요!</p>
            </div>
        </div>
    );
};

export default UsageInfo;
