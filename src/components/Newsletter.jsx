import React from "react";
import SendIcon from "@mui/icons-material/Send";
import styled from "styled-components";
const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  @media screen and (max-width: 400px) {
    font-size: 50px;
  }
`;
const Input = styled.input`
  width: 80%;
  padding: 10px;
  font-size: 20px;
  border: none;
  outline: none;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  @media screen and (max-width: 400px) {
    text-align: center;
    font-size: 18px;
  }
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 400px) {
    width: 80%;
  }
`;

const Button = styled.button`
  width: 12%;
  height: 40px;
  border-radius: 3px;
  color: white;
  border: none;
  background-color: #1976d2;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #1b588e;
  }
`;
const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>
        Dont wanna miss the great discounts on our latest offerings!Subscribe to
        our newsletter below!!
      </Desc>
      <InputContainer>
        <Input placeholder="Enter your email here.." />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
