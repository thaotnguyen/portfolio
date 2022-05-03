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
    Array.from({ length: 35 }, () => Math.floor(Math.random() * 400 - 200))
  );

  useEffect(() => {
    setFadeArrow(false);
    setLoaded(true);
    setScroll(window.scrollY);
    window.addEventListener('scroll', handleScroll, true);
    return () => { };
  }, []);

  const windowHeight = window.innerHeight;

  const colorMap = [
    '#191819',
    '#191819',
    '#191819',
    '#011150',
    '#32520a',
    '#333333',
    // '#004430',
    '#420046',
    '#191819',
  ];

  const backgroundColor = () => {
    return window.innerWidth < 600
      ? colorMap[Math.floor(scroll / window.innerHeight - 0.5)]
      : colorMap[Math.floor(scroll / window.innerHeight)];
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
            opacity: scroll > 1500 ? 0 : 1,
            height: windowHeight + 1000,
            pointerEvents: scroll > window.innerHeight ? 'none' : 'auto',
          }}
        >
          <div className={classnames('title', 'container')}>
            <div className="landing" style={{ color: `rgba(219,191,176,${1 - scroll / 1500})` }}>
              <div className="container">
                <div
                  className="header right"
                  style={{ opacity: loaded ? 1 : 0 }}
                >
                  <h1>
                    <span className="name" style={{ color: `rgba(255,255,255,${1 - scroll / 1500})` }}>
                      <span
                        style={{
                          transform: `translateY(${endCoordinates[0] * (scroll / 1500)
                            }px)`,
                        }}
                      >
                        t
                      </span>
                      <span
                        style={{
                          transform: `translateY(${endCoordinates[1] * (scroll / 1500)
                            }px)`,
                        }}
                      >
                        h
                      </span>
                      <span
                        style={{
                          transform: `translateY(${endCoordinates[2] * (scroll / 1500)
                            }px)`,
                        }}
                      >
                        a
                      </span>
                      <span
                        style={{
                          transform: `translateY(${endCoordinates[3] * (scroll / 1500)
                            }px)`,
                        }}
                      >
                        o
                      </span>
                      <span>&nbsp;</span>
                      <span
                        style={{
                          transform: `translateY(${endCoordinates[4] * (scroll / 1500)
                            }px)`,
                        }}
                      >
                        n
                      </span>
                      <span
                        style={{
                          transform: `translateY(${endCoordinates[5] * (scroll / 1500)
                            }px)`,
                        }}
                      >
                        g
                      </span>
                      <span
                        style={{
                          transform: `translateY(${endCoordinates[6] * (scroll / 1500)
                            }px)`,
                        }}
                      >
                        u
                      </span>
                      <span
                        style={{
                          transform: `translateY(${endCoordinates[7] * (scroll / 1500)
                            }px)`,
                        }}
                      >
                        y
                      </span>
                      <span
                        style={{
                          transform: `translateY(${endCoordinates[8] * (scroll / 1500)
                            }px)`,
                        }}
                      >
                        e
                      </span>
                      <span
                        style={{
                          transform: `translateY(${endCoordinates[9] * (scroll / 1500)
                            }px)`,
                        }}
                      >
                        n
                      </span>
                    </span>
                  </h1>
                </div>
                <div
                  className="header left"
                  style={{ opacity: loaded ? 1 : 0 }}
                >
                  <h1 className="title1">
                    <span>&#8213;</span>
                    <span
                      style={{
                        transform: `translateY(${endCoordinates[10] * (scroll / 1500)
                          }px)`,
                      }}
                    ></span>
                    <span
                      style={{
                        transform: `translateY(${endCoordinates[11] * (scroll / 1500)
                          }px)`,
                      }}
                    >
                      v
                    </span>
                    <span
                      style={{
                        transform: `translateY(${endCoordinates[12] * (scroll / 1500)
                          }px)`,
                      }}
                    >
                      i
                    </span>
                    <span
                      style={{
                        transform: `translateY(${endCoordinates[13] * (scroll / 1500)
                          }px)`,
                      }}
                    >
                      s
                    </span>
                    <span
                      style={{
                        transform: `translateY(${endCoordinates[14] * (scroll / 1500)
                          }px)`,
                      }}
                    >
                      u
                    </span>
                    <span
                      style={{
                        transform: `translateY(${endCoordinates[15] * (scroll / 1500)
                          }px)`,
                      }}
                    >
                      a
                    </span>
                    <span
                      style={{
                        transform: `translateY(${endCoordinates[16] * (scroll / 1500)
                          }px)`,
                      }}
                    >
                      l
                    </span>
                    <span>&nbsp;</span>
                    <span
                      style={{
                        transform: `translateY(${endCoordinates[17] * (scroll / 1500)
                          }px)`,
                      }}
                    >
                      &amp;
                    </span>
                  </h1>
                </div>
                <div
                  className="header left"
                  style={{ opacity: loaded ? 1 : 0 }}
                >
                  <h1 className="title2">
                    <span
                      style={{
                        transform: `translateY(${endCoordinates[18] * (scroll / 1500)
                          }px)`,
                      }}
                    >
                      d
                    </span>
                    <span
                      style={{
                        transform: `translateY(${endCoordinates[19] * (scroll / 1500)
                          }px)`,
                      }}
                    >
                      i
                    </span>
                    <span
                      style={{
                        transform: `translateY(${endCoordinates[20] * (scroll / 1500)
                          }px)`,
                      }}
                    >
                      g
                    </span>
                    <span
                      style={{
                        transform: `translateY(${endCoordinates[21] * (scroll / 1500)
                          }px)`,
                      }}
                    >
                      i
                    </span>
                    <span
                      style={{
                        transform: `translateY(${endCoordinates[22] * (scroll / 1500)
                          }px)`,
                      }}
                    >
                      t
                    </span>
                    <span
                      style={{
                        transform: `translateY(${endCoordinates[23] * (scroll / 1500)
                          }px)`,
                      }}
                    >
                      a
                    </span>
                    <span
                      style={{
                        transform: `translateY(${endCoordinates[24] * (scroll / 1500)
                          }px)`,
                      }}
                    >
                      l
                    </span>
                    <span>&nbsp;</span>
                    <span
                      style={{
                        transform: `translateY(${endCoordinates[25] * (scroll / 1500)
                          }px)`,
                      }}
                    >
                      d
                    </span>
                    <span
                      style={{
                        transform: `translateY(${endCoordinates[26] * (scroll / 1500)
                          }px)`,
                      }}
                    >
                      e
                    </span>
                    <span
                      style={{
                        transform: `translateY(${endCoordinates[27] * (scroll / 1500)
                          }px)`,
                      }}
                    >
                      s
                    </span>
                    <span
                      style={{
                        transform: `translateY(${endCoordinates[28] * (scroll / 1500)
                          }px)`,
                      }}
                    >
                      i
                    </span>
                    <span
                      style={{
                        transform: `translateY(${endCoordinates[29] * (scroll / 1500)
                          }px)`,
                      }}
                    >
                      g
                    </span>
                    <span
                      style={{
                        transform: `translateY(${endCoordinates[30] * (scroll / 1500)
                          }px)`,
                      }}
                    >
                      n
                    </span>
                    <span
                      style={{
                        transform: `translateY(${endCoordinates[31] * (scroll / 1500)
                          }px)`,
                      }}
                    >
                      e
                    </span>
                    <span
                      style={{
                        transform: `translateY(${endCoordinates[32] * (scroll / 1500)
                          }px)`,
                      }}
                    >
                      r
                    </span>
                  </h1>
                </div>
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
            Hi, I'm Thao and I'm a visual and digital designer, based
            in NYC and the SF Bay Area.
          </p>
          <p>
            I have a huge appetite for learning, growth, and new experiences and
            want to contribute to projects bringing something new to the world.
          </p>
          <p>
            I'm a quick learner who loves impactful, empathetic work and is
            interested in helping underserved communities amplify their voices.
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
              <span>Brand identity</span> for an internal team within Google
              Ads. Built to bring together three teams under one united
              identity.
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
              <span>Brand identity</span> and <span>product design</span> for a
              fashion-centric social media app where users can learn from
              others, share their outfits and knowledge, and expand their
              fashion experience.
            </h4>
          </div>
          <img src="/modal-hero.png" alt="Modal" />
        </div>
        <div
          className="project"
          // onClick={() => history.push('/recall')}
          style={{ color: '#191819' }}
          layoutId="recall"
          onClick={() => history.push('/les')}
        >
          <div className="project-content">
            <h5>Full case study</h5>
            <h1 style={{ lineHeight: 1.1, marginBottom: 16 }}>
              Lower East Side
            </h1>
            <h4>
              <span>Brand identity</span> for the Lower East Side, a storied
              neighborhood of Manhattan, New York.{' '}
            </h4>
          </div>
          <img
            style={{
              maxWidth: window.innerWidth < 600 ? '100%' : '60%',
              height: 'auto',
            }}
            src="/les-hero.png"
            alt="LES"
          />
        </div>

        {/* <div
          className="project"
          // onClick={() => history.push('/fabric')}
          onClick={() => history.push('/lgbt')}
        >
          <div className="project-content">
            <h5>Full case study</h5>
            <h1 style={{ lineHeight: 1.1, marginBottom: 16 }}>
              LGBT Asylum Project
            </h1>
            <h4>
              <span>Branding</span> for the LGBT Asylum Project, a nonprofit
              that provides legal assistance to LGBTQ+ people who are facing
              persecution.
            </h4>
          </div>
          <img src="/lgbtq-hero.png" alt="LGBT Asylum Project" />
        </div> */}
        <div
          className="project"
          // onClick={() => history.push('/recall')}
          style={{ color: '#191819' }}
          onClick={() => window.open('/recall.pdf', '_blank')}
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
        {/* <div className="project" onClick={() => history.push('/product')}>
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
        </div> */}
        <div className="blurb">
          <p>Get in touch.</p>
          {/* <p className="link">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                history.push('/archive');
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Archive
            </a>
          </p> */}
          <p className="link">
            <a
              href="https://www.linkedin.com/in/%F0%9F%8C%88-thao-nguyen-b5b4b2bb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </p>
          {/* <p className="link">
            <a
              href="https://github.com/thaotnguyen"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </p> */}
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
