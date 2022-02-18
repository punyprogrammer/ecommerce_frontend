import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 30px;
  background-color: #1976d2;
  text-align: center;
  color: white;
  padding: 6px;
  font-weight: 500;
  @media screen and (max-width: 400px) {
    font-size: 14px;
  }
`;
const Announcement = () => {
  return (
    <Container>
      Get Flat 30% Off On All Purchases Using SwagSena Premium Coupons
    </Container>
  );
};

export default Announcement;
