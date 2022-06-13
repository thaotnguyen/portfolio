import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import { container, item } from '../Body/Body';

import FadeInView from '../fadeInView';

export const Picasso = () => {
  useEffect(() => {
    window.scroll(0, 0);
    return () => {};
  }, []);

  return (
    // <motion.div
    //   exit={{ opacity: 0 }}
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    // >
    <motion.div
      className="project-page"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <FadeInView
        component={motion.h1}
        style={{ fontSize: 72 }}
        divStyle={{
          width: '100%',
        }}
      >
        Imagine Picasso
      </FadeInView>
      <FadeInView
        component={motion.h2}
        style={{ fontSize: 32, marginBottom: 64 }}
      >
        Creating the scholarship panels for the intro experience of an immersive
        Picasso art exhibit. This work was done at Local Projects.
      </FadeInView>
      <FadeInView component={motion.img} src="/picasso-hero.jpeg" />
      <FadeInView component={motion.h1}>At a glance</FadeInView>
      <FadeInView component={motion.p}>
        Team: 1 creative director, 1 art director, 1 project manager, 1 physical
        designer, 1 UX designer, 2 other visual designers, 1 content developer
        <br />
        <br />
        <a
          href="mailto:thao_nguyen@alumni.brown.edu"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          Contact me
        </a>{' '}
        for more information on this work.
      </FadeInView>
      <br />
      <br />
      <br />
    </motion.div>
    // </motion.div>
  );
};

export default Picasso;
