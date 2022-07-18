import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import FooterStyles from "../styles/Footer.module.css";
import PreviousIcon from "../public/images/previous.png";
import NextIcon from "../public/images/next.png";
import * as data from "../utils/data";
const Footer = () => {
  const getCarouselDetails = () => {
    return data.CarouselDetails.map((carousel, index) => {
      return (
        <Carousel.Item key={index}>
          <Row className={FooterStyles.slider}>
            <Col lg={8} md={8} className={FooterStyles.slider_conent}>
              <Stack gap={3}>
                <div>
                  <Image
                    src={data.vectorIcon}
                    alt="Footer Slider Icon"
                    width={60}
                    height={50}
                  />
                </div>
                <div className={FooterStyles.footer_content}>
                  {carousel.footerContent}
                </div>
                <Row className={FooterStyles.slider_author_content}>
                  <Col lg={3} md={3} xs={2}>
                    <Image
                      src={carousel.authorLogo}
                      alt="Footer Author Logo"
                      width={100}
                      height={45}
                    />
                  </Col>
                  <Col lg={9} md={9} xs={5}>
                    <div className={FooterStyles.footer_author}>{carousel.authorName}</div>
                    <div className={FooterStyles.footer_author_role}>
                      {carousel.authorRole}
                    </div>
                  </Col>
                </Row>
              </Stack>
            </Col>

            <Col lg={4} md={4} className={FooterStyles.personIcon}>
              <Image src={carousel.authorImage} alt="Author Image" width={289} height={351} />
            </Col>
          </Row>
        </Carousel.Item>
      );
    });
  };

  return (
    <div className={FooterStyles.parent}>
      <Container className={FooterStyles.container}>
        <Row>
          <div className={FooterStyles.footerTitle}>
            What our customers have to say
          </div>
        </Row>

        <Carousel indicators={false}> {getCarouselDetails()}</Carousel>   
      </Container>
    </div>
  );
};
export default Footer;
