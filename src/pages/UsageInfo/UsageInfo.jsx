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
                <p className="info">횟수권 구매 후 대학 내 설치된 캠코더 스테이션에 방문합니다.<br/>
                    사전에 고지한 전용주화를 이용해 캡슐 기계를 사용해주세요!
                </p>
                <hr className="hr2"/>

                <div className="square1">
                    <div className="square1-left">
                        <p>1회 이용권 : 2,000원</p>
                        <p>2회 이용권 : 3,500원</p>
                        <p>3회 이용권 : 5,000원</p>
                    </div>
                    <div className="square1-right">
                        <p>START : 2024.10.09. 12:00</p>
                        <p>END : 2024.10.30. 18:00</p>
                        <p>무인 24시간 운영 (주말 이용 가능)</p>
                    </div>
                </div>

                <div className="square2">
                    <div className="square2-left">
                        <p className="square2-left-info">• 1코인으로 1개의 캡슐 사용 가능</p>
                        <p className="square2-left-info">• 2가지 옵션의 캡슐로 구성</p>
                        <div className="square2-left-in">
                            <p style={{ fontWeight: "bold" }}>① 캡슐 A: 고체 세제 캡슐(4정)<br/>
                                <span style={{color: "green"}}>모든 캠퍼스에 배치</span>
                            </p>
                            <p style={{ fontWeight: "bold" }}>② 캡슐 B: 고체 워시바 캡슐(1개)<br/>
                                <span style={{color: "green"}}>(바디워시바 / 샴푸바 / 핸드솝 / 린스바)</span>
                            </p>
                        </div>
                        <p style={{ fontWeight: "bold" }}>✓ 캠코더 프로젝트 1.0은 학교별로 물품 구성을 다르게 운영합니다.</p>
                        <p className="square2-left-in">
                            - 동덕여대: 샴푸바<br/>
                            - 세종대: 핸드솝<br/>
                            - 서울여대: 페이스 & 바디바
                        </p>
                    </div>
                    <div className="square2-right">
                        <p>코인 1개<br/> = <br/>캡슐 1개</p>
                    </div>
                </div>

                <div className="square3">
                    <p className="square3_text">사용 방법<br/></p>
                    <p className="square3_text">(1) QR 폼 결제 완료 후 안내되는 4자리 비밀번호를 확인해주세요.</p>
                    <p className="square3_text">(2) 캐비닛에 비밀번호를 위에서부터 입력하시고 주화를 수령해주세요.</p>
                    <p className="square3_text">(3) 원하시는 물품을 수령하시면 과정이 완료됩니다.</p>
                </div>
            </div>


            <div className="getstarted">
                <img src={dot1} className="dot1" alt="Dot 1"/>
                <div className="usage-info-container">
                    <button className="button2" onClick={ButtonClick2}>
                    결제하기
                    </button>
                </div>
                <p className="title3">Get Started!</p>
                <p className="info2">캠코더를 이용해 손쉽게 누구나 환경보호에 동참할 수 있어요.<br/>같이 캠코더 해요!</p>
                <img src={dot2} className="dot2" alt="Dot 2"/>
            </div>
        </div>
    );
};

export default UsageInfo;
