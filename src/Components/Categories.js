import React, { Component } from "react";
import { Col, ListGroup } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../utils/constants";

export default class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "kategori")
      .then((res) => {
        console.log("Response : ", res);
        const categories = res.data;
        this.setState({ categories });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { categories } = this.state;
    const { changeKategori, kategoriDipilih } = this.props;

    return (
      <Col md={3} sm={12} mt="2">
        <h4>
          <strong>Daftar Kategori</strong>
        </h4>
        <hr />
        <ListGroup>
          <ListGroup.Item
            onClick={() => changeKategori("Semua Produk")} // Menambahkan event handler untuk item "Semua Produk"
            className={kategoriDipilih === "Semua Produk" && "kategori-aktif"}
          >
            <h5>Semua Produk</h5>
          </ListGroup.Item>
          {categories &&
            categories.map((kategori) => (
              <ListGroup.Item
                key={kategori.id}
                onClick={() => changeKategori(kategori.nama)}
                className={
                  kategoriDipilih === kategori.nama && "kategori-aktif"
                }
              >
                <h5>{kategori.nama}</h5>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Col>
    );
  }
}
