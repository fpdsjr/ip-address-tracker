import { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header";
import { GlobalStyle } from "./styledComponents/CreateGlobalStyle";
import { Container } from "./styledComponents/Container.styled";
import ContentSection from "./components/ContentSection";
import Map from "./components/Map";

const apiEndPoint =
  "https://geo.ipify.org/api/v2/country,city?apiKey=at_ZHNgMJqgjU4fc4UDL0fX1fxaC4COi&";

const typeQuery = {
  ip: "ipAddress=",
  domain: "domain=",
};
function App() {
  const [inputValue, setInputValue] = useState("");
  const [ipGeolocation, setIpGeolocation] = useState([]);

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  useEffect(() => {
    async function firstRequest() {
      const response = await fetch(`${apiEndPoint}${typeQuery.domain}`);
      const result = await response.json();
      setIpGeolocation(result);
    }
    firstRequest();
  }, []);

  async function handleButton(e) {
    e.preventDefault();
    try {
      const dealWithTheString = inputValue.replaceAll(".", "");
      const parsedString = parseFloat(dealWithTheString);
      let apiFetch =
        typeof parsedString === "NaN"
          ? `${apiEndPoint}${typeQuery.ip}${inputValue}`
          : `${apiEndPoint}${typeQuery.domain}${inputValue}`;

      const response = await fetch(apiFetch);
      const result = await response.json();
      setIpGeolocation(result);
    } catch (err) {
      alert(err);
    }
  }

  const rioCoords = [-22.9068, -43.1729];

  const { location } = ipGeolocation;

  return (
    <Container>
      <Header
        setInputValue={(inputValue, handleInput)}
        handleButton={handleButton}
      />
      <ContentSection ipGeolocation={ipGeolocation} />
      <GlobalStyle />
      <Map
        location={location ? [location.lat, location.lng] : rioCoords}
        defaultPosition={rioCoords}
      />
    </Container>
  );
}

export default App;
