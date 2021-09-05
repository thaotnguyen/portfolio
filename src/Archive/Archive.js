import React, { useEffect, useState, useRef } from 'react';
import classnames from 'classnames/bind';
import { withRouter, useHistory } from 'react-router-dom';
import { motion, useViewportScroll } from 'framer-motion';

import '../Homepage/Homepage.scss';

const Container = ({ location }) => {
  useEffect(() => {
    window.scroll(0, 0);
    return () => {};
  }, []);
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

  const colorMap = ['#112150', '#541b1b', '#700000', '#303030', '#191819'];

  const backgroundColor = () => {
    return colorMap[Math.floor(scroll / window.innerHeight + 0.5)];
  };

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="main" style={{ backgroundColor: backgroundColor() }}>
        <div
          className="project"
          // onClick={() => history.push('/fabric')}
          onClick={() => history.push('/product')}
        >
          <div className="project-content">
            <h5>Full case study</h5>
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
        <div
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
              <span>Visual design</span> for the 2020 annual report for the LGBT
              Asylum Project, a nonprofit that provides legal assistance to
              LGBTQ+ people who are facing persecution.
            </h4>
          </div>
          <img src="/lgbtq-hero.png" alt="LGBT Asylum Project" />
        </div>
        <div
          className="project"
          // onClick={() => history.push('/fabric')}
          onClick={() => history.push('/dsa')}
        >
          <div className="project-content">
            <h5>Full case study</h5>
            <h1>NYC DSA</h1>
            <h4>
              <span>Digital design</span> for the marketing site for the NYC
              Democratic Socialists of America, in preparation for the 2020
              presidential and Congressional elections.
            </h4>
          </div>
          <img src="/dsa.png" alt="DSA" className="recall-hero" />
        </div>
        <div className="project" onClick={() => history.push('/')}>
          <div className="project-content">
            <h5 style={{ marginBottom: 8 }}>Mini-sample</h5>
            <p style={{ color: '#dbbfb0' }}>
              See the rest of my work{' '}
              <span style={{ textDecoration: 'underline' }}>here</span>.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default withRouter(Container);
