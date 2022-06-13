import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import { container, item } from '../Body/Body';

import FadeInView from '../fadeInView';

export const NUL = () => {
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
        Urban Civil Rights Museum
      </FadeInView>
      <FadeInView
        component={motion.h2}
        style={{ fontSize: 32, marginBottom: 64 }}
      >
        Look and feel for the Urban Civil Rights Museum, meant to tell the story
        of the African American presence in the urban North from slavery to the
        modern day. This work was done at Local Projects.
      </FadeInView>
      <FadeInView component={motion.img} src="/nul-hero.jpeg" />
      <FadeInView component={motion.h1}>At a glance</FadeInView>
      <FadeInView component={motion.p}>
        Team: 1 creative director, 1 art director, 3 project managers, 3
        physical designers, 1 UX designer
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

export default NUL;
