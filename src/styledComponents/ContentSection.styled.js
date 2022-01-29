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
    margin-right: 76px;
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
    left: 60px;
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
    left: 41px;

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

  .position-timezone {
    left: 52px;

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
`;
