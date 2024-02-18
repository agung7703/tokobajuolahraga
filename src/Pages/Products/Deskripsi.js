import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { numberWithCommas } from "../../utils/Util";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../../style/Deskripsi.css";

function Deskripsi() {
  const location = useLocation();
  const history = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const selectedMenu = location.state.selectedMenu;
  const totalImages = 5;

  useEffect(() => {
    // Scroll ke atas halaman setelah komponen dimount
    window.scrollTo(0, 0);

    // Fungsi cleanup untuk menggulir ke atas saat komponen diunmount (opsional)
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  if (!location.state) {
    return <div>Data tidak tersedia.</div>;
  }

  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + totalImages) % totalImages);
  };

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % totalImages);
  };

  const handleBelanjaSekarang = () => {
    if (selectedMenu.link) {
      window.open(selectedMenu.link, "_blank");
    }
  };

  const handleGoBack = () => {
    history(-1);
  };

  return (
    <Container className="App ">
      <Row className="mt-4 mb-4">
        <div className="col">
          <button className="back-button" onClick={handleGoBack}>
            <i className="fas fa-arrow-left" /> Kembali
          </button>
        </div>
      </Row>
      <Row className="mt-4 mb-4">
        <div className="col-md">
          <div className="image-container">
            <div
              className="image-slider"
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              <img
                src={
                  selectedMenu.kategori && selectedMenu.kategori.nama
                    ? "images/" +
                      selectedMenu.kategori.nama.toLowerCase() +
                      "/" +
                      selectedMenu.thumbnail
                    : ""
                }
                alt="Foto"
              />
              <img
                src={
                  selectedMenu.kategori && selectedMenu.kategori.nama
                    ? "images/" +
                      selectedMenu.kategori.nama.toLowerCase() +
                      "/" +
                      selectedMenu.gambar1
                    : ""
                }
                alt="Foto"
              />
              <img
                src={
                  selectedMenu.kategori && selectedMenu.kategori.nama
                    ? "images/" +
                      selectedMenu.kategori.nama.toLowerCase() +
                      "/" +
                      selectedMenu.gambar2
                    : ""
                }
                alt="Foto"
              />
              <img
                src={
                  selectedMenu.kategori && selectedMenu.kategori.nama
                    ? "images/" +
                      selectedMenu.kategori.nama.toLowerCase() +
                      "/" +
                      selectedMenu.gambar3
                    : ""
                }
                alt="Foto"
              />
              <img
                src={
                  selectedMenu.kategori && selectedMenu.kategori.nama
                    ? "images/" +
                      selectedMenu.kategori.nama.toLowerCase() +
                      "/" +
                      selectedMenu.gambar4
                    : ""
                }
                alt="Foto"
              />
            </div>
            <button className="prev" onClick={handlePrev}>
              <i class="fas fa-arrow-left" />
            </button>
            <button className="next" onClick={handleNext}>
              <i class="fas fa-arrow-right" />
            </button>
          </div>
        </div>
        <div className="col-md mt-3">
          <h1 className="product-name">{selectedMenu.nama}</h1>
          <h3>
            Harga: Rp. <strong>{numberWithCommas(selectedMenu.harga)}</strong>
          </h3>
          <h4 className="mt-4">Deskripsi</h4>
          <hr />
          <p>{selectedMenu.deskripsi}</p>
          <Button variant="success" onClick={handleBelanjaSekarang}>
            Belanja Sekarang
          </Button>
        </div>
      </Row>
    </Container>
  );
}

export default Deskripsi;
