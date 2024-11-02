// style.jsx
import styled from 'styled-components';

// 전체 FAQ 컨테이너 스타일
export const FAQContainer = styled.div`
    font-family: "Pretendard-Regular";
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
  padding-top: 40px;
`;

// FAQ 제목 스타일
export const FAQTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

// 안내 텍스트 스타일
export const FAQSubText = styled.p`
  text-align: right;
  font-size: 12px;
  color: gray;
  margin-bottom: 20px;
`;

// FAQ 리스트 아이템 스타일
export const FAQItem = styled.div`
  border-top: 1px solid #b0b0b0;
  padding: 15px 0;
`;

// 질문 스타일
export const Question = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  color: #003300;
`;

// 답변 스타일
export const Answer = styled.div`
  margin-top: 10px;
  padding: 20px;
  background-color: #d3d8cc;
  display: ${props => (props.isOpen ? 'block' : 'none')}; /* 클릭에 따라 표시 여부 결정 */
  font-size: 14px;
  color: #333;
  border: 1px solid #b0b0b0;
`;

// 질문 옆에 있는 아이콘 스타일 (화살표)
export const ToggleIcon = styled.span`
  margin-left: auto;
  font-size: 20px;
  transform: ${props => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')}; /* 열리고 닫힘에 따라 회전 */
  transition: transform 0.2s ease;
`;
