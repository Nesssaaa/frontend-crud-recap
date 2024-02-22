import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import data from "../data.json";
import "../styles/global.css";
import { nanoid } from "nanoid";

export default function App({ Component, pageProps }) {
  const [musicals, setMusicals] = useState(data);

  function getMusical(id) {
    const musical = musicals.find((musical) => musical.id === id);
    return musical;
  }

  function editMusicalPage(id, data) {
    const updatedMusicals = musicals.map((musical) => {
      if (musical.id === id) {
        return { ...musical, ...data };
      } else {
        return musical;
      }
    });
    setMusicals(updatedMusicals);
  }

  function addMusical(data) {
    const newMusicals = [...musicals, { id: nanoid(), ...data }];
    setMusicals(newMusicals);
  }

  function deleteMusical(id) {
    const updatedMusicals = musicals.filter((musical) => musical.id !== id);
    setMusicals(updatedMusicals);
  }

  function toggleFavorite(id) {
    const updatedMusicals = musicals.map((musical) => {
      if (musical.id === id) {
        return { ...musical, isFavorite: !musical.isFavorite };
      } else {
        return musical;
      }
    });
    setMusicals(updatedMusicals);
  }

  return (
    <>
      <Nav />
      <main>
        <Component
          musicals={musicals}
          getMusical={getMusical}
          editMusicalPage={editMusicalPage}
          addMusical={addMusical}
          deleteMusical={deleteMusical}
          toggleFavorite={toggleFavorite}
          {...pageProps}
        />
      </main>
      <Footer />
    </>
  );
}
