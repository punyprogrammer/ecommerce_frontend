import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { publicRequest } from "../requestMethods";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  @media screen and (max-width: 400px) {
    flex-direction: column;
    padding: 10px;
  }
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 75vh;
  object-fit: cover;
  @media screen and (max-width: 400px) {
    height: 45vh;
  }
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  @media screen and (max-width: 400px) {
    padding: 10px;
  }
`;
const Title = styled.h1`
  font-weight: 300;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 400;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  margin: 30px 0px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin:0px 10px;
  background-color: ${(props) => props.color};
  border:3px solid gray;
  border-width:${(props) => {
    return props.color === props.selectedColor ? "3px" : "0px";
  }};
border-color:'blue',
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 400px) {
    width: 100%;
    /* flex-direction: column; */
  }
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  /* @media screen and (max-width: 400px) {
    flex-direction: column;
  } */
  @media screen and (max-width: 400px) {
    margin-bottom: 15px;
  }
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: none;
  color: white;
  font-weight: 400;
  background-color: #1976d2;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #1566b2;
    transform: scale(1.1);
  }
  @media screen and (max-width: 400px) {
    min-width: 50%;
  }
`;

const Product = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const productId = location.pathname.split("/")[2];

  const [product, setProduct] = useState();
  const [colorSelected, setColorSelected] = useState(null);
  const [size, setSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  //useEffect to fetch product
  const fetchProduct = async () => {
    try {
      const res = await publicRequest.get(`/product/${productId}`);

      setProduct(res.data.data);
    } catch (error) {}
  };
  //funcion to  increase quantity
  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  //function to add to cart
  const handleAddToCart = () => {
    //dispatch actions
    dispatch(addProduct({ ...product, quantity, size, colorSelected }));
    console.log("click");
  };
  useEffect(() => {
    fetchProduct();
  }, [productId]);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product?.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product?.title}</Title>
          <Desc>{product?.desc}</Desc>
          <Price>${product?.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product?.color.map((c) => (
                <FilterColor
                  color={c}
                  key={c}
                  selectedColor={colorSelected}
                  onClick={() => setColorSelected(c)}
                />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product?.size.map((s) => (
                  <FilterSizeOption>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove
                style={{ cursor: "pointer" }}
                onClick={() => handleQuantity("dec")}
              />
              <Amount>{quantity}</Amount>
              <Add
                style={{ cursor: "pointer" }}
                onClick={() => handleQuantity("inc")}
              />
            </AmountContainer>
            <Button onClick={handleAddToCart}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};
export default Product;
