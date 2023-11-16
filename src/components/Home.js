import { Container, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Container fluid>
      <h1 className="text-center text-primary p-4">Nobel Prize Winner</h1>
      <Row className="mt-4">
        <Col md={3}>
          <Link to="/name">
            <Button>Search By Name</Button>
          </Link>
        </Col>
        <Col md={3}>
          <Link to="/year">
            <Button>Search By Year</Button>
          </Link>
        </Col>
        <Col md={3}>
          <Link to="/yearandcategory">
            <Button>Search By Year And Category</Button>
          </Link>
        </Col>
        <Col md={3}>
          <Link to="/alphabeticalorder">
            <Button>Show Winner By Alphabetical Order</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
