import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url("https://images.unsplash.com/photo-1533858455121-cad255c592dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJsYWNrJTIwd29tYW4lMjBnbGFzc2VzfGVufDB8MHwwfGJsYWNrX2FuZF93aGl0ZXw%3D&auto=format&fit=crop&w=500&q=60");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* background-cover: contain; */
`;
const Wrapper = styled.div`
  padding: 25px;
  background-color: #ffffff;
  width: 40%;
  @media screen and (max-width: 400px) {
    width: 80%;
  }
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 400px) {
    align-items: center;
  }
`;
const Input = styled.input`
  width: 40%;
  margin: 20px 0px 0px 10px;
  padding: 10px;
  @media screen and (max-width: 400px) {
    width: 80%;
  }
`;
const Agreement = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  @media screen and (max-width: 400px) {
    margin: 2px;
    width: 100%;
  }
`;
const CheckBox = styled.input`
  margin-right: 10px;
`;
const AgreementText = styled.p`
  font-size: small;
`;
const Button = styled.button`
  padding: 15px;
  border: none;
  color: white;
  font-weight: 400;
  letter-spacing: 1px;
  background-color: #1976d2;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #1566b2;
    transform: scale(1.1);
  }
  margin: 0 auto;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE A ACCOUNT</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="UserName" />
          <Input placeholder="Email" />
          <Input placeholder="Password" type="password" />
          <Input placeholder="Confirm Password" type="password" />
          <Agreement>
            <CheckBox type="checkbox" />
            <AgreementText>
              By creating an account ,I consent to processing of my personal
              data in accordance of <b>Privacy Policy</b>
            </AgreementText>
          </Agreement>
          <Button>REGISTER</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
