import React, { useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
    console.log(filters);
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>BROWSE OUR CATALOGUE</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Colors:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option>white</Option>
            <Option>black</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>purple</Option>
            <Option>pink</Option>
            <Option>orange</Option>
            <Option>green</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sizes:</FilterText>
          <Select name="size" onChange={handleFilters}>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort By:</FilterText>
          <Select name="sort" onChange={(e) => setSort(e.target.value)}>
            <Option value="asc">Price (Low to High)</Option>
            <Option value="desc">Price (High to Low)</Option>
            <Option value="newest">Newest Arrivals</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
