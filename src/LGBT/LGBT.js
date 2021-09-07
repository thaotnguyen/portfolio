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
        className="title"
        divStyle={{
          width: '100%',
        }}
      >
        LGBT Asylum Project
      </FadeInView>
      <FadeInView component={motion.h2} className="subtitle">
        An expanded brand identity for the LGBT Asylum Project, a nonprofit
        legal organization that helps persecuted LGBTQ+ people abroad get
        protection in the US.
      </FadeInView>
      <FadeInView component={motion.img} src="/lgbt-poster-animation.gif" />{' '}
      <FadeInView component={motion.h1}>At a glance</FadeInView>
      <FadeInView component={motion.p}>
        LGBTQ+ people throughout the world are subjected to violence and abuse
        because of their sexuality and/or gender identity. The LGBT Asylum
        Project is dedicated to providing legal representation for LGBT asylum
        seekers fleeing persecutation.
        <br />
        <br />I worked as a freelance designer to create the 2020 annual report
        and also created an extended brand identity to help potential donors see
        the LGBT Asylum Project for the hardworking, optimistic organiztaion
        that they are.
      </FadeInView>
      <FadeInView component={motion.img} src="/lgbtq-logo.png" />{' '}
      <FadeInView component={motion.h1}>The brand</FadeInView>
      <FadeInView component={motion.p}>
        The organization's brand is exuberant yet professional. I extended the
        life-saving and confident, bold nature of the brand to show sponsors how
        proud the organization and community are to do what they do.
      </FadeInView>
      <FadeInView
        component={motion.img}
        src="/lgbt-stationery.png"
        marginBottom
      />
      <FadeInView component={motion.img} src="/lgbt-posters.png" marginBottom />
      <FadeInView component={motion.img} src="/lgbt-circle.png" marginBottom />
      <FadeInView component={motion.img} src="/lgbt-frame.png" marginBottom />
      <FadeInView component={motion.img} src="/lgbt-long.png" />
      <FadeInView component={motion.h1}>Bold and true</FadeInView>
      <FadeInView component={motion.p}>
        The brand is colorful and bold, embodying the queer community. Colors
        from across the logo combine to highlight authentic photos of queer
        people, selected to represent authenticity and truth.
        <br />
        <br />
        The circular backdrop represents not only the lifesaver icon of the
        logo, but also resembles a rising circle symbolizing optimism and
        hopefulness.
      </FadeInView>
      <FadeInView component={motion.img} src="/lgbt-cards.png" marginBottom />
      <FadeInView component={motion.img} src="/lgbt-card-stack.png" />
      <FadeInView component={motion.h1}>Strong and proud</FadeInView>
      <FadeInView component={motion.p}>
        Oswald, chosen to highlight the proud voice of the organization, and
        Crimson Pro, chosen to symbolize the simplicity and professionalism of
        their spirit, contrast to show sponsors the full soul of the LGBT Asylum
        Project and the work that they're so passionate about.
      </FadeInView>
      <FadeInView component={motion.img} src="/lgbt-report.png" />
      <FadeInView component={motion.h1}>Impact</FadeInView>
      <FadeInView component={motion.p}>
        An excerpt from the 2020 annual report, released in 2021, to tell
        sponsors the organization's story and raise funds.
        <br />
        <br />
        The organization is expected to raise over $400,000 in 2021.
      </FadeInView>
      <br />
      <br />
      <br />
    </motion.div>
    // </motion.div>
  );
};

export default LGBT;
