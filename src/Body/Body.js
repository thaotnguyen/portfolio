import React, { useEffect, useState } from 'react';
import { Switch, useLocation, Route } from 'react-router-dom';
import { AnimatePresence, useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Homepage from '../Homepage';
import Recall from '../Recall';
import Fabric from '../Fabric';
import Product from '../Product';
import LGBT from '../LGBT';

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
  hidden: { opacity: 0, position: 'relative', y: '100%' },
  show: {
    opacity: 1,
    position: 'relative',
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1],
    },
    y: '0%',
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

  useEffect(() => {
    Promise.all(
      ['/recall.png', '/fabric-hero.png', '/illustration.png'].map((image) => {
        return loadImage(image, new Image());
      })
    ).then(() => {
      setImagesLoaded(true);
    });
  }, []);

  if (!imagesLoaded) {
    return null;
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" component={Homepage} exact />
        <Route path="/recall" component={Recall} />
        <Route path="/fabric" component={Fabric} />
        <Route path="/product" component={Product} />
        <Route path="/lgbt" component={LGBT} />
      </Switch>
    </AnimatePresence>
  );
}

export default Body;
