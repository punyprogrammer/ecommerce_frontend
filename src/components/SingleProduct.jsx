import React from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
const Info = styled.div`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease-in;
  justify-content: center;
  z-index: 3;
  cursor: pointer;
`;
const Container = styled.div`
  flex: 1;
  padding: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  // applying styles to a children container
  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
const Icon = styled.div`
  height: 40px;
  width: 40px;
  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: white;
  margin-right: 20px;
  transition: all 0.2s ease-in;
  &:hover {
    transform: scale(1.2);
  }
`;

const SingleProduct = ({ product }) => {
  return (
    <Container>
      <Circle />
      <Image src={product.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>

        <Icon>
          {" "}
          <FavoriteBorderOutlinedIcon />
        </Icon>
       <Link to={`/product/${product._id}`}>
        <Icon>
          {" "}
          <SearchOutlinedIcon />
        </Icon>
       </Link>
      </Info>
    </Container>
  );
};

export default SingleProduct;
