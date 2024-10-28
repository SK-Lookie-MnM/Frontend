import { createGlobalStyle } from "styled-components";
import pretendardLight from "./fonts/Pretendard-Light.ttf";
import pretendardMedium from "./fonts/Pretendard-Medium.ttf";
import pretendardRegular from "./fonts/Pretendard-Regular.ttf";
import pretendardBold from "./fonts/Pretendard-Bold.ttf";
import pretendardSemiBold from "./fonts/Pretendard-SemiBold.ttf";
import pretendardExtraBold from "./fonts/Pretendard-ExtraBold.ttf";
import hakgyoansimDunggeunmisoB from "./fonts/Hakgyoansim-Dunggeunmiso-TTF-B.ttf";
import hakgyoansimDunggeunmisoR from "./fonts/Hakgyoansim-Dunggeunmiso-TTF-R.ttf";

const GlobalStyle = createGlobalStyle`
 
 @font-face {
    font-family: 'Pretendard-Medium';
    src: url(${pretendardMedium}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url(${pretendardRegular}) format('truetype');
   font-weight: normal;
    font-style: normal;
  }

   @font-face {
    font-family: 'Pretendard-Light';
    src: url(${pretendardLight}) format('truetype');
   font-weight: normal;
    font-style: normal;
  }


  @font-face {
    font-family: 'Pretendard-Bold';
    src: url(${pretendardBold}) format('truetype');
   font-weight: bold;
    font-style: normal;
  }

   @font-face {
    font-family: 'Pretendard-ExtraBold';
    src: url(${pretendardExtraBold}) format('truetype');
   font-weight: bold;
    font-style: normal;
  }
  
  
  @font-face {
    font-family: 'Pretendard-Semi-Bold';
    src: url(${pretendardSemiBold}) format('truetype');
   font-weight: bold;
    font-style: normal;
  }



   @font-face {
    font-family: 'Hakgyoansim-Dunggeunmiso-B';
    src: url(${hakgyoansimDunggeunmisoB}) format('truetype');
   font-weight: bold;
    font-style: normal;
  }
    @font-face {
    font-family: 'Hakgyoansim-Dunggeunmiso-R';
    src: url(${hakgyoansimDunggeunmisoR}) format('truetype');
   font-weight: bold;
    font-style: normal;
  }
`;

export default GlobalStyle;
