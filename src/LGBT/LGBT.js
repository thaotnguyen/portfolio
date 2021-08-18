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
        An expanded brand identity and the 2020 annual report for the LGBT
        Asylum Project, a nonprofit legal organization that helps persecuted
        LGBTQ+ people abroad get protection in the US.
      </FadeInView>

      <FadeInView component={motion.img} src="/lgbt1.png" />
      <FadeInView component={motion.h1}>At a glance</FadeInView>
      <FadeInView component={motion.p}>
        LGBTQ+ people throughout the world are subjected to violence and abuse
        because of their sexuality and/or gender identity. The LGBT Asylum
        Project is dedicated to providing legal representation for LGBT asylum
        seekers fleeing persecutation.
      </FadeInView>
      <FadeInView component={motion.p} divStyle={{ marginTop: -64 }}>
        I was a volunteer visual designer creating the 2020 annual report in
        order to get adequate funding and sponsorship for 2021. I also worked to
        tighten up and expand their brand identity.
      </FadeInView>
      <FadeInView component={motion.img} src="/lgbt2.png" />
      <FadeInView component={motion.h1}>The team's mission</FadeInView>
      <FadeInView component={motion.p}>
        The team saw themselves as life-saving and hopeful, as well as young,
        modern, and colorful. Even though their work could literally be a matter
        of life and death, they saw themselves as fun so I injected a rainbow of
        colors into the brand.
      </FadeInView>
      <FadeInView component={motion.img} src="/lgbt3.png" />
      <FadeInView component={motion.p}>
        I created a number of spreads for the report in order to illustrate to
        sponsors the value of the LGBT Asylum Project.
      </FadeInView>
      <FadeInView component={motion.img} src="/lgbt5.png" />
      <br />
      <br />
      <br />
    </motion.div>
    // </motion.div>
  );
};

export default LGBT;
