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
        <div className="usageInfo">
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
                    <p className="square3_title">사용 방법<br/></p>
                    <p className="square3_text">1. QR 폼 결제 완료 후 안내되는 비밀번호 4자리를 확인합니다.</p>
                    <p className="square3_text">2. 비밀번호 4자리를 이용해 캐비넷에서 주화를 수령합니다..</p>
                    <p className="square3_text">3. 원하는 캡슐을 주화를 사용해 재미있게 뽑습니다.</p>
                </div>

                <div className="square2">
                    <div className="square1-left">
                        <p>1 캡슐 = <span style={{color: '#23443D'}}>2,000₩</span></p>
                        <p className="price">4,000₩</p>
                        <p>2 캡슐 = <span style={{color: '#23443D'}}>3,500₩</span></p>
                        <p className="price">6,000₩</p>
                        <p>3 캡슐 = <span style={{color: '#23443D'}}>5,000₩</span></p>
                    </div>
                    <div className="info-section">
                        <div className="info-item">
                            <span className="dot"></span>
                            <div className="info-text">
                                <p><strong>START :</strong> 2024.10.09. 12:00</p>
                                <p><strong>END :</strong> 2024.10.30. 18:00</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <span className="dot"></span>
                            <p><strong>무인 24시간 운영</strong> (주말이용가능)</p>
                        </div>
                        <div className="info-item">
                            <span className="dot"></span>
                            <p>현재 동덕여대/서울여대/세종대 운영중</p>
                        </div>
                        <div className="info-item">
                            <span className="dot"></span>
                            <p>위 아래 캡슐 <strong>모두 동일 가격!</strong></p>
                        </div>
                    </div>

                </div>

                <div className="square3">
                    <div className="square2-left">
                        <p className="square2-left-info">• 1coin 당 1개의 캡슐 사용 가능</p>
                        <p className="square2-left-info">• 2가지 옵션의 캡슐로 구성</p>
                        <div className="square2-left-in">
                            <p style={{fontWeight: "bold"}}>캡슐 A) 고체 세제 캡슐 4정(약 1달 분)<br/>
                                <span style={{color: "#666666"}}>모든 캠퍼스에 배치</span>
                            </p>
                            <p style={{fontWeight: "bold"}}>캡슐 B) 고체 워시바 캡슐 1개<br/>
                                <span style={{color: "#666666"}}>(바디워시바 / 샴푸바 / 핸드솝 / 린스바)</span>
                            </p>
                        </div>
                        <p style={{color: "#666666", marginTop:"10px"}}>✓ 캠코더 프로젝트 ver 1.0 학교별 구성</p>
                        <p className="square2-left-in"> (동덕여대 - 샴푸바/서울여대 - 페이스&바디/세종대 - 핸드솝) </p>
                    </div>
                    <div className="square2-right">
                        <p style={{fontWeight:"bold", fontSize:"50px", marginRight:"50px"}}>1 coin
                            <span style={{color: "#666666", fontSize:"30px", fontWeight:"normal"}}> = 1 캡슐 이용</span>
                        </p>
                    </div>
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
