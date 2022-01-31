import styled from "styled-components";

const veryDarkGrey = "hsl(0, 0%, 17%)";
const darkGrey = "hsl(0, 0%, 59%)";

export const ContentSectionStyled = styled.section`
  width: 1110px;
  height: 160px;
  background-color: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  border-radius: 20px;
  position: relative;
  top: -80px;
  right: 2px;
  z-index: 6;

  & ul {
    list-style: none;
    color: ${darkGrey};
    font-weight: 500;
    margin-bottom: 30px;
    margin-right: 55px;
  }

  & li {
    font-size: 26px;
    font-weight: 500;
    margin-top: 10px;
    color: ${veryDarkGrey};
  }

  & div {
    & strong {
      font-size: 12px;
      position: relative;
      bottom: 2px;
      left: 0.5px;
      letter-spacing: 2px;
    }
  }

  .top {
    position: relative;
    top: -5px;
    left: 0px;
    height: 50px;
    width: 180px;

    &:before {
      content: "";
      display: inline-block;
      width: 0.5px;
      height: 75px;
      background: #cfcfcf;
      position: absolute;
      top: 50%;
      margin-left: -33px;
      margin-top: 21px;
      transform: translate(-50%, -50%);
    }
  }

  .position-isp {
    left: 23px;

    &:before {
      content: "";
      display: inline-block;
      width: 0.5px;
      height: 75px;
      background: #cfcfcf;
      position: absolute;
      top: 50%;
      margin-left: -34px;
      margin-top: 21px;
      transform: translate(-50%, -50%);
    }
  }

  .position-timezone {
    left: 13px;

    &:before {
      content: "";
      display: inline-block;
      width: 0.5px;
      height: 75px;
      background: #cfcfcf;
      position: absolute;
      top: 50%;
      margin-left: -34px;
      margin-top: 21px;
      transform: translate(-50%, -50%);
    }
  }

  @media (max-width: 1190px) {
    width: 330px;
    height: 291px;
    flex-direction: column;
    top: -113px;
    text-align: center;
    background-color: red;

    ul {
      margin-right: -5px;
      margin-bottom: 10px;
    }

    li {
      font-size: 12px;
      font-weight: 700;
    }

    & div {
      & strong {
        font-size: 8px;
        bottom: -3px;
      }
    }
  }

  .top {
    position: relative;
    top: -5px;
    left: 0px;
    height: 50px;
    width: 180px;

    &:before {
      height: 75px;
    }
  }
`;
