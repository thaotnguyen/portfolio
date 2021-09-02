import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import { container, item } from '../Body/Body';

import FadeInView from '../fadeInView';

import './LGBT.scss';

export const LGBT = () => {
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
        LGBT Asylum Project
      </FadeInView>
      <FadeInView
        component={motion.h2}
        style={{ fontSize: 32, marginBottom: 64 }}
      >
        An expanded brand identity for the LGBT Asylum Project, a nonprofit
        legal organization that helps persecuted LGBTQ+ people abroad get
        protection in the US.
      </FadeInView>
      <FadeInView
        component={motion.img}
        src="/lgbt-poster-animation.gif"
        marginBottom
      />{' '}
      <FadeInView component={motion.h1}>At a glance</FadeInView>
      <FadeInView component={motion.p}>
        LGBTQ+ people throughout the world are subjected to violence and abuse
        because of their sexuality and/or gender identity. The LGBT Asylum
        Project is dedicated to providing legal representation for LGBT asylum
        seekers fleeing persecutation.
      </FadeInView>
      <FadeInView
        component={motion.img}
        src="/lgbt-stationery.png"
        marginBottom
      />
      <FadeInView component={motion.img} src="/lgbt-posters.png" />
      <FadeInView component={motion.h1}>Bold and true</FadeInView>
      <FadeInView component={motion.p}>
        The brand is vibrant and bold, embodying the queer community, while also
        staying professional and approachable. Colors from across the logo
        combine to highlight authentic photos of queer people, selected to
        represent authenticity and truth.
        <br />
        <br />
        The photos emphasize individuals expressing their queer identity in
        various ways, such as nonbinary gender presentation. <br />
        <br />
        The use of photography also lends itself well to more personalized
        assets like business cards and stationery.
      </FadeInView>
      <br />
      <br />
      <br />
    </motion.div>
    // </motion.div>
  );
};

export default LGBT;
