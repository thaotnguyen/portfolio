import React, { useEffect, useState } from 'react';
import { Switch, useLocation, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Homepage from '../Homepage';
import Recall from '../Recall';
import Fabric from '../Fabric';
import Product from '../Product';
import DSA from '../DSA';

import './Body.scss';

export const container = {
  hidden: { opacity: 0, position: 'relative' },
  show: {
    opacity: 1,
    position: 'relative',
    top: 0,
    transition: {
      staggerChildren: 0.02,
    },
  },
};

export const item = {
  hidden: { opacity: 0, position: 'relative', top: 40 },
  show: {
    opacity: 1,
    position: 'relative',
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
    top: 0,
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
        <Route path="/dsa" component={DSA} />
      </Switch>
    </AnimatePresence>
  );
}

export default Body;
