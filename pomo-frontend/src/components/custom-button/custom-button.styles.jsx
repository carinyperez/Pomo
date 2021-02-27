import styled from 'styled-components'; 

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 40px;
    letter-spacing: 0.5px;
    line-height: 20px;
    padding: 0 35px 0 35px;
    font-size: 12px;
    background-color: #06d6a0;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center; 
    text-align: center; 
  
    &:hover {
      background-color: #e8e8e8;
      color: white; 
    }
`; 