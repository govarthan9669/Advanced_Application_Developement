// Import necessary modules and components
import React from 'react';
import styled from 'styled-components';
import Header from '../pages/Header';
import Footer from '../pages/Footer';
import {Link} from "react-router-dom";


// Styled components for styling
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  margin: 100px; /* Add margin to create space around the container */
`;

// Main Card component (updated for image above title and shadow effect)
const CardContainer = styled.div`
  border: 1px solid #ddd; /* border for each card */
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* shadow effect */
  height: 62vh;
  transition: transform 0.3s ease-in-out; /* Added transition effect */
  &:hover {
    transform: scale(1.03); /* Zoom in effect on hover */
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 33vh; /* set height for the image */
  background-size: cover;
`;

const CardContent = styled.div`
  padding: 16px;
  text-align: center;
  
`;

const CardTitle = styled.h2`
  margin-top: 16px;
  color: #333;
`;

const CardDescription = styled.p`
color: #555843;
font-weight:600;
`;

const ApplyNowButton = styled.button`
  background-color: #597E52;
  color: white;
  padding: 11px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 320px;
  

  &:hover {
    background-color: #45a049;
  }
`;

const KnowMoreButton = styled.button`
  background-color: #CD8D7A;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  

  &:hover {
    background-color: #2980b9;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

// Main Card component (updated with two buttons)
const Card = ({ data }) => {
  const { imageSrc, title, description } = data;

  return (
    <CardContainer>
      <CardImage src={imageSrc} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <ButtonContainer>
          <Link to="/form"><ApplyNowButton>Apply Now</ApplyNowButton></Link>
          <KnowMoreButton>Know More</KnowMoreButton>
        </ButtonContainer>
      </CardContent>
    </CardContainer>
  );
};

// Main App component
const Apply = () => {
  // Sample card data
  const cardData = [
    {
      imageSrc: "images/corpLoan.jpg",
      title: "Crop Loans",
      description: "Crop loans, also known as Kisan Credit Card , are specifically designed to meet the short-term financial requirements of farmers during the cultivation season.",
    },
    {
      imageSrc: "images/farmMech.jpg",
      title: "Farm Mechanization Loans",
      description: "Farm mechanization loan focuses on promoting modern agricultural practices by providing financial assistance for the purchase of farm machinery and equipment. ",
    },
    {
        imageSrc: "images/loan.jpg",
        title: "Land Purchase Loans",
        description: "Land purchase loan aim to facilitate the acquisition of agricultural land by landless, share croppers, small and marginal farmers, helping them expand their cultivation areas.",
    },
    {
        imageSrc: "images/livestock.jpg",
        title: "Livestock Loans",
        description: "Livestock loans which are also known as loans for allied agriculture activities , are designed to meet the financial requirements of farmers involved in animal husbandry.",
    },
    {
        imageSrc: "images/liveStocks.jpg",
        title: "Warehouse Receipt Loans",
        description: "Warehouse receipt loan provide farmers with access to credit based on the value of their stored agricultural commodities. Under this system, farmers deposit their produce it. ",
    },
    {
      imageSrc: "images/solarpump.jpg",
      title: "Solar Pump Set Loan",
      description: "Farmers can take advantage of solar financing to purchase a solar photovoltaic water pumping system. This agriculture loan usually is extended for a tenure of 10 years",
    },
    // Additional card data objects as needed
  ];

  return (
    <div>
      {/* Header component */}
      <Header />
      {/* Main content with card grid */}
      <div style={{ marginTop: '40px' }}>
        <GridContainer>
          {cardData.map((card, index) => (
            <Card key={index} data={card} />
          ))}
        </GridContainer>
      </div>
      {/* Footer component */}
      <Footer />
    </div>
  );
};

// Export the main component
export default Apply;
