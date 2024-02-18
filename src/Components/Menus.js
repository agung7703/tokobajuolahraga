import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { numberWithCommas } from "../utils/Util";
import { useNavigate } from "react-router-dom"; // Pastikan Anda mengimpor useNavigate

const Menus = ({ menu }) => {
  const navigate = useNavigate(); // Gunakan useNavigate

  const handleViewDetails = () => {
    navigate("/Deskripsi", { state: { selectedMenu: menu } });
  };

  return (
    <Col md={3} xs={12} className="mb-4">
      <Card className="shadow">
        <Card.Img
          variant="top"
          src={
            menu.kategori && menu.kategori.nama
              ? "images/" +
                menu.kategori.nama.toLowerCase() +
                "/" +
                menu.thumbnail
              : ""
          }
        />
        <Card.Body>
          <Card.Title>{menu.nama}</Card.Title>
          <Card.Text>
            <strong>Rp. {numberWithCommas(menu.harga)}</strong>
          </Card.Text>
          <Button variant="primary" onClick={handleViewDetails}>
            Lihat Selengkapnya
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Menus;
