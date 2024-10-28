// import './Value.css';
// import logo from '../../../src/assets/Value/logo.png';
// import info2 from '../../../src/assets/Value/info2.png'
// const Value = () => {
//     return (
//         <div>
//             <div className="info">
//                 <hr className="hr_1"/>
//                 <p className="title_1">Our Story</p>
//                 <hr className="hr_2"/>
//                 <p className="info1">
//                     대학 시절, 누구나 공감하듯 학교 내의 자원들을 더 쉽고 편리하게 이용하며<br/>
//                     Eco-Friendly한 라이프 스타일을 자연스럽게 실천하길 바랐습니다.<br/>
//                     그리고 그 작은 습관이 졸업 후 사회에서도 이어져 더 큰 변화를 만들어가길 원했습니다.
//                 </p>
//                 <p className="info2">
//                     그래서 저희는<strong>&quot;에코 실천이 무겁지 않고, 더 재미있게 다가가면 어떨까?&quot;</strong>라는 발상을 했습니다. <br/>
//                     그렇게 탄생한 것이 바로 캠코더 프로젝트입니다. <br/>
//                     지나가다가 뽑기 기계를 통해 뽑기만 하면 재미있게 고체 세제를 뽑아 사용할 수 있는 시스템을 만들었습니다.
//                 </p>
//                 <p className="info3"><strong>
//                     한번 뽑으면 환경을 위한 한 걸음을 내딛는 거죠. <br/>
//                     이렇게 캠퍼스 속 작은 일상에서부터 즐겁게 에코 실천을 시작하게 하고 싶었습니다.
//                 </strong></p>
//                 <p className="info4">
//                     우리의 목표는 단순한 제품 판매를 넘어서<br/>
//                     학생들이 대학생활 속에서 지속 가능한 소비를 즐겁게 경험하고,<br/>
//                     그 영향력이 사회로까지 확장되는 것입니다.
//                 </p>
//                 <img src={logo} alt="로고" className="logo"/>
//             </div>
//
//             <div className="info2">
//                 <p className="title_2">
//                     지속 가능한 미래를 위해<br/>
//                     <span style={{color: "#23443D"}}>캠퍼스 프로젝트 ver 1.0</span>
//                     은 수익 기부 프로젝트로 함께 변화를 만들어가고 있습니다.
//                 </p>
//                 <img src={info2} className="infoImg" />
//             </div>
//         </div>
//     );
// };
//
// export default Value;

import './Value.css';
import logo from '../../../src/assets/Value/logo.png';
import infoImage from '../../../src/assets/Value/info2.png'; // 이미지 변수명 수정

const Value = () => {
    return (
        <div>
            <div className="info">
                <hr className="hr_1" />
                <p className="title_1">Our Story</p>
                <hr className="hr_2" />
                <p className="info-text"> {/* info2 클래스 이름 변경 */}
                    대학 시절, 누구나 공감하듯 학교 내의 자원들을 더 쉽고 편리하게 이용하며<br />
                    Eco-Friendly한 라이프 스타일을 자연스럽게 실천하길 바랐습니다.<br />
                    그리고 그 작은 습관이 졸업 후 사회에서도 이어져 더 큰 변화를 만들어가길 원했습니다.
                </p>
                <p className="info-text">
                    그래서 저희는<strong>&quot;에코 실천이 무겁지 않고, 더 재미있게 다가가면 어떨까?&quot;</strong>라는 발상을 했습니다. <br />
                    그렇게 탄생한 것이 바로 캠코더 프로젝트입니다. <br />
                    지나가다가 뽑기 기계를 통해 뽑기만 하면 재미있게 고체 세제를 뽑아 사용할 수 있는 시스템을 만들었습니다.
                </p>
                <p className="info-text"><strong>
                    한번 뽑으면 환경을 위한 한 걸음을 내딛는 거죠. <br />
                    이렇게 캠퍼스 속 작은 일상에서부터 즐겁게 에코 실천을 시작하게 하고 싶었습니다.
                </strong></p>
                <p className="info-text">
                    우리의 목표는 단순한 제품 판매를 넘어서<br />
                    학생들이 대학생활 속에서 지속 가능한 소비를 즐겁게 경험하고,<br />
                    그 영향력이 사회로까지 확장되는 것입니다.
                </p>
                <img src={logo} alt="로고" className="logo" />
            </div>

            <div className="info-summary"> {/* info2 클래스 이름 변경 */}
                <p className="title_2">
                    지속 가능한 미래를 위해<br />
                    <span style={{ color: "#23443D" }}>캠퍼스 프로젝트 ver 1.0</span>
                    은 수익 기부 프로젝트로 함께 변화를 만들어가고 있습니다.
                </p>
                <img src={infoImage} className="info-img" alt="Info Image" /> {/* 이미지 변수명 변경 및 alt 추가 */}
            </div>
        </div>
    );
};

export default Value;
