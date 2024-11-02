import './articles.css';
import example_img from '../../assets/articles/example_image.png';

const Articles = () => {
    return (
        <div className="articles">
            <div className="banner">
                <p className="banner-text">캠퍼스 속 작은 일상에서부터<br /> 즐겁게 에코를 실천하다.</p>
            </div>

            <div className="article-container">
                <img src={example_img} alt="예시 이미지" className="article-image"/>
                <div className="article-content">
                    <h3 className="article-title">언론보도</h3>
                    <h2 className="article-headline">동덕여대 재학생들의 인 캠퍼스<br/>리필스테이션 프로젝트, 성왕리에 마무리</h2>
                    <p className="article-date">2024.09.25</p>
                    <p className="article-description">
                        동덕여대 재학생들의 인-캠퍼스 리필스테이션 프로젝트<br/> Cam;coder Project가 성황리에 마무리되었다.<br/><br/>
                        해당 프로젝트에는 동덕여대, 서울여대, 세종대 등이 참여하며<br/> 서울권 대학 내 에코 소비 문화를 확산시켰다는 평을 얻고 있다.
                    </p>
                    <button className="article-button">기사 바로가기</button>
                </div>
            </div>
        </div>
    );
};

export default Articles;
