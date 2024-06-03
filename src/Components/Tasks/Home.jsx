// src/components/Home.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Home = () => {
  const images = [
    { src: 'https://fcity.in/images/products/20310168/8b37c_512.jpg', title: 'Beautiful Party wear', text: 'Rs.1,299/-' },
    { src: 'https://assets.ajio.com/medias/sys_master/root/20230621/dor0/6492b028d55b7d0c6394f2e1/-473Wx593H-463994586-white-MODEL2.jpg', title: 'Beautiful Party wear', text: 'Rs.999/-' },
    { src: 'https://5.imimg.com/data5/TF/PP/XX/SELLER-48515382/western-printed-dress-500x500.jpg', title: 'Beautiful Party wear', text: 'Rs.1,199/-' },
    { src: 'https://cdn.shopify.com/s/files/1/0057/1968/7239/products/BW213_1.jpg', title: 'Beautiful Party wear', text: 'Rs.1,899/-' },
    { src: 'https://5.imimg.com/data5/SELLER/Default/2023/6/316541027/JT/HD/VB/8556646/gori8030-final-500x500.jpg', title: 'Beautiful Party wear', text: 'Rs.1,399/-' },
    { src: 'https://5.imimg.com/data5/SN/MM/YS/SELLER-93048433/ladies-western-wear-500x500.jpeg', title: 'Beautiful Party wear', text: 'Rs.1,799/-' },
  ];
  const cardImageStyle = {
    width: '100%',
    height: '500px',
    objectFit: 'cover',
  };

  return (
    <Container className="mt-1">
      <Row className="mb-4">
        <Col>
          <h1>AJIO Exclusives</h1>
          <p>Express yourself through fashion</p>
        </Col>
      </Row>
      <Row>
        {images.map((image, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={image.src} style={cardImageStyle} />
              <Card.Body>
                <Card.Title>{image.title}</Card.Title>
                <Card.Text>{image.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
