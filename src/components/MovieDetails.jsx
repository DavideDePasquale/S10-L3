import { useEffect, useState } from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true); // Stato per gestire il caricamento
  const [error, setError] = useState(null); // Stato per eventuali errori

  useEffect(() => {
    setLoading(true); // Imposta lo stato di caricamento quando inizia il fetch
    setError(null); // Resetta l'errore in caso di nuovo fetch

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
          setLoading(false); // Imposta lo stato di caricamento su false
        } else {
          throw new Error(filmObj.Error); // Gestisce eventuali errori nella risposta
        }
      })
      .catch((err) => {
        console.log(err);
        setError(err.message); // Imposta l'errore
        setLoading(false); // Imposta lo stato di caricamento su false
      });
  }, [id]);

  if (loading) {
    return <p>Caricamento in corso...</p>; // Mostra il messaggio di caricamento
  }

  if (error) {
    return <p>{`Errore: ${error}`}</p>; // Mostra l'errore
  }

  // Quando il film è stato caricato correttamente
  return (
    <Card className="mb-1 text-bg-none">
      <Row className="g-0">
        <Col md={3}>
          <Image src={film.Poster} alt={film.Title} />
        </Col>
        <Col md={3}>
          <Card.Body>
            <Card.Title>
              {film.Title} <hr />
              <small className="text-body-secondary"> {film.Released}</small>
            </Card.Title>
            <Card.Text>{film.Plot}</Card.Text>
            <Card.Text>
              <small className="text-danger">
                Punteggio medio : {film.imdbRating}/10
              </small>
              <small className="text-success">({film.imdbVotes} Voti)</small>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default MovieDetails;
