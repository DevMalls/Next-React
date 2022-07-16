import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import CrmGroupStyles from "../styles/CrmGroup.module.css";
import GroupIcon from '../public/images/GroupIcon.png';

const CrmGroup = () => {
  return (
    <Row className={CrmGroupStyles.parent_row}>
    <Container>
      <Row  className="align-items-center justify-content-center ">
        <Col lg={5} md={5} sm={12} className={CrmGroupStyles.first_col} >
          <Stack gap={3}>
            <div>
              <p className={CrmGroupStyles.first_line}>Dont just integrate</p>
              <p className={CrmGroupStyles.second_line}>Accelerate your CRM</p>
            </div>
            <div className={CrmGroupStyles.crmGroupContent}>
              Propel your sales team into a state of flow with CRM
              Accelerations. Switch out boring hours of repetitive work with
              high-impact activities. Build a repeatable sales process.{" "}
            </div>
            <div><Button className={CrmGroupStyles.primary}>
              <span className={CrmGroupStyles.primary_label}>GET STARTED</span>
            </Button></div>
          </Stack>
        </Col>
        <Col lg={5} md={5} sm={12} className={CrmGroupStyles.second_col}>
        <Image src={GroupIcon} alt="CRM Group Image" height={500}/>
        </Col>        
      </Row>
    </Container>
    </Row>
  );
};
export default CrmGroup;
