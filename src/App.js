import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Container,
  Row,
  Col,
  Navbar,
  Button
} from 'react-bootstrap'

function App() {
  const products = [
    {
      id: 1,
      name: "paneer butter masala",
      price: 200
    },
    {
      id: 2,
      name: "paneer chilli",
      price: 250
    },
    {
      id: 3,
      name: "roasted chicken",
      price: 300
    }
  ];
  let cart_items = [];

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">React POS System</Navbar.Brand>
      </Navbar>
      <Container>
        <Row>
          <Col sm={8}>
            <Row>
              {products.map((product, index) => (
                <Col sm={2}>
                  <Button style={{ height: "120px" }}>
                    {product.name}
                    <br></br>
                    (Rs {product.price})
                  </Button>
                </Col>
              ))}
            </Row>
          </Col>
          <Col sm={4}>
            {
              cart_items.length
                ? (
                  <p>sdsdsdsd</p>
                )
                : (
                <p>No item</p>
              )
            }
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
