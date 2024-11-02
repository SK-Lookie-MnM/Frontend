// style.jsx
import styled from 'styled-components';

// 전체 FAQ 컨테이너 스타일
export const FAQContainer = styled.div`
    font-family: "Pretendard-Regular";
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 40px;
    margin-bottom: 5rem;
`;

// FAQ 제목 스타일
export const FAQTitle = styled.h2`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
    margin-top: 3rem;
`;

// 안내 텍스트 스타일
export const FAQSubText = styled.p`
  text-align: right;
  font-size: 17px;
  color: #23443D;
  margin-bottom: 4rem;
    margin-top: 3.5rem;
`;

// FAQ 리스트 아이템 스타일
export const FAQItem = styled.div`
  border-top: 2.55px solid #23443D;
  padding: 40px 10px;
`;

// 질문 스타일
export const Question = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 21.23px;
  color: #003300;
`;

// 답변 스타일
export const Answer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #C9CFC3;
  display: ${props => (props.isOpen ? 'block' : 'none')}; /* 클릭에 따라 표시 여부 결정 */
    font-size: 21.23px;
  color: #333;
    line-height: 1.8;

    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')}; // 불투명도 조정
    transition: max-height 10s ease, opacity 10s ease; // 애니메이션 속도 및 효과
`;

// 질문 옆에 있는 아이콘 스타일 (화살표)
export const ToggleIcon = styled.span`
  margin-left: auto;
  font-size: 20px;
  transform: ${props => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')}; /* 열리고 닫힘에 따라 회전 */
    transition: transform 0.5s ease; // 애니메이션 속도 및 효과 설정
`;
