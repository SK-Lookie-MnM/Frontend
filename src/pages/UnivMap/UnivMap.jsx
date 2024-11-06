// eslint-disable-next-line no-unused-vars
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Container, Title, MapContainer, InfoContainer, Button } from './UnivMap.style';

const UnivMap = () => {
    const universityData = [
        {
            name: '동덕여자대학교',
            address: '서울특별시 성북구 회화나무로 60',
            position: { lat: 37.6064, lng: 127.0095 },
            buttonText: '더보기',
        },
        {
            name: '서울여자대학교',
            address: '서울 노원구 화랑로 621',
            position: { lat: 37.6284, lng: 127.0914 },
            buttonText: '더보기',
        },
        {
            name: '세종대학교',
            address: '서울 광진구 능동로 209',
            position: { lat: 37.5509, lng: 127.0745 },
            buttonText: '더보기',
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
                <div key={index}>
                    <MapContainer>
                        <LoadScript googleMapsApiKey="AIzaSyBM-CgI5JIXf0zpPtO-_EpkFwZmj_NnhA0">
                            <GoogleMap mapContainerStyle={containerStyle} center={university.position} zoom={15}>
                                <Marker position={university.position} />
                            </GoogleMap>
                        </LoadScript>
                    </MapContainer>
                    <InfoContainer>
                        <h3>{university.name}</h3>
                        <p>{university.address}</p>
                        <Button>{university.buttonText}</Button>
                    </InfoContainer>
                </div>
            ))}
        </Container>
    );
};

export default UnivMap;
