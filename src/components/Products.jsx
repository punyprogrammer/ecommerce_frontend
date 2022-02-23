import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { popularProducts } from "../data/popularData";

import SingleProduct from "./SingleProduct";
const Container = styled.div`
  display: flex;
  padding: 50px;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.05);
`;
const Heading = styled.h1`
  text-align: center;
`;
const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  //function to fetch products
  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        category
          ? `http://localhost:5000/api/v1/product?category=${category}`
          : `http://localhost:5000/api/v1/product`
      );
      setProducts(res.data.data);
      setFilteredProducts(res.data.data);
      console.log(filteredProducts);
    } catch (error) {}
  };
  //useEffect to fetch products
  useEffect(() => {
    fetchProducts();
  }, [category]);
  //useEffect to filter products
  useEffect(() => {
    category &&
      filters &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, filters, category]);
  //useEffect to sort
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) => {
        return [...prev].sort((a, b) => a.createdAt - b.createdAt);
      });
    } else if (sort === "asc") {
      setFilteredProducts((prev) => {
        return [...prev].sort((a, b) => a.price - b.price);
      });
    } else {
      setFilteredProducts((prev) => {
        return [...prev].sort((a, b) => b.price - a.price);
      });
    }
  }, [sort]);
  return (
    <>
      {!category && <Heading>NEWEST ARRIVALS</Heading>}
      <Container>
        {category
          ? filteredProducts?.map((item) => (
              <SingleProduct product={item} key={item._id} />
            ))
          : products
              .slice(0, 8)
              .map((item) => <SingleProduct product={item} key={item._id} />)}
      </Container>
    </>
  );
};

export default Products;
