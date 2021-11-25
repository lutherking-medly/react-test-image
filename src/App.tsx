import React from 'react';
import logo from './logo.svg';
import './App.css';
import AmexCard from './AmexCard/Amex.svg';
import * as Styled from './CardLogo.styled';
import DiscoverCard from './DiscoverCard/Discover.svg';
import MasterCard from './MasterCard/Mastercard.svg';
import UnknownCard from './UnknownCard';
import VisaCard from './VisaCard/visa.svg';

 enum CardBrands {
  amex = 'AMERICAN_EXPRESS',
  discover = 'DISCOVER',
  mastercard = 'MASTERCARD',
  visa = 'VISA',
}

const cardLogo = (brand: string) => {
  
  switch (brand) {
      case CardBrands.amex:
          return <Styled.cardImg src={AmexCard} />;
      case CardBrands.mastercard:
          return <Styled.cardImg src={MasterCard} />;
      case CardBrands.visa:
          return <Styled.cardImg src={VisaCard} />;
      case CardBrands.discover:
          return <Styled.cardImg src={DiscoverCard} />;
      default:
          return <UnknownCard />;
  }
};

const Cards: React.FC<{ brand: string }> = ({ brand }) => {
  return (
  <div> 
    {cardLogo(brand)}
  </div>
  );
};


export default Cards;
