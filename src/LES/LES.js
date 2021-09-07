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
        The Lower East Side is a storied neighborhood that is rapidly
        gentrifying and is now often considered quirky and hipster. It has a mix
        of new avant-garde establishments and old historical locations, making
        it an extremely unique neighborhood.
        <br />
        <br />I worked as a brand designer on this project. This project was
        done with Azura Design at the School of Visual Arts.
      </FadeInView>
      <FadeInView component={motion.img} src="/les-logo.png" />
      <FadeInView component={motion.h1}>The brand</FadeInView>
      <FadeInView component={motion.p}>
        The logo has perpendicular angles and extending lines, alluding to the
        NYC street grid. The logo also sits at an approximately 23&deg; angle,
        like the city grid of the Lower East Side.
        <br />
        <br />
        The brand uses Helvetica as the main typeface because, like the
        neighborhood itself, Helvetica has a long and grand history. Helvetica
        is also used in both old and new design and, with the recent rise of
        brutalist design, Helvetica is now used in artsier places like the logo
        of Comme des Gar&ccedil;ons.
      </FadeInView>
      <FadeInView component={motion.img} src="/les-katz.png" marginBottom />
      <FadeInView component={motion.img} src="/les-dirt.png" marginBottom />
      <FadeInView component={motion.img} src="/les-bake.png" marginBottom />
      <FadeInView component={motion.img} src="/les-subway.png" />
      <FadeInView component={motion.h1}>Promoting the neighborhood</FadeInView>
      <FadeInView component={motion.p}>
        The brand shows visitors exactly what the LES is: a historical
        neighborhood with an eccentric modern twist. The repetition of
        perpendicular sets of parallel text is reminiscent of NYC's city grid.
        <br />
        <br />
        The brand is oriented towards visitors to promote commerce and tourism
        in the LES.
      </FadeInView>
      <FadeInView component={motion.img} src="/les-card.png" marginBottom />
      <FadeInView component={motion.img} src="/les-bag.png" marginBottom />
      <FadeInView component={motion.img} src="/les-clothes.png" />
      <FadeInView component={motion.h1}>Promoting the neighborhood</FadeInView>
      <FadeInView component={motion.p}>
        The brand shows visitors exactly what the LES is: a historical
        neighborhood with an eccentric modern twist. The repetition of
        perpendicular sets of parallel text is reminiscent of NYC's city grid.
        <br />
        <br />
        The brand is oriented towards visitors to promote commerce and tourism
        in the LES.
      </FadeInView>
      <br />
      <br />
      <br />
    </motion.div>
    // </motion.div>
  );
};

export default LES;
