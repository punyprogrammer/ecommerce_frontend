import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
const Container = styled.div``;
const Title = styled.h1`
  text-align: center;
  margin: 10px;
  font-size: 28px;
  font-weight: 400;
  @media screen and (max-width: 400px) {
    font-size: 20px;
  }
`;
const FilterContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Filter = styled.div``;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 500px;
  margin-right: 10px;
  @media screen and (max-width: 400px) {
    font-size: 16px;
    margin:bottom:4px;
  }
`;
const Select = styled.select`
  padding: 6px;
`;
const Option = styled.option`
  padding: 6px;
`;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>BROWSE OUR CATALOGUE</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Colors:</FilterText>
          <Select>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Purple</Option>
            <Option>Pink</Option>
            <Option>Orange</Option>
            <Option>Green</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sizes:</FilterText>
          <Select>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort By:</FilterText>
          <Select>
            <Option>Price (Low to High)</Option>
            <Option>Price (High to Low)</Option>
            <Option>Newest Arrivals</Option>
            <Option>Best Sellers</Option>
            <Option>Rating</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
