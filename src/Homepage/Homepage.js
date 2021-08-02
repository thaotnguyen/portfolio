import React, { useEffect, useState, useRef } from 'react';
import classnames from 'classnames/bind';
import { withRouter, useHistory } from 'react-router-dom';
import { motion, useViewportScroll } from 'framer-motion';

import './Homepage.scss';

const Container = ({ location }) => {
  const [scroll, setScroll] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [fadeArrow, setFadeArrow] = useState(true);
  const history = useHistory();
  const { scrollYProgress } = useViewportScroll();

  const handleScroll = () => {
    setScroll(window.scrollY);
    setFadeArrow(true);
  };

  const [endCoordinates, _] = useState(
    Array.from({ length: 30 }, () => [
      Math.floor(Math.random() * 0 - 0),
      Math.floor(Math.random() * 400 - 200),
    ])
  );

  useEffect(() => {
    setFadeArrow(false);
    setLoaded(true);
    setScroll(window.scrollY);
    window.addEventListener('scroll', handleScroll, true);
    return () => {};
  }, []);

  const windowHeight = window.innerHeight;

  const colorMap = [
    '#191819',
    '#191819',
    '#191819',
    '#320846',
    '#112150',
    '#420202',
    '#662937',
    '#0e2f10',
    '#191819',
  ];

  const backgroundColor = () => {
    return colorMap[Math.floor(scroll / window.innerHeight)];
  };

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="main" style={{ backgroundColor: backgroundColor() }}>
        {/* <div
        className="background"
        style={{ backgroundImage: `url(${backgroundImage()})` }}
      /> */}
        <div
          className="body"
          style={{
            opacity: 1 - scroll / 1500,
            height: windowHeight + 1000,
            pointerEvents: scroll > window.innerHeight ? 'none' : 'auto',
          }}
        >
          <div className={classnames('title', 'container')}>
            <div className="landing">
              <div className="header right" style={{ opacity: loaded ? 1 : 0 }}>
                <h1>
                  <span
                    style={{
                      right: endCoordinates[0][0] * (scroll / 1500),
                      top: endCoordinates[0][1] * (scroll / 1500),
                    }}
                  >
                    t
                  </span>
                  <span
                    style={{
                      right: endCoordinates[1][0] * (scroll / 1500),
                      top: endCoordinates[1][1] * (scroll / 1500),
                    }}
                  >
                    h
                  </span>
                  <span
                    style={{
                      right: endCoordinates[2][0] * (scroll / 1500),
                      top: endCoordinates[2][1] * (scroll / 1500),
                    }}
                  >
                    a
                  </span>
                  <span
                    style={{
                      right: endCoordinates[3][0] * (scroll / 1500),
                      top: endCoordinates[3][1] * (scroll / 1500),
                    }}
                  >
                    o
                  </span>
                  <span> </span>
                  <span
                    style={{
                      right: endCoordinates[4][0] * (scroll / 1500),
                      top: endCoordinates[4][1] * (scroll / 1500),
                    }}
                  >
                    n
                  </span>
                  <span
                    style={{
                      right: endCoordinates[4][0] * (scroll / 1500),
                      top: endCoordinates[4][1] * (scroll / 1500),
                    }}
                  >
                    g
                  </span>
                  <span
                    style={{
                      right: endCoordinates[5][0] * (scroll / 1500),
                      top: endCoordinates[5][1] * (scroll / 1500),
                    }}
                  >
                    u
                  </span>
                  <span
                    style={{
                      right: endCoordinates[6][0] * (scroll / 1500),
                      top: endCoordinates[6][1] * (scroll / 1500),
                    }}
                  >
                    y
                  </span>
                  <span
                    style={{
                      right: endCoordinates[7][0] * (scroll / 1500),
                      top: endCoordinates[7][1] * (scroll / 1500),
                    }}
                  >
                    e
                  </span>
                  <span
                    style={{
                      right: endCoordinates[8][0] * (scroll / 1500),
                      top: endCoordinates[8][1] * (scroll / 1500),
                    }}
                  >
                    n
                  </span>
                </h1>
              </div>
              <div className="header left" style={{ opacity: loaded ? 1 : 0 }}>
                <h1>
                  <span
                    style={{
                      right: endCoordinates[9][0] * (scroll / 1500),
                      top: endCoordinates[9][1] * (scroll / 1500),
                    }}
                  >
                    v
                  </span>
                  <span
                    style={{
                      right: endCoordinates[10][0] * (scroll / 1500),
                      top: endCoordinates[10][1] * (scroll / 1500),
                    }}
                  >
                    i
                  </span>
                  <span
                    style={{
                      right: endCoordinates[11][0] * (scroll / 1500),
                      top: endCoordinates[11][1] * (scroll / 1500),
                    }}
                  >
                    s
                  </span>
                  <span
                    style={{
                      right: endCoordinates[12][0] * (scroll / 1500),
                      top: endCoordinates[12][1] * (scroll / 1500),
                    }}
                  >
                    u
                  </span>
                  <span
                    style={{
                      right: endCoordinates[13][0] * (scroll / 1500),
                      top: endCoordinates[13][1] * (scroll / 1500),
                    }}
                  >
                    a
                  </span>
                  <span
                    style={{
                      right: endCoordinates[14][0] * (scroll / 1500),
                      top: endCoordinates[14][1] * (scroll / 1500),
                    }}
                  >
                    l
                  </span>
                  <span> </span>
                  <span
                    style={{
                      right: endCoordinates[15][0] * (scroll / 1500),
                      top: endCoordinates[15][1] * (scroll / 1500),
                    }}
                  >
                    &amp;
                  </span>
                  <span> </span>
                  <span
                    style={{
                      right: endCoordinates[16][0] * (scroll / 1500),
                      top: endCoordinates[16][1] * (scroll / 1500),
                    }}
                  >
                    u
                  </span>
                  <span
                    style={{
                      right: endCoordinates[17][0] * (scroll / 1500),
                      top: endCoordinates[17][1] * (scroll / 1500),
                    }}
                  >
                    x
                  </span>
                  <span> </span>
                  <span
                    style={{
                      right: endCoordinates[18][0] * (scroll / 1500),
                      top: endCoordinates[18][1] * (scroll / 1500),
                    }}
                  >
                    d
                  </span>
                  <span
                    style={{
                      right: endCoordinates[19][0] * (scroll / 1500),
                      top: endCoordinates[19][1] * (scroll / 1500),
                    }}
                  >
                    e
                  </span>
                  <span
                    style={{
                      right: endCoordinates[20][0] * (scroll / 1500),
                      top: endCoordinates[20][1] * (scroll / 1500),
                    }}
                  >
                    s
                  </span>
                  <span
                    style={{
                      right: endCoordinates[21][0] * (scroll / 1500),
                      top: endCoordinates[21][1] * (scroll / 1500),
                    }}
                  >
                    i
                  </span>
                  <span
                    style={{
                      right: endCoordinates[22][0] * (scroll / 1500),
                      top: endCoordinates[22][1] * (scroll / 1500),
                    }}
                  >
                    g
                  </span>
                  <span
                    style={{
                      right: endCoordinates[23][0] * (scroll / 1500),
                      top: endCoordinates[23][1] * (scroll / 1500),
                    }}
                  >
                    n
                  </span>
                  <span
                    style={{
                      right: endCoordinates[24][0] * (scroll / 1500),
                      top: endCoordinates[24][1] * (scroll / 1500),
                    }}
                  >
                    e
                  </span>
                  <span
                    style={{
                      right: endCoordinates[25][0] * (scroll / 1500),
                      top: endCoordinates[25][1] * (scroll / 1500),
                    }}
                  >
                    r
                  </span>
                </h1>
              </div>
            </div>
          </div>
          <div className="chevron" style={{ opacity: fadeArrow ? 0 : 1 }}>
            &#x25BC;
          </div>
        </div>
        <div style={{ height: '12vh' }} />
        <div className="blurb">
          <p>
            Hi, I'm Thao and I'm a multidisciplinary UX/visual designer and
            engineer at Google, based in NYC and SF.
          </p>
          <p>
            I'm a quick learner who loves impactful, empathetic user-facing work
            and is interested in helping underserved communities to amplify
            their voices.
          </p>
          <p>
            I work in UI/UX design, illustrations, branding &amp; identity
            design, visual design, product design, animations, and more.
          </p>
        </div>
        <div
          className="project"
          // onClick={() => history.push('/recall')}
          style={{ color: '#191819' }}
          layoutId="recall"
          onClick={() => window.open('/recall.pdf', '_blank')}
        >
          <div className="project-content">
            <h5>Full case study</h5>
            <h1>Recall</h1>
            <h6>
              UX design &middot; UX research &middot; Illustration &middot;
              Development
            </h6>
            <h4>
              A video platform at Google that enables UX researchers to record,
              upload, analyze, and share videos of their user studies.
            </h4>
          </div>
          <img
            className="recall-hero"
            src="/recall-thumbnail.png"
            alt="Recall"
          />
        </div>
        <div
          className="project"
          // onClick={() => history.push('/fabric')}
          onClick={() => window.open('/fabric.pdf', '_blank')}
        >
          <div className="project-content">
            <h5>Full case study</h5>
            <h1>Fabric UX</h1>
            <h6>
              Brand identity &middot; Visual design &middot; Motion design
            </h6>
            <h4>
              A complete brand identity for an ads team at Google, built to
              bring together what was three teams under one new identity.
            </h4>
          </div>
          <img
            src="/fabric-thumbnail.png"
            alt="Fabric UX"
            className="fabric-hero"
          />
        </div>
        <div
          className="project"
          // onClick={() => history.push('/fabric')}
          onClick={() => window.open('/modal.pdf', '_blank')}
        >
          <div className="project-content">
            <h5>Full case study</h5>
            <h1>Modal</h1>
            <h6>
              Brand identity &middot; Visual design &middot; Motion design
            </h6>
            <h4>
              A fashion-centric social media app where users can learn from
              others, share their outfits and knowledge, and expand their
              fashion experience.
            </h4>
          </div>
          <img src="/modal-thumbnail.png" alt="Modal" />
        </div>
        <div className="project" onClick={() => history.push('/lgbt')}>
          <div className="project-content">
            <h5 style={{ marginBottom: 8 }}>Mini-sample</h5>
            <h1 style={{ marginBottom: 16, lineHeight: '1em' }}>
              LGBT Asylum Project
            </h1>
            <h6>Brand identity &middot; Visual design &middot; Illustration</h6>
            <h4>
              The 2020 annual report for the LGBT Asylum Project, a nonprofit
              legal organization helping LGBTQ individuals facing persecution
              abroad.
            </h4>
          </div>
          <img src="/lgbtq-hero.png" alt="LGBT Asylum Project" />
        </div>
        <div className="project" onClick={() => history.push('/product')}>
          <div className="project-content">
            <h5>Mini-sample</h5>
            <h1>Illustrations</h1>
            <h6>Illustration</h6>
            <h4>
              Assorted illustrations and animations for internal Google
              products.
            </h4>
          </div>
          <img
            className="illustration-hero"
            src="/illustration.png"
            alt="Product illustrations"
          />
        </div>
        <div className="blurb">
          <p>Get in touch.</p>
          <p className="link">
            <a
              href="https://www.linkedin.com/in/%F0%9F%8C%88-thao-nguyen-b5b4b2bb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </p>
          <p className="link">
            <a
              href="https://github.com/thaotnguyen"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </p>
          <p className="link">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              Resume
            </a>
          </p>
          <p className="link">
            <a
              href="mailto:thao_nguyen@alumni.brown.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default withRouter(Container);
