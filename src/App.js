import { useState } from "react";
import Card from "./components/Card/Card";
import Container from "./components/Container/Container";
import data from "./data/quotes.json";

const quotes = data.quotes;
const index = (max) => Math.floor(Math.random() * max);

function App() {
  const [quote, setQuote] = useState(() => quotes[index(quotes.length)]);
  const handleClick = () => setQuote(quotes[index(quotes.length)]);
  return (
    <>
      <main>
        <Container>
          <Card data={quote} onClick={handleClick} />
        </Container>
      </main>
    </>
  );
}

export default App;
