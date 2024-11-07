import './articles.css';
import example_img from '../../assets/articles/articles_image.jpeg';

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
                    <h2 className="article-headline">SK LOOKIE 동덕여대 MNM 팀,<br/>캠퍼스 리필 스테이션 프로젝트 성과 달성</h2>
                    <p className="article-date">2024.11.07</p>
                    <p className="article-description">
                        SK LOOKIE의 동덕여대 소속 MNM팀 <br/> 뽑기 기계를 활용한 캠퍼스 맞춤형 리필 스테이션 프로젝트 혁신적 성과 달성<br/><br/>
                        ‘LESS BUT BETTER’은 우리나라의 재활용률의 민낯을 비추며,<br/> 낮은 비율의 재활용에 의존하기보다는 사용량을 줄이는 선제적인 대처가 필요하다는 취지이다.
                    </p>
                    <button
                        className="article-button"
                        onClick={() => window.location.href = 'https://www.nbntv.co.kr/news/articleView.html?idxno=3027691'}
                    >
                        기사 바로가기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Articles;
