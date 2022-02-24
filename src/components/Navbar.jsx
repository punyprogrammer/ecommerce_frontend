import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  @media screen and (max-width: 400px) {
    height: 50px;
  }
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 400px) {
    padding: 6px 0px;
    margin-bottom: 10px;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14;
  cursor: pointer;
  @media screen and (max-width: 400px) {
    display: none;
  }
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  outline: none;
  @media screen and (max-width: 400px) {
    width: 50px;
  }
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  @media screen and (max-width: 400px) {
    font-size: 18px;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 400px) {
    justify-content: "center";
    flex: 2;
  }
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-right: 14px;
  @media screen and (max-width: 400px) {
    font-size: 10px;
  }
`;
const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  console.log(quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN </Language>
          <SearchContainer>
            <Input />
            <SearchIcon />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Logo>SWAG SEWA</Logo>
          </Link>
        </Center>
        <Right>
          <Link style={{ textDecoration: "none", color: "black" }} to="/login">
            <MenuItem>SIGN IN </MenuItem>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/register"
          >
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }} to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
