import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=78694dd5&i=${id}`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nel recupero dei dati");
        }
      })
      .then((filmObj) => {
        console.log(filmObj); // Aggiungi questo per vedere cosa ricevi dall'API
        if (filmObj.Response === "True") {
          setFilm(filmObj); // Imposta il film se la risposta è valida
        } else {
          throw new Error(filmObj.Error); // Gestisce eventuali errori nella risposta
        }
      })
      .catch((err) => {
        console.log(err);
        setFilm(null); // Se c'è un errore, resetta il film
      });
  }, [id]);
  console.log("Film state:", film);
  if (!film) {
    return <p>Caricamento o errore...</p>; // Mostra un messaggio se il film non è disponibile
  }

  // Quando il film è stato caricato correttamente
  return (
    <div className="text-center">
      <h1>{film.Title}</h1>
      <img src={film.Poster} alt={film.Title} style={{ width: "50%" }} />
      <p>{film.Plot}</p>
      <cite>{film.Writer}</cite>
    </div>
  );
};

export default MovieDetails;
