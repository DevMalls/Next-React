import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import FooterStyles from "../styles/Footer.module.css";
import Vector from "../public/images/Vector.png";
import DoubleLogo from "../public/images/double-logo.png";
import JMPLogo from "../public/images/jump-logo.png";
import RedEye from "../public/images/red-eye.png";
import Person1 from "../public/images/person1.png";
import Person2 from "../public/images/person2.png";
import PreviousIcon from "../public/images/previous.png";
import NextIcon from "../public/images/next.png";
const Footer = () => {
  const previous = { 'float' : "right", 'position' : "relative", 'background-color': "#EBF6FF", 'height' : "50px", 'width' : "40px"};
  const next = {'position' : "relative", 'background-color': "#EBF6FF", 'height' : "50px", 'width' : "40px"};
  const paddingSliderIcon = { 'padding-bottom': '50px'};
  const colStyle =  {'margin':"0px", 'padding' : "0px"};
  return (
    <div className={FooterStyles.parent}>
      <Container className={FooterStyles.container}>
        <Row>
          <div className={FooterStyles.footerTitle}>
            What our customers have to say
          </div>
        </Row>

        <div
          id="footerAuthorSlider"
          className="carousel"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <Row className={FooterStyles.slider}>
                <Col lg={8} md={8} className={FooterStyles.slider_conent}>
                  <Stack gap={3}>
                    <div>
                      <Image
                        src={Vector}
                        alt="Footer Slider Icon"
                        width={60}
                        height={50}
                      />
                    </div>
                    <div className={FooterStyles.footer_content}>
                      Klenty has helped us engage a far greater number of leads
                      per week, resulting in an outbound revenue jump of 93%
                    </div>
                    <Row className={FooterStyles.slider_author_content}>
                      <Col lg={3} md={3} xs={2}>
                        <Image
                          src={DoubleLogo}
                          alt="Footer Double Icon"
                          width={100}
                          height={45}
                        />
                      </Col>
                      <Col lg={9} md={9} xs={5}>
                        <div className={FooterStyles.footer_author}>
                          Adam Weinger
                        </div>
                        <div className={FooterStyles.footer_author_role}>
                          President,Double The Donation{" "}
                        </div>
                      </Col>
                    </Row>
                  </Stack>
                </Col>

                <Col lg={4} md={4} className={FooterStyles.personIcon}>
                  <Image
                    src={Person1}
                    alt="Person Icon"
                    width={289}
                    height={351}
                  />
                </Col>
              </Row>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <Row className={FooterStyles.slider}>
                <Col lg={8} md={8} className={FooterStyles.slider_conent}>
                  <Stack gap={3}>
                    <div>
                      <Image
                        src={Vector}
                        alt="Footer Slider Icon"
                        width={60}
                        height={50}
                      />
                    </div>
                    <div className={FooterStyles.footer_content}>
                      From someone who is relatively new to sales and lead
                      generating, Klenty was a highly effective and
                      simple-to-use tool that allowed me to quickly generate
                      leads in a genuine and customisable manner
                    </div>
                    <Row className={FooterStyles.slider_author_content}>
                      <Col lg={3} md={3} xs={2}>
                        <Image
                          src={JMPLogo}
                          alt="Footer JMP Icon"
                          width={100}
                          height={45}
                        />
                      </Col>
                      <Col lg={9} md={9} xs={5}>
                        <div className={FooterStyles.footer_author}>Sam W</div>
                        <div className={FooterStyles.footer_author_role}>
                          Head of Demand Generation , Jump
                        </div>
                      </Col>
                    </Row>
                  </Stack>
                </Col>

                <Col lg={4} md={4} className={FooterStyles.personIcon}>
                  <Image
                    src={Person2}
                    alt="Person Icon"
                    width={289}
                    height={351}
                  />
                </Col>
              </Row>
            </div>
            <div className="carousel-item">
              <Row className={FooterStyles.slider}>
                <Col lg={8} md={8} className={FooterStyles.slider_conent}>
                  <Stack gap={3}>
                    <div>
                      <Image
                        src={Vector}
                        alt="Footer Slider Icon"
                        width={60}
                        height={50}
                      />
                    </div>
                    <div className={FooterStyles.footer_content}>
                      It changed our business. Klenty allowed our outbounds
                      sales team to leverage their time and skills
                    </div>
                    <Row className={FooterStyles.slider_author_content}>
                      <Col lg={3} md={3} xs={2}>
                        <Image
                          src={RedEye}
                          alt="Footer RedEye Icon"
                          width={100}
                          height={45}
                        />
                      </Col>
                      <Col lg={9} md={9} xs={5}>
                        <div className={FooterStyles.footer_author}>
                          Gavin Tye
                        </div>
                        <div className={FooterStyles.footer_author_role}>
                          Sales Director , Red Eye
                        </div>
                      </Col>
                    </Row>
                  </Stack>
                </Col>

                <Col lg={4} md={4} className={FooterStyles.personIcon}>
                  <Image
                    src={Person1}
                    alt="Person Icon"
                    width={289}
                    height={351}
                  />
                </Col>
              </Row>
            </div>
          </div>

        <Row style={paddingSliderIcon}>
          <Col lg={6} md={6} sm={6} xs={6} style={colStyle}>
            <button
            className="carousel-control-prev text-center"
            type="button"
            data-bs-target="#footerAuthorSlider"
            data-bs-slide="prev" 
            style={previous}
          >
            <span>
              <Image src={PreviousIcon} alt="Footer Previous Icon" width={15} />
            </span>
            <span className="visually-hidden">Previous</span>
          </button>
          </Col>

          <Col lg={6} md={6} sm={6} xs={6}  style={colStyle}>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#footerAuthorSlider"
            data-bs-slide="next"
            style={next}
          >
            <span>
              <Image src={NextIcon} alt="Footer Next Icon" width={15} />
            </span>
            <span className="visually-hidden">Next</span>
          </button>
          </Col>
          </Row>
        </div>

      </Container>
    </div>
  );
};
export default Footer;
