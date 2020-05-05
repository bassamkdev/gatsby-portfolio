import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume, skills } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <div>
      <section id="about">
        <Container>
          <Title title="About Me" />
          <Row className="about-wrapper">
            <Col md={6} sm={12}>
              <Fade bottom duration={1000} delay={600} distance="30px">
                <div className="about-wrapper__image">
                  <AboutImg alt="profile picture" filename={img} />
                </div>
              </Fade>
            </Col>
            <Col md={6} sm={12}>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                <div className="about-wrapper__info">
                  <p className="about-wrapper__info-text">
                    {paragraphOne ||
                      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                  </p>
                  <p className="about-wrapper__info-text">
                    {paragraphTwo ||
                      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                  </p>
                  <p className="about-wrapper__info-text">
                    {paragraphThree || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                  </p>
                  <div className="social-links about-wrapper__info-logos">
                    {skills &&
                      skills.map(company => {
                        const { id, name, url } = company;
                        return (
                          <a
                            key={id}
                            href={url || 'https://github.com/bassamkdev'}
                            rel="noopener noreferrer"
                            target="_blank"
                            aria-label={name}
                          >
                            <FontAwesomeIcon icon={name} size="lg" />
                          </a>
                        );
                      })}
                  </div>
                  {resume && (
                    <span className="d-flex mt-3 justify-content-center">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--resume"
                        href={resume}
                      >
                        Resume
                      </a>
                    </span>
                  )}
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;
