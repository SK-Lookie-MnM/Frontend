// style.jsx
import styled from 'styled-components';
import bmBanner from '../../assets/BM/bmBanner.png';

// 배경 이미지가 있는 컨테이너 스타일
export const BannerContainer = styled.div`
  background-image: url(${bmBanner});
  background-size: cover;         /* 이미지가 컨테이너에 맞게 조정됨 */
  background-position: center;    /* 이미지가 가운데에 위치 */
  width: 100%;                    /* 전체 너비 사용 */
  height: 400px;                  /* 높이는 필요에 맞게 조정 */
  display: flex;
  align-items: center;            /* 컨텐츠를 중앙 정렬 */
  justify-content: center;        /* 컨텐츠를 중앙 정렬 */
`;

// 텍스트가 가운데에 오도록 할 경우 추가 스타일
export const BannerBold = styled.h1`
  color: black;                 /* 텍스트 색상 */
  font-size: 36px;                /* 텍스트 크기 */
  font-weight: bold;
    align-items: left;
`;

export const BannerText = styled.div`
    color: black;
    font-size: 25px;
    align-items: left;
`;