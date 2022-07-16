import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import CrmAccelerationStyles from "../styles/CrmAccelerationStyles.module.css";
import * as data from '../utils/data';

const CrmAcceleration = () => {

  const getCardDetails = () => {
    return data.cardDetails.map((card, index) => {
      return (
        <Col lg={4} md={4} className={CrmAccelerationStyles.col} key={index}>
        <Card className={CrmAccelerationStyles.card}>
        <Card.Body className={CrmAccelerationStyles.card_body}>
            <Image
              src={card.icon}
              alt="CRM Card Icon"
              width={60}
              height={60}
            />
              <Card.Title  className={CrmAccelerationStyles.card_title}>
                {card.title}</Card.Title>
            <Card.Text className={CrmAccelerationStyles.card_text}>
            {card.text}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      );
    });
  };
  
  return (
    <div className={CrmAccelerationStyles.parent}>
      <Container className={CrmAccelerationStyles.container}>
        <Row>
          <div className={CrmAccelerationStyles.CrmAccelerationTitle}>
            CRM Acceleration
          </div>
        </Row>
        <Row>
          <div className={CrmAccelerationStyles.CrmAccelerationSubTitle}>
            Everything CRM Integrations was supposed to be. And more.
          </div>
        </Row>

        <Row className="justify-content-md-center">
        {getCardDetails()}
        </Row>
      </Container>
    </div>
  );
};
export default CrmAcceleration;
