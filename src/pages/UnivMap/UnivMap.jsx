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
    TextContainer,
} from './UnivMap.style';

const UnivMap = () => {
    const universityData = [
        {
            name: '동덕여자대학교',
            address: '백주년기념관 B1 꽃이피움 CAFE 앞',
            operatingHours: '10:00 - 21:00',
            contact: 'camcoder2024.official@gmail.com',
            googleMapLink: 'https://www.google.co.kr/maps/place/%EC%B9%B4%ED%8E%98+%EA%BD%83%EC%9D%B4%ED%94%BC%EC%9B%80+%EB%8F%99%EB%8D%95%EC%97%AC%EB%8C%80%EC%A0%90/data=!4m6!3m5!1s0x357cbc817884c247:0x86b18b311e341150!8m2!3d37.6058314!4d127.0404708!16s%2Fg%2F11g0kj81g2?hl=ko&entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D',
            position: { lat: 37.6058314, lng: 127.0404708 },
        },
        {
            name: '서울여자대학교',
            address: '서울시 노원구 화랑로 621 샬롬하우스 기숙사 1층',
            operatingHours: '10:00 - 21:00',
            contact: 'camcoder2024.official@gmail.com',
            googleMapLink: 'https://www.google.co.kr/maps/place/%EC%84%9C%EC%9A%B8%EC%97%AC%EC%9E%90%EB%8C%80%ED%95%99%EA%B5%90+%EC%83%AC%EB%A1%AC%ED%95%98%EC%9A%B0%EC%8A%A4/data=!4m10!1m2!2m1!1z7ISc7Jq47Jes64yAIOyDrOuhrOq4sOyImeyCrA!3m6!1s0x357cb90851fcc7df:0x22c3ab6cee74d86f!8m2!3d37.6289458!4d127.0888736!15sChzshJzsmrjsl6zrjIAg7IOs66Gs6riw7IiZ7IKskgEPaG91c2luZ19jb21wbGV44AEA!16s%2Fg%2F11ryqyy02x?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D',
            position: { lat: 37.6290817, lng: 127.0888200 },
        },
        {
            name: '세종대학교',
            address: '사울시 광진구 능동로209  행복기숙사(새날관) 세탁실 앞',
            operatingHours: '10:00 - 21:00',
            contact: 'camcoder2024.official@gmail.com',
            googleMapLink: 'https://www.google.com/maps/place/%EC%84%B8%EC%A2%85%EB%8C%80%ED%95%99%EA%B5%90+%ED%96%89%EB%B3%B5%EA%B8%B0%EC%88%99%EC%82%AC(%EC%83%88%EB%82%A0%EA%B4%80)/@37.553262,127.0726568,15z/data=!4m2!3m1!1s0x0:0x822da47e82cbbfc?sa=X&ved=1t:2428&ictx=111',
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
                        <LoadScript googleMapsApiKey="AIzaSyBIhXszHMMF6gk1w8iwJ6Vz2Rrm1iIfQLQ">
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={university.position}
                                zoom={15}
                            >
                                <Marker position={university.position} />
                            </GoogleMap>
                        </LoadScript>
                    </MapContainer>
                    <InfoContainer>
                        <TextContainer>
                            <UniversityName>{university.name}</UniversityName>
                            <LinkText href={university.googleMapLink} target="_blank" rel="noopener noreferrer">
                                구글맵 링크
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
