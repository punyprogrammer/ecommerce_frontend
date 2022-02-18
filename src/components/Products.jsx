import React from "react";
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
const Products = () => {
  return (
    <>
      {/* <Heading>BEST SELLERS OF THE MONTH</Heading> */}
      <Container>
        {popularProducts.map((item) => (
          <SingleProduct product={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Products;
