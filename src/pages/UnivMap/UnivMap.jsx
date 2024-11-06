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
    InfoText,
} from './UnivMap.style';

const UnivMap = () => {
    const universityData = [
        {
            name: '동덕여자대학교',
            address: '서울특별시 성북구 회화나무로 60',
            operatingHours: '10:00 - 21:00',
            contact: 'camcoder2024.official@gmail.com',
            googleMapLink: '#', // 실제 구글맵 링크를 여기에 추가
            position: { lat: 37.6064, lng: 127.0095 },
        },
        {
            name: '서울여자대학교',
            address: '서울 노원구 화랑로 621',
            operatingHours: '10:00 - 21:00',
            contact: 'camcoder2024.official@gmail.com',
            googleMapLink: '#', // 실제 구글맵 링크를 여기에 추가
            position: { lat: 37.6064, lng: 127.0095 },
        },
        {
            name: '세종대학교',
            address: '서울 광진구 능동로 209',
            operatingHours: '10:00 - 21:00',
            contact: 'camcoder2024.official@gmail.com',
            googleMapLink: '#', // 실제 구글맵 링크를 여기에 추가
            position: { lat: 37.6064, lng: 127.0095 },
        },
    ];

    const containerStyle = {
        width: '100%',
        height: '100%',
    };

    return (
        <Container>
            <Title>학교별 캠퍼스 지도</Title>
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
                        <UniversityName>{university.name}</UniversityName>
                        <LinkText href={university.googleMapLink} target="_blank" rel="noopener noreferrer">
                            구글맵링크
                        </LinkText>
                        <InfoText>운영공간: {university.address}</InfoText>
                        <InfoText>운영시간: {university.operatingHours}</InfoText>
                        <InfoText>문의: {university.contact}</InfoText>
                    </InfoContainer>
                </UnivItem>
            ))}
        </Container>
    );
};

export default UnivMap;
