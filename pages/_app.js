import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import data from "../data.json";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  const [musicals, setMusicals] = useState(data);

  function getMusical(id) {
    const musical = musicals.find((musical) => musical.id === id);
    return musical;
  }

  return (
    <>
      <Nav />
      <main>
        <Component musicals={musicals} getMusical={getMusical} {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
