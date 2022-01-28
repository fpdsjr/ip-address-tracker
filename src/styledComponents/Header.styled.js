import styled from "styled-components";
import bg from "../images/pattern-bg.png";
import svgButton from "../images/icon-arrow.svg";

const veryDarkGrey = "hsl(0, 0%, 17%)";
const darkGrey = "hsl(0, 0%, 59%)";

export const HeaderStyled = styled.header`
  width: 100%;
  height: 280px;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  & h1 {
    text-align: center;
    color: white;
    font-size: 1.95rem;
    font-weight: 500;
    padding-top: 30px;
    margin-right: 4px;
    margin-bottom: 27px;
  }

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Input = styled.input`
  width: 500px;
  height: 58px;
  border-radius: 15px 0px 0px 15px;
  padding: 13px 24px;
  font-size: 18px;
  border: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${darkGrey};
  }
`;

export const Button = styled.button`
  width: 58px;
  height: 58px;
  background-color: #000000;
  outline: none;
  border: none;
  border-radius: 0 15px 15px 0;
  background-image: url(${svgButton});
  background-repeat: no-repeat;
  background-size: 11px;
  background-position: center;
  position: relative;
  left: -3px;

  &:active {
    background-color: ${veryDarkGrey};
    transform: scale(0.95);
  }
`;
