import React, { useEffect, useState } from "react";
import { Container, Col, Row, Dropdown, Button } from "react-bootstrap";
import { useParams } from "react-router";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const getProductDetail = async () => {
    setLoading(true);
    let url = `https://my-json-server.typicode.com/chaebyungsun/router_H-M/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setLoading(false);
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  if (loading || product == null) return <h1 className="loading">Loading</h1>;
  return (
    <div>
      <Container>
        <Row>
          <Col className="detail_img">
            <img src={product?.img} alt="" />
          </Col>
          <Col>
            <div className="detail_title">{product?.title}</div>
            <div className="detail_price">￦{product?.price}</div>
            <div className="detail_choice">
              {product.choice ? "Conscious choice" : ""}
            </div>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                사이즈
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">S</Dropdown.Item>
                <Dropdown.Item href="#/action-2">M</Dropdown.Item>
                <Dropdown.Item href="#/action-3">L</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="dark" className="add_button">
              추가
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
