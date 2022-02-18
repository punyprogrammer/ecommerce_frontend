import styled from "styled-components";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import PhoneIcon from "@mui/icons-material/Phone";
import RoomIcon from "@mui/icons-material/Room";
import MailIcon from "@mui/icons-material/Mail";
const Container = styled.div`
  display: flex;
@media screen and (max-width: 400px) {
  flex-direction: column;
}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  @media screen and (max-width: 400px) {
    display: none;
  }
`;
const Title = styled.h3`
  margin-bottom: 20px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  flex: 50%;
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    color: teal;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const PaymentItem = styled.img`
  width: 40%;
  height: 40%;
  margin-bottom: 10px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SWAG SENA</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          ex veritatis, consequatur vero quasi magnam rerum? Quod, laboriosam
          unde. Natus?
        </Desc>
        <SocialContainer>
          <SocialIcon bg="3b5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon bg="55acee">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon bg="e60023">
            <PinterestIcon />
          </SocialIcon>
          <SocialIcon bg="e4405f">
            <InstagramIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Accouunt</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms & Conditions</ListItem>
          <ListItem>Customer Grievances</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Get In Touch With Us</Title>
        <ContactItem>
          <RoomIcon style={{ marginRight: "20px" }} />
          P-89,7th Avenue ,Wilkinson Street ,London
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: "20px" }} />
          1-56456-456456-65
        </ContactItem>
        <ContactItem>
          <MailIcon style={{ marginRight: "20px" }} />
          support@swagseva.com
        </ContactItem>
        <PaymentItem src="http://brainsins.com/en/wp-content/uploads/2015/01/paypal.jpg"></PaymentItem>
      </Right>
    </Container>
  );
};

export default Footer;
