import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import CrmAccelerationStyles from "../styles/CrmAccelerationStyles.module.css";
import CrmCardIcon1 from "../public/images/crm-acceleration-1.png";
import CrmCardIcon2 from "../public/images/crm-acceleration-2.png";
import CrmCardIcon3 from "../public/images/crm-acceleration-3.png";

const CrmAcceleration = () => {
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
          <Col lg={4} md={4} className={CrmAccelerationStyles.col}>
            <Card className={CrmAccelerationStyles.card}>
            <Card.Body className={CrmAccelerationStyles.card_body}>
                <Image
                  src={CrmCardIcon1}
                  alt="CRM Card Icon"
                  width={60}
                  height={60}
                />
                  <Card.Title  className={CrmAccelerationStyles.card_title}>
                    Never update your contacts manually</Card.Title>
                <Card.Text className={CrmAccelerationStyles.card_text}>
                  Any contact you add in CRM gets updated automatically in
                  Klenty. Set up Triggers to drive leads from Klenty back into
                  the CRM. Save hours everyday to focus on critical activities
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={4} className={CrmAccelerationStyles.col}>
            <Card className={CrmAccelerationStyles.card}>
              <Card.Body className={CrmAccelerationStyles.card_body}>
                <Image 
                  src={CrmCardIcon2}
                  alt="CRM Card Icon"
                  width={60}
                  height={60}
                />
                <Card.Title  className={CrmAccelerationStyles.card_title}>
                  Engage instantly with prospects who show intent
                </Card.Title>
                <Card.Text className={CrmAccelerationStyles.card_text}>
                  Auto-sync email engagement data like opens, clicks and replies
                  from Klenty right into your CRM. Get notified immediately.
                  Followup without skipping a beat.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={4} className={CrmAccelerationStyles.col}>
            <Card className={CrmAccelerationStyles.card}>
            <Card.Body className={CrmAccelerationStyles.card_body}>
                <Image
                  src={CrmCardIcon3}
                  alt="CRM Card Icon"
                  width={60}
                  height={60}
                />
                  <Card.Title  className={CrmAccelerationStyles.card_title}>
                    Outreach without leaving your CRM</Card.Title>               
                    <Card.Text className={CrmAccelerationStyles.card_text}>
                  Engage with prospects straight from your CRM.Book meetings
                  using Klenty- without ever logging into Klenty. No more
                  switching screens to execute sales outreach.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default CrmAcceleration;
