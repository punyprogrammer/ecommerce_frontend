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
  width: 20%;
  @media screen and (max-width: 400px) {
    width: 75%;
  }
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
const Input = styled.input`
  width: 90%;
  margin: 20px 0px 0px 10px;
  padding: 10px;
  /* border: none; */
  /* outline: none; */
`;
const Button = styled.button`
  margin-top: 20px;
  padding: 15px;
  border: none;
  width: 60%;
  color: white;
  font-weight: 400;
  letter-spacing: 1px;
  background-color: #1976d2;
  cursor: pointer;
  transition all 0.3s ease;
  &:hover {
    background-color: #1566b2;
    transform: scale(1.1);
  }
  margin: 20px auto;
`;
const LinkText = styled.div``;
const Link = styled.a`
  margin-left: 5px;
  transition all 0.3s ease;
  cursor: pointer;
  &:hover {
    color: #1976d2;
    text-decoration: underline;
  }
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>LOGIN </Title>
        <Form>
          <Input placeholder="Enter email" />
          <Input placeholder="Confirm Password" type="password" />

          <Button>Login</Button>
          <LinkText>
            Dont have an account?<Link>Register Here</Link>
          </LinkText>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
