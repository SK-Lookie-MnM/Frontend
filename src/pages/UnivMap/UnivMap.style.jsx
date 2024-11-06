import styled from "styled-components";


export const Container = styled.div`
    padding: 20px;
    background-color: #e0f7fa;
    width: 100%;
`;

export const Title = styled.h1`
    text-align: center;
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

export const Button = styled.button`
  padding: 5px 10px;
  margin-top: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;