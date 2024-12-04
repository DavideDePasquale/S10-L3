import { Button, Col, Row } from "react-bootstrap";
import { Facebook } from "react-bootstrap-icons";
import { Instagram } from "react-bootstrap-icons";
import { Twitter } from "react-bootstrap-icons";
import { Youtube } from "react-bootstrap-icons";

function Footer() {
  return (
    <>
      <div className="px-4">
        <footer>
          <Row className="justify-content-center mt-5">
            <Col xs={6}>
              <Row>
                <Col className=" mb-2">
                  <Facebook
                    className="mx-2"
                    style={{ color: "rgb(173 181 189 / 64%)" }}
                  />
                  <Instagram
                    className="mx-2"
                    style={{ color: "rgb(173 181 189 / 64%)" }}
                  />
                  <Twitter
                    className="mx-2"
                    style={{ color: "rgb(173 181 189 / 64%)" }}
                  />
                  <Youtube
                    className="mx-2"
                    style={{ color: "rgb(173 181 189 / 64%)" }}
                  />
                </Col>
              </Row>
              <Row xs={1} sm={2} md={4} lg={4}>
                <Col>
                  <Row>
                    <Col className=" footer-links">
                      <p>
                        <a
                          href="#"
                          alt="footer link"
                          className="text-decoration-none fontSpecial2"
                          style={{ color: "rgb(173 181 189 / 64%)" }}
                        >
                          Audio and Subtitles
                        </a>
                      </p>
                      <p>
                        <a
                          href="#"
                          alt="footer link"
                          className="text-decoration-none fontSpecial2"
                          style={{ color: "rgb(173 181 189 / 64%)" }}
                        >
                          Media Center
                        </a>
                      </p>
                      <p>
                        <a
                          href="#"
                          alt="footer link"
                          className="text-decoration-none fontSpecial2"
                          style={{ color: "rgb(173 181 189 / 64%)" }}
                        >
                          Privacy
                        </a>
                      </p>
                      <p>
                        <a
                          href="#"
                          alt="footer link"
                          className="text-decoration-none fontSpecial2"
                          style={{ color: "rgb(173 181 189 / 64%)" }}
                        >
                          Contact us
                        </a>
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col className="footer-links">
                      <p>
                        <a
                          href="#"
                          alt="footer link"
                          className="text-decoration-none fontSpecial2"
                          style={{ color: "rgb(173 181 189 / 64%)" }}
                        >
                          Audio Description
                        </a>
                      </p>
                      <p>
                        <a
                          href="#"
                          alt="footer link"
                          className="text-decoration-none fontSpecial2"
                          style={{ color: "rgb(173 181 189 / 64%)" }}
                        >
                          Investor Relations
                        </a>
                      </p>
                      <p>
                        <a
                          href="#"
                          alt="footer link"
                          className="text-decoration-none fontSpecial2"
                          style={{ color: "rgb(173 181 189 / 64%)" }}
                        >
                          Legal Notices
                        </a>
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col className="footer-links">
                      <p>
                        <a
                          href="#"
                          alt="footer link"
                          className="text-decoration-none fontSpecial2"
                          style={{ color: "rgb(173 181 189 / 64%)" }}
                        >
                          Help Center
                        </a>
                      </p>
                      <p>
                        <a
                          href="#"
                          alt="footer link"
                          className="text-decoration-none fontSpecial2"
                          style={{ color: "rgb(173 181 189 / 64%)" }}
                        >
                          Jobs
                        </a>
                      </p>
                      <p>
                        <a
                          href="#"
                          alt="footer link"
                          className="text-decoration-none fontSpecial2"
                          style={{ color: "rgb(173 181 189 / 64%)" }}
                        >
                          Cookie Preferences
                        </a>
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col className="footer-links">
                      <p>
                        <a
                          href="#"
                          alt="footer link"
                          className="text-decoration-none fontSpecial2"
                          style={{ color: "rgb(173 181 189 / 64%)" }}
                        >
                          Gift Cards
                        </a>
                      </p>
                      <p>
                        <a
                          href="#"
                          alt="footer link"
                          className="text-decoration-none fontSpecial2"
                          style={{ color: "rgb(173 181 189 / 64%)" }}
                        >
                          Terms of Use
                        </a>
                      </p>
                      <p>
                        <a
                          href="#"
                          alt="footer link"
                          className="text-decoration-none fontSpecial2"
                          style={{ color: "rgb(173 181 189 / 64%)" }}
                        >
                          Corporate Information
                        </a>
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col className="mb-2">
                  <Button
                    type="button"
                    className="btn-sm footer-button rounded-0 mt-3 bg-transparent border-1"
                    style={{
                      borderColor: "rgb(173 181 189 / 64%)",
                      color: "rgb(173 181 189 / 64%)"
                    }}
                  >
                    Service Code
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col
                  className=" mb-2 mt-2 copyright fontSpecial"
                  style={{ color: "rgb(173 181 189 / 64%)" }}
                >
                  © 1997-2023 Netflix, Inc.
                </Col>
              </Row>
            </Col>
          </Row>
        </footer>
      </div>
    </>
  );
}
export default Footer;
