import React, { useEffect, useState } from 'react';
import { Switch, useLocation, Route } from 'react-router-dom';
import { AnimatePresence, useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Homepage from '../Homepage';
import Recall from '../Recall';
import Fabric from '../Fabric';
import Modal from '../Modal';
import Product from '../Product';
import LGBT from '../LGBT';
import Archive from '../Archive';
import LES from '../LES';
import DSA from '../DSA';

import './Body.scss';

export const container = {
  hidden: { opacity: 0, position: 'relative' },
  show: {
    opacity: 1,
    position: 'relative',
    top: 0,
    transition: {
      staggerChildren: 0.0,
    },
  },
};

export const item = {
  hidden: { opacity: 1, position: 'relative', y: '0%' },
  show: {
    opacity: 1,
    position: 'relative',
    transition: {
      duration: 1.3,
      ease: [0.04, 1, 0.36, 1],
    },
    y: '-100%',
  },
};

function Body() {
  const location = useLocation();
  const [imagesLoaded, setImagesLoaded] = useState(false);

  async function loadImage(url, elem) {
    return new Promise((resolve, reject) => {
      elem.onload = () => resolve(elem);
      elem.onerror = reject;
      elem.src = url;
    });
  }

  // useEffect(() => {
  //   Promise.all(
  //     ['/recall.png', '/fabric-hero.png', '/illustration.png'].map((image) => {
  //       return loadImage(image, new Image());
  //     })
  //   ).then(() => {
  //     setImagesLoaded(true);
  //   });
  // }, []);

  // if (!imagesLoaded) {
  //   return null;
  // }

  return (
    <div>
      <div className="nav">
        <span></span>
        <div>
          <a href="/">home</a>
          <a href="/resume.pdf" target="_blank">
            resume
          </a>
          <a href="mailto:thao_nguyen@alumni.brown.edu" target="_blank">
            contact
          </a>
        </div>
      </div>
      {/* <AnimatePresence exitBeforeEnter> */}
      <Switch location={location} key={location.pathname}>
        <Route path="/" component={Homepage} exact />
        <Route path="/recall" component={Recall} />
        <Route path="/fabric" component={Fabric} />
        <Route path="/modal" component={Modal} />
        <Route path="/archive" component={Archive} />
        <Route path="/product" component={Product} />
        <Route path="/lgbt" component={LGBT} />
        <Route path="/dsa" component={DSA} />
        <Route path="/les" component={LES} />
      </Switch>
      {/* </AnimatePresence> */}
    </div>
  );
}

export default Body;
