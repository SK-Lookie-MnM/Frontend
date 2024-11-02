// FAQComponent.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FAQContainer, FAQTitle, FAQSubText, FAQItem, Question, Answer, ToggleIcon } from './FAQ.style';

export default function FAQComponent() {
    const [openIndex, setOpenIndex] = useState(null); // 현재 열려 있는 질문 인덱스

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        { question: "Q 리필스테이션 위치가 어디에 있나요?",
            answer: "A 각 대학에 따라 상이하며,\n" +
                "대학별 정확한 위치는 배너-> 캠코더 맵에서 확인하실 수 있습니다.\n" +
                "그럼,즐거운 캠코더 라이프를 보내세요!\n" },
        { question: "Q 모두 친환경 제품으로 구성되어 있는건가요?\n",
            answer: "A 네, 캠코더 프로젝트에서 제공하는 모든 제품은 환경을 고려한 친환경 제품들로 구성되어 있습니다. \n" +
                "고체 샴푸/핸드솝/린스/바디바 모두 동물실험을 하지않고, ISO인증을 받았으며\n" +
                "전성분ewg 그린등급이니 더욱 안전하게 이용하실 수 있습니다.\n" +
                "그럼,즐거운 캠코더 라이프 보내세요!\n" },
        { question: "Q 금액을 잘못 보냈어요, 어떻게 해결하죠?\n ",
            answer: "금액을 잘못 송금하셨다면, 캠코더 @mnm_ddsl 에서 환불 요청을 해주시면 됩니다.\n" +
                "입금 내역을 확인한 후, 최대한 빠르게 환불 절차를 도와드리겠습니다.\n" +
                "그럼,즐거운 캠코더 라이프 보내세요!\n" },
        { question: "Q 캡슐은 그냥 가져가면 되는건가요?\n ",
            answer: "A 캡슐을 가져가신 후, 편리한 시간에 다시 반환통에 반납해 주시면 됩니다. \n" +
                "또한, 리필 스테이션에는 친환경 크라프트지&비누망이 준비되어 있으니, 원하시는것에 담으셔서  처음부터 캡슐은 반납함에 넣고 \n" +
                "제품만 가져가실 수도 있습니다. 개인의 편의에 따라 두 가지 방법 중 하나를 선택하시면 됩니다.\n" +
                "그럼,즐거운 캠코더 라이프 보내세요!\n" },
        { question: "Q 리필 제품의 사용주기는 어떻게 되나요?\n ",
            answer: "A 고체세제는 1캡슐=4정(약1달분량) 그 외 고체샴푸/린스/워시등의 경우 \n" +
                "2주를 예상합니다. 다만, 사용자에 따라 주기는 달라질 수 있음을 미리 말씀드립니다.\n" +
                "샴푸바 등 바의 형태의 경우 각25g으로 아주 가벼워, MT를 가시는등 여행에서도 가져가시길 추천드립니다!\n" +
                "그럼,즐거운 캠코더 라이프 보내세요!\n" },
        { question: "Q 정기권인데, 바빠서 2번밖에 못갔어요. 나머지는 어떻게 되나요?\n ",
            answer: "A 정기권을 이용하시다가 미사용하신경우, @mnm_ddsl 측으로 연락해 주시면 남은 미사용 횟수를 \n" +
                "다음달로 이월해 드립니다. \n" +
                "문의해 주시면 빠르게 처리해 드리겠습니다.\n" +
                "그럼,즐거운 캠코더 라이프 보내세요!\n" },
        { question: "Q 고체 바 성분은 어떻게 되는지 궁금해요 ",
            answer: "A 세 번째 답변입니다.",
            images: [
                "src/assets/FAQ/img1.png",
                "src/assets/FAQ/img2.png",
                "src/assets/FAQ/img3.png",
                "src/assets/FAQ/img4.png"
            ]}
    ];

    return (
        <FAQContainer>
            <FAQTitle>FAQ</FAQTitle>
            <FAQSubText>**그 외 긴급 문의사항은 @mnm_ddsl을 이용바랍니다.</FAQSubText>

            {faqData.map((item, index) => (
                <FAQItem key={index}>
                    <Question onClick={() => toggleAnswer(index)}>
                        {item.question}
                        <ToggleIcon isOpen={openIndex === index}>⮟</ToggleIcon>
                    </Question>
                    <Answer isOpen={openIndex === index}>
                        {item.answer}
                    </Answer>
                </FAQItem>
            ))}
        </FAQContainer>
    );
}
