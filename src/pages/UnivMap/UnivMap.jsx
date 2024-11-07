// eslint-disable-next-line no-unused-vars
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import {
    Container,
    Title,
    MapContainer,
    InfoContainer,
    UnivItem,
    UniversityName,
    LinkText,
    InfoText, TextContainer,
} from './UnivMap.style';

const UnivMap = () => {
    const universityData = [
        {
            name: '동덕여자대학교',
            address: '백주년기념관 B1 꽃이피움 CAFE 앞',
            operatingHours: '10:00 - 21:00',
            contact: 'camcoder2024.official@gmail.com',
            googleMapLink: 'https://www.google.co.kr/maps/place/%EC%B9%B4%ED%8E%98+%EA%BD%83%EC%9D%B4%ED%94%BC%EC%9B%80+%EB%8F%99%EB%8D%95%EC%97%AC%EB%8C%80%EC%A0%90/data=!4m6!3m5!1s0x357cbc817884c247:0x86b18b311e341150!8m2!3d37.6058314!4d127.0404708!16s%2Fg%2F11g0kj81g2?hl=ko&entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D',
            position: { lat: 37.60585, lng: 127.0405 },
        },
        {
            name: '서울여자대학교',
            address: '샬롬하우스 기숙사 1층',
            operatingHours: '10:00 - 21:00',
            contact: 'camcoder2024.official@gmail.com',
            googleMapLink: 'https://www.google.co.kr/maps/place/%EC%84%9C%EC%9A%B8%EC%97%AC%EC%9E%90%EB%8C%80%ED%95%99%EA%B5%90+%EC%83%AC%EB%A1%AC%ED%95%98%EC%9A%B0%EC%8A%A4/data=!4m10!1m2!2m1!1z7ISc7Jq47Jes64yAIOyDrOuhrOq4sOyImeyCrA!3m6!1s0x357cb90851fcc7df:0x22c3ab6cee74d86f!8m2!3d37.6289458!4d127.0888736!15sChzshJzsmrjsl6zrjIAg7IOs66Gs6riw7IiZ7IKskgEPaG91c2luZ19jb21wbGV44AEA!16s%2Fg%2F11ryqyy02x?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D', // 실제 구글맵 링크를 여기에 추가
            position: { lat: 37.6290817, lng: 127.0888200 },
        },
        {
            name: '세종대학교',
            address: '서울 광진구 능동로 209',
            operatingHours: '10:00 - 21:00',
            contact: 'camcoder2024.official@gmail.com',
            googleMapLink: 'https://www.google.co.kr/maps/place/%EC%84%B8%EC%A2%85%EB%8C%80%ED%95%99%EA%B5%90/data=!3m1!4b1!4m6!3m5!1s0x357ca4d0720eecc1:0x1a7ad975c6b5e4eb!8m2!3d37.5507583!4d127.0741682!16s%2Fm%2F0ddhhlj?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D', // 실제 구글맵 링크를 여기에 추가
            position: { lat: 37.55100, lng: 127.0742 },
        },
    ];

    const containerStyle = {
        width: '100%',
        height: '100%',
    };

    return (
        <Container>
            <Title>학교별 캠코더 맵</Title>
            {universityData.map((university, index) => (
                <UnivItem key={index}>
                    <MapContainer>
                        <LoadScript googleMapsApiKey="AIzaSyBM-CgI5JIXf0zpPtO-_EpkFwZmj_NnhA0">
                            <GoogleMap mapContainerStyle={containerStyle} center={university.position} zoom={15}>
                                <Marker position={university.position} />
                            </GoogleMap>
                        </LoadScript>
                    </MapContainer>
                    <InfoContainer>
                        <TextContainer>
                            <UniversityName>{university.name}</UniversityName>
                            <LinkText href={university.googleMapLink} target="_blank" rel="noopener noreferrer">
                                구글맵링크
                            </LinkText>
                        </TextContainer>
                        <InfoText>운영공간 | {university.address}</InfoText>
                        <InfoText>운영시간 | {university.operatingHours}</InfoText>
                        <InfoText>문의 | {university.contact}</InfoText>
                    </InfoContainer>
                </UnivItem>
            ))}
        </Container>
    );
};

export default UnivMap;
