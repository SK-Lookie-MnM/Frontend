import './UsageInfo.css';
import title from '../../../src/assets/UsageInfo/title.png';
import check from '../../../src/assets/UsageInfo/checkmark.png'
const UsageInfo = () => {
    return (
        <div>
            <div className="joincamcoder">
                <img src={title} className="title1"/>

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

            </div>
        </div>
    );
};

export default UsageInfo;