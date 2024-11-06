import styled from "styled-components";


export const Container = styled.div`
    padding: 20px;
    background-color: #E8EEEA;
    width: 100%;
    font-family: "Pretendard-Regular";
`;

export const Title = styled.h1`
    text-align: center;
    color: #23443D;
    line-height: 35px;
    margin-bottom: 3rem;
    margin-top: 5rem;
`;

export const MapContainer = styled.div`
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
    border-radius: 10px;
    overflow: hidden;
`;

export const InfoContainer = styled.div`
  padding: 10px;
  background-color: #f0f5f5;
  border-radius: 5px;
  margin-top: -15px;
`;


export const UnivItem = styled.div`
  display: flex;
  width: 80%;
  margin-bottom: 30px;
  background-color: #f0f5f5;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const UniversityName = styled.h3`
  margin: 0;
`;

export const LinkText = styled.a`
  color: #4CAF50;
  text-decoration: none;
  font-size: 0.9em;
  &:hover {
    text-decoration: underline;
  }
`;

export const InfoText = styled.p`
  margin: 5px 0;
  font-size: 0.9em;
`;