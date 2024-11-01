import './Value.css';
import logo from '../../../src/assets/Value/logo.png';
import info_img1 from '../../../src/assets/Value/image_1.png'
import info_img2 from '../../../src/assets/Value/image_2.png'
import info_img3 from '../../../src/assets/Value/image_3.png'
import info_img4 from '../../../src/assets/Value/image_4.png'
import banner from '../../../src/assets/Value/banner.png'

const Value = () => {
    const ButtonClick2 = () => {
        window.location.href = "https://forms.gle/v8dXGE9tii7oV22M7";
    }
    return (
        <div className="value">
            <div className="banner">
                <img src={banner} className="banner_bg" alt="banner"/>
                <p className="banner-text">LESS BUT BETTER <br/>
                    환경을 위해 지속가능한 혁신적 대안을 찾아내다</p>
            </div>
            <div className="info">
                <hr className="hr_1"/>
                <p className="title_1">Our Story</p>
                <hr className="hr_2"/>
                <div className="info-text">
                    <p>대학 시절, 누구나 공감하듯 학교 내의 자원들을 더 쉽고 편리하게 이용하며</p>
                    <p>Eco-Friendly한 라이프 스타일을 자연스럽게 실천하길 바랐습니다.</p>
                    <p>그리고 그 작은 습관이 졸업 후 사회에서도 이어져 더 큰 변화를 만들어가길 원했습니다.</p>

                    <p>그래서 저희는<strong>&quot;에코 실천이 무겁지 않고, 더 재미있게 다가가면 어떨까?&quot;</strong>라는 발상을 했습니다. </p>
                    <p>그렇게 탄생한 것이 바로 캠코더 프로젝트입니다.</p>
                    <p>지나가다가 뽑기 기계를 통해 뽑기만 하면 재미있게 고체 세제를 뽑아 사용할 수 있는 시스템을 만들었습니다.</p>

                    <p><strong>한 번 뽑으면 환경을 위한 한 걸음을 내딛는 거죠. </strong></p>
                    <p><strong>이렇게 캠퍼스 속 작은 일상에서부터 즐겁게 에코 실천을 시작하게 하고 싶었습니다. </strong></p>

                    <p>우리의 목표는 단순한 제품 판매를 넘어서 </p>
                    <p>학생들이 대학생활 속에서 지속 가능한 소비를 즐겁게 경험하고,</p>
                    <p>그 영향력이 사회로까지 확장되는 것입니다.</p>
                </div>
                <img src={logo} alt="로고" className="logo"/>
            </div>

            <div className="info-summary">
                <p className="title_2">
                    지속 가능한 미래를 위해<br/>
                    <span style={{color: "#23443D"}}>캠퍼스 프로젝트 ver 1.0</span> 은 수익 기부 프로젝트로 함께 변화를 만들어가고 있습니다.
                </p>
                <div className="info_top">
                    <img src={info_img1} className="info_img1" alt="img"/>
                    <img src={info_img2} className="info_img2" alt="img"/>
                    <p className="info_top_">
                        <span className="info_top_title">수익 기부 프로젝트<br/></span>
                        진행한 리필 스테이션 수익은 모두 기부<br/>
                        지역 어린이집 학생들을 대상으로 캠페인 진행<br/>
                        대학교를 넘어 지역 커뮤니티까지 환경 보호 문화 확산<br/>
                        지속 가능한 환경 보호의 선순환 형성을 목표로 캠페인 진행
                    </p>
                </div>
                <div className="info_bottom">
                    <p className="info_bottom_">
                        <span className="info_bottom_title">캠코더 X 동맹연합<br/></span>
                        동덕여자대학교, 서울여자대학교 진행 완료<br/>
                        동덕여자대학교 환경지기 연합 체결<br/>
                        세종대학교 THE EYES 연합 체결<br/>
                        본사와 계열사 연합 구조<br/>
                        캠코더 설치 및 문화 확산
                    </p>
                    <img src={info_img3} className="info_img3" alt="img"/>
                    <img src={info_img4} className="info_img4" alt="img"/>
                </div>
            </div>

            <div className="coder">
                <p className="info-text2">
                    마냥 어렵고 부담스러웠던 <strong>&apos;환경보호&apos;</strong>를 넘어 누구나 실천 가능한 제로웨이스트를 제안합니다. <br/>
                    서울권 대학을 넘어 전국의 대학으로 캠코더 문화를 확산하며<br/>
                    시작부터 LESS USE를 실천하는 캠코더 프로젝트의 행보를 기대해주세요!
                </p>
                <div className="usage-info-container1">
                    <button className="button2" onClick={ButtonClick2}>
                        함께 코더하기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Value;