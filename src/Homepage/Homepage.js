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
    Array.from({ length: 30 }, () => Math.floor(Math.random() * 400 - 200))
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
    '#112150',
    '#420202',
    '#320846',
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
                      transform: `translateY(${
                        endCoordinates[0] * (scroll / 1500)
                      }px)`,
                    }}
                  >
                    t
                  </span>
                  <span
                    style={{
                      transform: `translateY(${
                        endCoordinates[1] * (scroll / 1500)
                      }px)`,
                    }}
                  >
                    h
                  </span>
                  <span
                    style={{
                      transform: `translateY(${
                        endCoordinates[2] * (scroll / 1500)
                      }px)`,
                    }}
                  >
                    a
                  </span>
                  <span
                    style={{
                      transform: `translateY(${
                        endCoordinates[3] * (scroll / 1500)
                      }px)`,
                    }}
                  >
                    o
                  </span>
                  <span>&nbsp;</span>
                  <span
                    style={{
                      transform: `translateY(${
                        endCoordinates[4] * (scroll / 1500)
                      }px)`,
                    }}
                  >
                    n
                  </span>
                  <span
                    style={{
                      transform: `translateY(${
                        endCoordinates[4] * (scroll / 1500)
                      }px)`,
                    }}
                  >
                    g
                  </span>
                  <span
                    style={{
                      transform: `translateY(${
                        endCoordinates[5] * (scroll / 1500)
                      }px)`,
                    }}
                  >
                    u
                  </span>
                  <span
                    style={{
                      transform: `translateY(${
                        endCoordinates[6] * (scroll / 1500)
                      }px)`,
                    }}
                  >
                    y
                  </span>
                  <span
                    style={{
                      transform: `translateY(${
                        endCoordinates[7] * (scroll / 1500)
                      }px)`,
                    }}
                  >
                    e
                  </span>
                  <span
                    style={{
                      transform: `translateY(${
                        endCoordinates[8] * (scroll / 1500)
                      }px)`,
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
                      transform: `translateY(${
                        endCoordinates[9] * (scroll / 1500)
                      }px)`,
                    }}
                  >
                    v
                  </span>
                  <span
                    style={{
                      transform: `translateY(${
                        endCoordinates[10] * (scroll / 1500)
                      }px)`,
                    }}
                  >
                    i
                  </span>
                  <span
                    style={{
                      transform: `translateY(${
                        endCoordinates[11] * (scroll / 1500)
                      }px)`,
                    }}
                  >
                    s
                  </span>
                  <span
                    style={{
                      transform: `translateY(${
                        endCoordinates[12] * (scroll / 1500)
                      }px)`,
                    }}
                  >
                    u
                  </span>
                  <span
                    style={{
                      transform: `translateY(${
                        endCoordinates[13] * (scroll / 1500)
                      }px)`,
                    }}
                  >
                    a
                  </span>
                  <span
                    style={{
                      transform: `translateY(${
                        endCoordinates[14] * (scroll / 1500)
                      }px)`,
                    }}
                  >
                    l
                  </span>
                  <span>&nbsp;</span>
                  <span
                    style={{
                      transform: `translateY(${
                        endCoordinates[15] * (scroll / 1500)
                      }px)`,
                    }}
                  >
                    &amp;
                  </span>
                  <span>&nbsp;</span>
                  <span
                    style={{
                      transform: `translateY(${
                        endCoordinates[16] * (scroll / 1500)
                      }px)`,
                    }}
                  >
                    u
                  </span>
                  <span
                    style={{
                      transform: `translateY(${
                        endCoordinates[17] * (scroll / 1500)
                      }px)`,
                    }}
                  >
                    x
                  </span>
                  <span>&nbsp;</span>
                  <span
                    style={{
                      transform: `translateY(${
                        endCoordinates[18] * (scroll / 1500)
                      }px)`,
                    }}
                  >
                    d
                  </span>
                  <span
                    style={{
                      transform: `translateY(${
                        endCoordinates[19] * (scroll / 1500)
                      }px)`,
                    }}
                  >
                    e
                  </span>
                  <span
                    style={{
                      transform: `translateY(${
                        endCoordinates[20] * (scroll / 1500)
                      }px)`,
                    }}
                  >
                    s
                  </span>
                  <span
                    style={{
                      transform: `translateY(${
                        endCoordinates[21] * (scroll / 1500)
                      }px)`,
                    }}
                  >
                    i
                  </span>
                  <span
                    style={{
                      transform: `translateY(${
                        endCoordinates[22] * (scroll / 1500)
                      }px)`,
                    }}
                  >
                    g
                  </span>
                  <span
                    style={{
                      transform: `translateY(${
                        endCoordinates[23][1] * (scroll / 1500)
                      }px)`,
                    }}
                  >
                    n
                  </span>
                  <span
                    style={{
                      transform: `translateY(${
                        endCoordinates[24] * (scroll / 1500)
                      }px)`,
                    }}
                  >
                    e
                  </span>
                  <span
                    style={{
                      transform: `translateY(${
                        endCoordinates[25] * (scroll / 1500)
                      }px)`,
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
            and is interested in helping underserved communities amplify their
            voices.
          </p>
          <p>
            I work in UI/UX design, illustrations, branding &amp; identity
            design, visual design, product design, animations, and more.
          </p>
        </div>
        <div
          className="project"
          // onClick={() => history.push('/fabric')}
          onClick={() => history.push('/fabric')}
        >
          <div className="project-content">
            <h5>Full case study</h5>
            <h1>Fabric UX</h1>
            <h4>
              <span>Brand identity</span> for an ads team at Google, built to
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
          onClick={() => history.push('/modal')}
        >
          <div className="project-content">
            <h5>Full case study</h5>
            <h1>Modal</h1>
            <h4>
              <span>Brand identity</span> for a fashion-centric social media app
              where users can learn from others, share their outfits and
              knowledge, and expand their fashion experience.
            </h4>
          </div>
          <img src="/modal-thumbnail.png" alt="Modal" />
        </div>
        <div
          className="project"
          // onClick={() => history.push('/recall')}
          style={{ color: '#191819' }}
          layoutId="recall"
          onClick={() => history.push('/recall')}
        >
          <div className="project-content">
            <h5>Full case study</h5>
            <h1>Recall</h1>
            <h4>
              <span>Product design</span> for a video platform at Google that
              enables UX researchers to record, upload, analyze, and share
              videos of their user studies.
            </h4>
          </div>
          <img
            className="recall-hero"
            src="/recall-thumbnail.png"
            alt="Recall"
          />
        </div>
        <div className="project" onClick={() => history.push('/lgbt')}>
          <div className="project-content">
            <h5 style={{ marginBottom: 8 }}>Mini-sample</h5>
            <h1 style={{ marginBottom: 16, lineHeight: '1em' }}>
              LGBT Asylum Project
            </h1>
            <h4>
              <span>Visual design</span> for the 2020 annual report for the LGBT
              Asylum Project, a nonprofit legal organization helping LGBTQ
              individuals facing persecution abroad.
            </h4>
          </div>
          <img src="/lgbtq-hero.png" alt="LGBT Asylum Project" />
        </div>
        <div className="project" onClick={() => history.push('/product')}>
          <div className="project-content">
            <h5>Mini-sample</h5>
            <h1>Illustrations</h1>
            <h4>
              Assorted <span>illustrations</span> and animations for internal
              Google products.
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
