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
          style={{ fontSize: 72 }}
          divStyle={{
            width: '100%',
          }}
        >
          Modal
        </FadeInView>
        <FadeInView component={motion.h2} style={{ fontSize: 32 }}>
          A complete brand identity for a fashion-centric social media app for
          creators, enthusiasts, and influencers.
        </FadeInView>
        <FadeInView
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
        </FadeInView>
        <FadeInView component={motion.img} src="/modal-screens.png" />
        <FadeInView component={motion.h1}>At a glance</FadeInView>
        <FadeInView component={motion.p}>
          Young people at UCLA were frequently saying there is no place to ask
          questions or find new styles. They felt current social media didn’t
          match their needs. I was brought on as a freelance visual designer to
          create a brand and app to solve this problem.
        </FadeInView>
        <FadeInView component={motion.p}></FadeInView>
        <FadeInView component={motion.img} src="/modal-mood.png" />
        <FadeInView component={motion.h1}>The team's vision</FadeInView>
        <FadeInView component={motion.p}>
          I established 4 brand pillars with the team: being contemporary,
          accessible, human-centric, and stylish. Modal shouldn't feel like
          other social media apps, it should have a special flair to it that
          also feels personable.
          <br />
          <br />
          The name Modal comes from a modern textile that is often woven into
          other fabrics to make the end result softer and more eco-conscious.
        </FadeInView>
        <FadeInView component={motion.img} src="/modal-logo.png" />
        <FadeInView component={motion.h1}>Human-centered logo</FadeInView>
        <FadeInView component={motion.p}>
          The red was chosen to evoke the sophistication of fashion media such
          as Vogue and Vanity Fair, balanced out by the humanist font. <br />
          <br />
          The red shape, inspired by the shape of dropping a piece of fabric
          onto a ball, is a common thread through visual patterns in the brand
          and morphs to represent human features.
        </FadeInView>
        <FadeInView component={motion.img} src="/modal-faces.png" />
        <FadeInView component={motion.h1}>A brand that feels human</FadeInView>
        <FadeInView component={motion.p}>
          The brand system is flexible and can be adapted to many different
          illustrations. Here the red shape represents lips, eyes, and a heart,
          conveying a sense of human connection.
        </FadeInView>
        <FadeInView
          component={motion.img}
          src="/modal1.png"
          style={{ marginBottom: 64 }}
        />
        <FadeInView component={motion.img} src="/modal-mag.png" />
        <FadeInView component={motion.h1}>A versatile brand</FadeInView>
        <FadeInView component={motion.p}>
          The brand can be extended to all kinds of media easily, from physical
          to digital to print. The red shape can also be used as an underline to
          emphasize text and photography.
        </FadeInView>
        <FadeInView component={motion.img} src="/modal-icon.png" />
        <FadeInView component={motion.h1}>
          An app icon that stands out
        </FadeInView>
        <FadeInView component={motion.p}>
          The bold nature of the logo and illustrations mean that the app icon
          will stand out on anyone's phone screen.
        </FadeInView>
        <FadeInView component={motion.img} src="/modal-system.png" />
        <FadeInView component={motion.h1}>The brand system</FadeInView>
        <FadeInView component={motion.p}>
          A comprehensive brand system for future designers on the Modal team.
          Special consideration was taken to include a light version of the
          primary color in order to maintain proper contrast in accessibility
          contexts.
        </FadeInView>
        <FadeInView component={motion.img} src="/modal-feed.gif" />
        <FadeInView component={motion.h1}>Unique interactions</FadeInView>
        <FadeInView component={motion.p}>
          The flair of the brand also manifests itself in in-app interactions,
          such as the scrolling animation. It gets users engaged and immersed
          through style while also differentiating Modal from other social media
          apps.
        </FadeInView>
        <FadeInView component={motion.img} src="/modal-app.png" />
        <FadeInView component={motion.h1}>Immersive screens</FadeInView>
        <FadeInView component={motion.p}>
          Major priorities for the UX design of Modal was to maximize user
          engagement and to capitalize on the fact that fashion revenue is
          increasingly moving online.
          <br />
          <br />I decided to take a different approach to profile pages and
          posts, opting for a full screen presentation for both. Full screen
          images often get users spending more time per post and also often get
          users to begin scrolling.
        </FadeInView>
        <FadeInView
          component={motion.img}
          src="/modal-end.png"
          divStyle={{ marginBottom: 64 }}
        />
        <FadeInView
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
        </FadeInView>
        <br />
        <br />
        <br />
      </motion.div>
    </motion.div>
  );
};

export default Fabric;
