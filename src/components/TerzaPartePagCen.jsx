import { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";

const TerzaPartePagCen = () => {
  const [film1, setFilm1] = useState([]);
  const getFilm = () => {
    fetch("https://www.omdbapi.com/?apikey=78694dd5&s=Scooby Doo")
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore!");
        }
      })
      .then((film) => {
        console.log("Risposta json server", film);
        if (film.Search) {
          setFilm1(film.Search.slice(0, 6));
        } else {
          console.error("Nessun film trovato");
        }
      })
      .catch((e) => {
        console.log("Error", e);
      });
  };

  useEffect(() => {
    getFilm();
  }, []);

  return (
    <>
      {/* Contenitore griglia */}
      <Row xs={1} sm={2} md={3} lg={3} xl={6} className="mb-4">
        {film1.map((film) => (
          <Col key={film.imdbID} className="mb-4 text-center px-1">
            <Card className="animazioneCard border-0 h-100">
              <Card.Img
                src={film.Poster}
                alt={film.Title}
                className="img-fluid h-100"
              />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default TerzaPartePagCen;
