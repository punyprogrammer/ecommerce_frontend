import React from "react";
import styled from "styled-components";
import { Categories as CategoryData } from "../data/categories";
import CategoryItem from "./CategoryItem";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  @media screen and (max-width: 400px) {
    padding: 0px;
    flex-direction: column;
    margin: 0px;
  }
`;
const Categories = () => {
  return (
    <Container>
      {CategoryData.map((item) => (
        <CategoryItem category={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
