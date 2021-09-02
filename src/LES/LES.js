import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import { container, item } from '../Body/Body';

import FadeInView from '../fadeInView';

export const LES = () => {
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
        Lower East Side
      </FadeInView>
      <FadeInView
        component={motion.h2}
        style={{ fontSize: 32, marginBottom: 64 }}
      >
        A brand identity for the Lower East Side, a neighborhood in lower
        Manhattan.
      </FadeInView>

      <FadeInView component={motion.img} src="/les5.jpg" />
      <FadeInView component={motion.h1}>At a glance</FadeInView>
      <FadeInView component={motion.p}>
        I worked as a brand designer and the only member on this project. This
        project was an unofficial exercise done with Azura Design.
      </FadeInView>
      <FadeInView component={motion.img} src="/les2.jpg" />
      <FadeInView component={motion.h1}>Identifying the brand</FadeInView>
      <FadeInView component={motion.p}>
        I wanted to capture the feel of the neighborhood, with busy streets and
        a quirky culture. The resulting logo has strong perpendicular angles and
        extending lines, alluding to the city.
      </FadeInView>
      <FadeInView component={motion.img} src="/les3.jpg" marginBottom />
      <FadeInView component={motion.img} src="/les4.jpg" marginBottom />
      <FadeInView component={motion.img} src="/les1.jpg" />
      <br />
      <br />
      <br />
    </motion.div>
    // </motion.div>
  );
};

export default LES;
