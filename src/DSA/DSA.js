import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import { container, item } from '../Body/Body';

import FadeInView from '../fadeInView';

export const DSA = () => {
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
        NYC DSA
      </FadeInView>
      <FadeInView
        component={motion.h2}
        style={{ fontSize: 32, marginBottom: 64 }}
      >
        The marketing site for the NYC Democratic Socialists of America, to
        recruit new members and raise funds for the 2020 election cycle.
      </FadeInView>

      <FadeInView component={motion.img} src="/dsa1.png" marginBottom />
      <FadeInView component={motion.img} src="/dsa2.png" />
      <br />
      <br />
      <br />
    </motion.div>
    // </motion.div>
  );
};

export default DSA;
