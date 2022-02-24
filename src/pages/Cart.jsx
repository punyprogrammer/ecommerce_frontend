import {
  AddCircleOutlineOutlined,
  RemoveCircleOutlineOutlined,
} from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { publicRequest, userRequest } from "../requestMethods";
import { useHistory } from "react-router-dom";
const KEY = "pk_test_5cadjRFNC8GSVeUFBTp3bJQW00kOUrFl3P";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  @media screen and (max-width: 400px) {
    padding: 10px;
  }
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
  @media screen and (max-width: 400px) {
    display: none;
  }
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`;
const Info = styled.div`
  flex: 3;
  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  @media screen and (max-width: 400px) {
    flex-direction: column;
    text-align: center;
  }
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 200px;
  @media screen and (max-width: 400px) {
    width: 90vw;
  }
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  @media screen and (max-width: 400px) {
    margin: 0 auto;
  }
`;
const ProductSize = styled.span`
  flex: 1;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 300;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
  @media screen and (max-width: 400px) {
    text-align: center;
  }
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: spaee-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
  @media screen and (max-width: 400px) {
    text-align: center;
  }
`;
const SummaryItemText = styled.div`
  @media screen and (max-width: 400px) {
    text-align: center;
  }
`;
const SummaryItemPrice = styled.span``;
const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 500;
  transition: all 0.2s ease-in;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();
  const onToken = (token) => {
    setStripeToken(token);
  };
  //useEffect to trigger payment to backend server
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        },{
          headers: {
            'Authorization': `Bearer ${KEY}`
          }

        });
        history.push("/success", {
          stripeData: res.data,
          products: cart, });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Cart({cart.quantity})</TopText>
            <TopText>Your Wishlists(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor bgColor={product.colorSelected} />
                    <ProductSize>
                      <b>Size:</b>
                      {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <AddCircleOutlineOutlined />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <RemoveCircleOutlineOutlined />
                  </ProductAmountContainer>
                  <ProductPrice>
                    ${product.quantity * product.price}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>SubTotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.9</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="Swag Sewa"
              image="https://user-images.githubusercontent.com/83149058/155345866-6cf1b78d-516a-4bc4-bf86-56eebbcabd8e.png"
              billingAddress
              shippingAddress
              description={`Your cart total is ${cart.total}`}
              amount={cart.total * 100}
              stripeKey={KEY}
              token={onToken}
            >
              <SummaryButton>CHECKOUT NOW</SummaryButton>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
