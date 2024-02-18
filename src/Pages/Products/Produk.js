// page Produk.js

import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../../style/Produk.css";
import Categories from "../../Components/Categories";
import { API_URL } from "../../utils/constants";
import Menus from "../../Components/Menus";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Menggunakan useNavigate untuk navigasi

function Produk() {
  const [menus, setMenus] = useState([]);
  const [kategoriDipilih, setKategoriDipilih] = useState("Semua Produk");
  const navigate = useNavigate(); // Menggunakan useNavigate untuk navigasi

  useEffect(() => {
    fetchData("Semua Produk"); // Memanggil fetchData dengan kategori default "Semua Produk"
  }, []);

  const fetchData = (kategori) => {
    axios
      .get(
        API_URL +
          "produk" +
          (kategori !== "Semua Produk" ? `?kategori.nama=${kategori}` : "")
      )
      .then((res) => {
        console.log("Response: ", res);
        setMenus(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeKategori = (value) => {
    setKategoriDipilih(value);
    fetchData(value); // Memanggil fetchData dengan kategori yang dipilih
  };

  return (
    <div className="App">
      <div className="mt-4">
        <Container fluid>
          <Row>
            <Categories
              changeKategori={changeKategori}
              kategoriDipilih={kategoriDipilih}
            />
            <Col className="mt-2">
              <h4>
                <strong>Daftar Produk</strong>
              </h4>
              <hr />
              <Row>
                {menus.map((menu) => (
                  <Menus
                    key={menu.id}
                    menu={menu}
                    navigate={navigate} // Menggantikan history dengan navigate
                  />
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Produk;
