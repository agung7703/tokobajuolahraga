import React, { useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../style/Contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zhqweqc",
        "template_m2fro15",
        form.current,
        "2fjBtpveVN2sPFe2F"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();

          // Tambahkan notifikasi
          if (window.Notification && Notification.permission === "granted") {
            new Notification("Pesan Terkirim", {
              body: "Pesan Anda telah berhasil terkirim.",
            });
          } else if (
            window.Notification &&
            Notification.permission !== "denied"
          ) {
            Notification.requestPermission().then((permission) => {
              if (permission === "granted") {
                new Notification("Pesan Terkirim", {
                  body: "Pesan Anda telah berhasil terkirim.",
                });
              }
            });
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container>
      <Row className="mb-2 mt-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">Contact Us</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <Row className="sec_sp">
        <Col lg="5" className="mt-5">
          <address>
            <strong>Email: tokobajuolahraga1@gmail.com</strong>
            <p>
              <strong>Phone: +62 857-7265-9202</strong>
            </p>
          </address>
          <p>
            Silahkan contact kami melalui <strong>Email</strong> dan{" "}
            <strong>No</strong> kami di atas atau bisa melalui form kami. Kritik
            dan saran anda akan kami terima sepenuh hati serta menjadi bahan
            evaluasi kedepannya untuk kami. <br />
            <br />
            Terimakasih 😊
            <br />
            <strong>KOBARA & Teams</strong>
          </p>
        </Col>
        <Col lg="7" className="d-flex align-items-center">
          <form className="contact__form w-100" ref={form} onSubmit={sendEmail}>
            <Row>
              <Col lg="6" className="form-group">
                <label>Nama Anda</label>
                <input
                  className="form-control"
                  id="name"
                  name="User_name"
                  placeholder="Nama Anda"
                  type="text"
                  required
                />
              </Col>
              <Col lg="6" className="form-group">
                <label>Email Anda</label>
                <input
                  className="form-control rounded-0"
                  id="email"
                  name="User_email"
                  placeholder="contoh_123@xxx.com"
                  type="email"
                  required
                />
              </Col>
            </Row>
            <label>Pesan</label>
            <textarea
              className="form-control rounded-0"
              id="message"
              name="message"
              placeholder="Tulis Pesan Anda Disini"
              rows="5"
              required
            ></textarea>
            <br />
            <Row>
              <Col lg="12" className="form-group">
                <Button
                  className="btn ac_btn mb-5"
                  type="submit"
                  value="Send"
                  onClick={sendEmail}
                >
                  Send
                </Button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
