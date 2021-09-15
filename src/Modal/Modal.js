import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import { container, item } from '../Body/Body';

import './Modal.scss';
import FadeInView from '../fadeInView';

export const Fabric = () => {
  useEffect(() => {
    window.scroll(0, 0);
    return () => {};
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
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
          Modal
        </FadeInView>
        <FadeInView component={motion.h2} className="subtitle">
          A complete brand identity for a fashion-centric social media app for
          creators, enthusiasts, and influencers.
        </FadeInView>
        {/* <FadeInView
          component={motion.h2}
          style={{ fontSize: 18 }}
          divStyle={{
            marginBottom: 64,
          }}
        >
          See the complete process and the UX design{' '}
          <a href="#" onClick={() => window.open('/modal.pdf', '_blank')}>
            here
          </a>
          .
        </FadeInView> */}
        <FadeInView component={motion.img} src="/modal-ad.png" />
        <FadeInView component={motion.h1}>At a glance</FadeInView>
        <FadeInView component={motion.p}>
          I was a freelance visual and product designer to create a brand and
          build an app where people could ask questions, learn, and connect over
          fashion.
        </FadeInView>
        <FadeInView component={motion.p}></FadeInView>
        {/* <FadeInView component={motion.img} src="/modal-mood.png" /> */}
        <FadeInView component={motion.img} src="/modal-logo.png" marginBottom />
        <FadeInView component={motion.h1}>The team's vision</FadeInView>
        <FadeInView component={motion.p}>
          Modal has 4 brand pillars: being contemporary, accessible,
          human-centric, and stylish. Modal shouldn't feel like other social
          media apps, it should have a special flair to it that also feels
          personable. At the same time, Modal is for everyone.
          <br />
          <br />
          The name Modal comes from the French word for fashion, "mode". Modal
          is also a modern textile that is often woven into other fabrics to
          make the end result softer and more eco-conscious.
        </FadeInView>
        {/* <FadeInView component={motion.img} src="/modal-process.png" /> */}
        {/* <FadeInView component={motion.h1}>Human-centered logo</FadeInView>
        <FadeInView component={motion.p}>
          The red was chosen to evoke the sophistication of fashion media such
          as Vogue and Vanity Fair, balanced out by the humanist font. <br />
          <br />
          The red shape, inspired by the shape of dropping a piece of fabric
          onto a ball, is a common thread through visual patterns in the brand
          and morphs to represent human features.
        </FadeInView> */}
        <FadeInView component={motion.img} src="/modal-icon.png" marginBottom />
        <FadeInView
          component={motion.img}
          src="/modal-ig.gif"
          style={{ marginBottom: 64 }}
        />
        {/* <FadeInView
          component={motion.img}
          src="/modal-shirt.png"
          style={{ marginBottom: 64 }}
        /> */}
        {/* <FadeInView component={motion.img} src="/modal-mag.png" marginBottom /> */}
        {/* <FadeInView
          component={motion.img}
          src="/modal-font.png"
          divStyle={{ background: 'white' }}
        /> */}
        <FadeInView component={motion.h1}>The audience</FadeInView>
        <FadeInView component={motion.p}>
          The circular motif is used to highlight the individual of each
          portrait, and, combined with photography depicting a diverse set of
          people, helps every user feel like their unique characteristics can
          make them fashionable too.
          <br />
          <br />
          The primary color, neon yellow, was chosen to symbolize the rebellious
          and unapologetic nature of today's youth, the target audience for the
          brand. The font, Radio Grotesk, has elegant humanist curves while
          bringing a polished feel, and introduces an element of sophistication
          without feeling inaccessible.
        </FadeInView>
        {/* <FadeInView component={motion.img} src="/modal-icon.png" />
        <FadeInView component={motion.h1}>
          An app icon that stands out
        </FadeInView>
        <FadeInView component={motion.p}>
          The bold nature of the logo and illustrations mean that the app icon
          will stand out on anyone's phone screen.
        </FadeInView> */}
        {/* <FadeInView component={motion.img} src="/modal-system.png" />
        <FadeInView component={motion.h1}>The brand system</FadeInView>
        <FadeInView component={motion.p}>
          A comprehensive brand system for future designers on the Modal team.
          Special consideration was taken to include a light version of the
          primary color in order to maintain proper contrast in accessibility
          contexts.
        </FadeInView> */}
        <FadeInView component={motion.img} src="/modal-feed.gif" />
        <FadeInView component={motion.h1}>Unique interactions</FadeInView>
        <FadeInView component={motion.p}>
          The flair of the brand also manifests itself in in-app interactions,
          such as the scrolling animation. It gets users engaged and immersed
          through style while also differentiating Modal from other social media
          apps.
          <br />
          <br />
          The app uses HK Grotesk for increased readability.
        </FadeInView>
        <FadeInView component={motion.img} src="/modal-app.png" />
        <FadeInView component={motion.h1}>Immersive screens</FadeInView>
        <FadeInView component={motion.p}>
          Major priorities for the UX design of Modal were to maximize user
          engagement and to capitalize on the fact that fashion revenue is
          increasingly moving online.
          <br />
          <br />
          Modal has a different approach to profile pages and posts, opting for
          a full screen presentation for both. Full screen images often get
          users spending more time per post and also often get users to begin
          scrolling.
        </FadeInView>
        {/* <FadeInView component={motion.img} src="/modal-end.png" marginBottom /> */}
        {/* <FadeInView
          component={motion.h2}
          style={{ fontSize: 18 }}
          divStyle={{
            marginBottom: 64,
          }}
        >
          See the complete process and the UX design{' '}
          <a href="#" onClick={() => window.open('/modal.pdf', '_blank')}>
            here
          </a>
          .
        </FadeInView> */}
        <br />
        <br />
        <br />
      </motion.div>
    </motion.div>
  );
};

export default Fabric;
