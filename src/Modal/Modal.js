import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import { container, item } from '../Body/Body';

import './Modal.scss';
import FadeInView from '../fadeInView';

export const Fabric = () => {
  useEffect(() => {
    window.scroll(0, 0);
    return () => { };
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
          Freelance product design work for a fashion-centric social media app for
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
        <FadeInView component={motion.img} src="/modal-app.png" />
        <FadeInView component={motion.h1}>At a glance</FadeInView>
        <FadeInView component={motion.p}>
          I was a freelance visual and product designer to create a social media app where people could ask questions, learn, and connect over
          fashion.<br /><br />
          My goals at the outset of the project were to determine how this product can fit into the existing marketplace of social media apps and fashion and to find how who the target audience is.
        </FadeInView>
        {/* <FadeInView component={motion.img} src="/modal-mood.png" /> */}
        <FadeInView component={motion.h1}>Market research</FadeInView>
        <FadeInView component={motion.p}>
          Research consisted of three separate phases: market research, UX research, and branding research.
          <br />
          <br />Through quantitatively analyzing market trends, I found that online fashion sales are comprising an increasingly large percentage of the industry. As a result, I added links to buy and sell clothes that were featured in posts in order to capitalize on this market opportunity.
        </FadeInView>
        <FadeInView component={motion.img} src="/modal-research.png" />
        <FadeInView component={motion.h1}>UX research</FadeInView>
        <FadeInView component={motion.p}>
          I conducted interviews with users from 4 countries of all ages and genders to determine the ideal target audience and user profile. I found that, not only did the idea have broad appeal across all genders and locations, but the app also had value for potential users with vastly differing levels of interest, knowledge, experience, and goals.
          <br />
          <br />
          This provided both a challenge and an opportunity, because influencers could help rapidly build a user base for a new social media product while appeal to beginners could help the app become mainstream. Creating a product that could fill a gap for all of these audiences was a major design pillar.
        </FadeInView>
        <FadeInView component={motion.img} src="/modal-stories.png" />
        <FadeInView component={motion.h1}>Brand research</FadeInView>
        <FadeInView component={motion.p}>
          Modal has 4 brand pillars: being contemporary, accessible,
          human-centric, and stylish. Modal shouldn't feel like other social
          media apps, it should have a special flair to it that also feels
          personable. At the same time, Modal is for everyone. As a result, the branding had to feel accessible like traditional tech branding, but also sophisticated like traditional fashion branding.
          <br />
          <br />
          The name Modal comes from the French word for fashion, "mode". Modal
          is also a modern textile that is often woven into other fabrics to
          make the end result softer and more eco-conscious.
          <br /><br />
          The bright yellow-green accent color is meant to invoke the unapologetic and loud nature of the Generation Z user base while also not carrying any gendered connotations like much of fashion branding does.
        </FadeInView>
        <FadeInView component={motion.img} src="/modal-name.png" />
        <FadeInView component={motion.h1}>Testing &amp; iteration</FadeInView>
        <FadeInView component={motion.p}>
          I used Figma and React Native to create prototypes and to experiment with less conventional social media layouts and pages.
          <br />
          <br />
          Below is an example, comparing an early design for the home feed with a later design. The earlier design was much safer and drew inspiration from the practical layout of Reddit, while the later design aimed to embody the high engagement-per-post and immersion of Tiktok's feed.
        </FadeInView>
        <FadeInView component={motion.img} src="/modal-test.png" />
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
        <FadeInView component={motion.img} src="/modal-feed.gif" />
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
        {/* <FadeInView component={motion.img} src="/modal-icon.png" marginBottom /> */}
        {/* <FadeInView
          component={motion.img}
          src="/modal-ig.gif"
          style={{ marginBottom: 64 }}
        /> */}
        {/* <FadeInView
          component={motion.img}
          src="/modal-cards.png"
          marginBottom
        />
        <FadeInView component={motion.img} src="/modal-mag.png" marginBottom />
        <FadeInView
          component={motion.img}
          src="/modal-billboard.png"
          marginBottom
        /> */}
        {/* <FadeInView
          component={motion.img}
          src="/modal-font.png"
          divStyle={{ background: 'white' }}
        /> */}
        <FadeInView component={motion.h1}>The brand</FadeInView>
        <FadeInView component={motion.p}>
          The primary color, neon yellow, was chosen to symbolize the rebellious
          and unapologetic nature of today's youth, the target audience for the
          brand. The font, Radio Grotesk, has elegant humanist curves while
          bringing a polished feel, and introduces an element of sophistication
          without feeling inaccessible.
        </FadeInView>
        <FadeInView component={motion.img} src="/modal-ig.gif" marginBottom />
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
        <FadeInView component={motion.h1}>Fitting the market need</FadeInView>
        <FadeInView component={motion.p}>
          The extensive threefold research I performed early in the process informed features such as being able to tag products in posts, including pages catering to specific styles, and including measurements on a user's profile page.
        </FadeInView>
        <FadeInView component={motion.img} src="/modal-screens1.png" />
        <FadeInView component={motion.h1}>Unique interactions</FadeInView>
        <FadeInView component={motion.p}>
          The flair of the brand also manifests itself in in-app interactions,
          such as the scrolling animation. It gets users engaged and immersed
          through style while also differentiating Modal from other social media
          apps. The motif of full-screen immersion is also carried through to the profile page which prominently displays a user's profile picture as a highlight of their identity.
          <br />
          <br />
          The app uses HK Grotesk for increased readability.
        </FadeInView>
        <FadeInView component={motion.img} src="/modal-screens2.png" />
        <FadeInView component={motion.h1}>Progress &amp; development</FadeInView>
        <FadeInView component={motion.p}>
          Beyond designing the app, I also did some development work in React Native on some unique interactions, such as the feed scrolling.
          <br />
          <br />
          The app is currently in beta testing at college campuses.
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
