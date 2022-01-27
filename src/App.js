import "./App.css";
import Header from "./components/Header";
import { GlobalStyle } from "./styledComponents/CreateGlobalStyle";
import { Container } from "./styledComponents/Container.styled";
import ContentSection from "./components/ContentSection";

function App() {
  return (
    <Container>
      <Header />
      <ContentSection />
      <GlobalStyle />
    </Container>
  );
}

export default App;
