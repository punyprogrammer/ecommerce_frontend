import React from "react";
import styled from "styled-components";
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  @media screen and (max-width: 400px) {
    margin: 0px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  &:hover {
    filter: brightness(60%);
  }
  @media screen and (max-width: 400px) {
    height: 30vh;
    width: 100vw;
  }
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.08);
    background-color: white;
  }
`;

const CategoryItem = ({ category }) => {
  return (
    <Container>
      <Image src={category.src} />
      <Info>
        <Title>{category.text}</Title>
        <Button>SHOW NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
