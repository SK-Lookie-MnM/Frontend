// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// eslint-disable-next-line no-unused-vars
import React from 'react';
import {BannerContainer, BannerBold, BannerText} from './BM.style';
const BM = () => {

    return (
        <BannerContainer>
            <BannerBold>
                일상 속, 지구를 위한 작은 실천 !<p/>
                친환경 고체 생활용품 소분 플랫폼<p/>
            </BannerBold>
            <BannerText>
                <p/>이론이 아닌 현실에 발 붙이고 서서 할 수 있는 작은 실천
            </BannerText>
        </BannerContainer>
    );
};

export default BM;