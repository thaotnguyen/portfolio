import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import { container, item } from '../Body/Body';

import './Fabric.scss';
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
          Fabric UX
        </FadeInView>
        <FadeInView component={motion.h2} style={{ fontSize: 32 }}>
          A complete brand identity for an internal team within Google Ads, and
          my core project as a visual designer at Google.
        </FadeInView>
        <FadeInView
          component={motion.h2}
          style={{ fontSize: 18 }}
          divStyle={{
            marginBottom: 64,
          }}
        >
          See the complete process{' '}
          <a href="#" onClick={() => window.open('/fabric.pdf', '_blank')}>
            here
          </a>
          .
        </FadeInView>
        <FadeInView component={motion.img} src="/fabric_1.png" />
        <FadeInView component={motion.h1}>At a glance</FadeInView>
        <FadeInView component={motion.p}>
          3 teams under Google Ads were merging together, and it was my task to
          create a new brand identity that they could unite under. I worked
          alongside an award-winning visual designer,{' '}
          <a
            href="#"
            onClick={() => window.open('https://irissprague.co', '_blank')}
            style={{ color: 'white' }}
          >
            Iris Sprague
          </a>
          , as my mentor for this project.
        </FadeInView>
        <FadeInView component={motion.img} src="/workshop.gif" />
        <FadeInView component={motion.h1}>
          Crafting a visual identity
        </FadeInView>
        <FadeInView component={motion.p}>
          I used initial surveys to put together a new mission and purpose from
          which a brand could emerge under. I also led design sprints to work on
          a new name and a mood board for the new brand, which happened entirely
          remotely.
        </FadeInView>
        <FadeInView component={motion.img} src="/fabric-mood.png" />
        <FadeInView component={motion.h1}>The team's vision</FadeInView>
        <FadeInView component={motion.p}>
          The team saw themselves as being very human and personable and
          friendly, while also being very polished and professional and existing
          within a complex problem space. I also found that they gravitated
          towards complex patterns and a mix of organic and inorganic lines, as
          well as imagery that could be utilized in a number of ways.
        </FadeInView>
        <FadeInView component={motion.img} src="/fabric-logo.png" />
        <FadeInView component={motion.h1}>A brand woven together</FadeInView>
        <FadeInView component={motion.p}>
          The logo reflects singular forms with their own unique qualities that
          create greater meaning when united, reflecting the team’s
          multi-disciplinary composition and work across many surfaces.
        </FadeInView>
        <FadeInView component={motion.img} src="/fabric3.png" />
        <FadeInView component={motion.h1}>A brand that adapts</FadeInView>
        <FadeInView component={motion.p}>
          The final logo is flexible and can be used as a knockout or as a
          container to hold an extremely wide variety of patterns, fitting the
          versatile nature of the team and their adaptability towards the
          ever-changing problems that they solve.
        </FadeInView>
        <FadeInView
          component={motion.img}
          src="/fabric-stationery.png"
          divStyle={{ marginBottom: 64 }}
        />
        <FadeInView
          component={motion.img}
          src="/fabric-shirt.png"
          divStyle={{ marginBottom: 64 }}
        />
        <FadeInView
          component={motion.img}
          src="/fabric-cup.png"
          divStyle={{ marginBottom: 64 }}
        />
        <FadeInView
          component={motion.img}
          src="/fabric-mask.png"
          divStyle={{ marginBottom: 64 }}
        />
        {/* <FadeInView component={motion.h1}>A versatile brand</FadeInView>
        <FadeInView component={motion.p}>
          The brand can be extended to all kinds of media easily, from physical
          to digital to print.
        </FadeInView> */}
        <FadeInView
          component={motion.img}
          src="/fabric-slide.png"
          divStyle={{ marginBottom: 64 }}
        />
        <FadeInView
          component={motion.img}
          src="/fabric-illos.gif"
          divStyle={{ background: 'white', marginBottom: 64 }}
        />
        <FadeInView component={motion.img} src="/fabric-billboard.gif" />
        <FadeInView component={motion.h1}>A united brand</FadeInView>
        <FadeInView component={motion.p}>
          Fabric represents the idea that pieces can unite together to become
          something more than the sum of its parts.
          <br />
          <br />
          The brand can exist not only physically but also digitally, where the
          patterns can be utilized in a number of different ways, being a
          container for a pattern, a knockout for the pattern, or even broken
          apart into individual shapes.
        </FadeInView>
        {/* <FadeInView component={motion.img} src="/fabric-early-animation.gif" /> */}
        {/* <FadeInView component={motion.h1}>A united brand identity</FadeInView> */}
        {/* <FadeInView component={motion.h1}>A brand that lives</FadeInView>
        <FadeInView component={motion.p}>
          I also created animations for the brand, illustrating the organic and
          living nature of the brand and team.
        </FadeInView> */}
        {/* <FadeInView
          component={motion.img}
          src="/fabric-colors.png"
          divStyle={{
            background: 'white',
            padding: 64,
            marginBottom: 64,
            boxSizing: 'border-box',
          }}
        />
        <FadeInView
          component={motion.img}
          src="/fabric-shapes.png"
          divStyle={{
            background: 'white',
            padding: 64,
            boxSizing: 'border-box',
          }}
        /> */}
        <FadeInView component={motion.img} src="/fabric-system.png" />
        <FadeInView component={motion.h1}>
          Brand system and guidelines
        </FadeInView>
        <FadeInView component={motion.p}>
          Color and pattern guidelines, part of the Fabric brand system.
          Fabric's colors were carefully chosen to make sure that they could
          combine to create harmonious combinations.
        </FadeInView>
        <FadeInView component={motion.img} src="/fabric11.png" />
        <FadeInView component={motion.h1}>The brand in real life</FadeInView>
        <FadeInView component={motion.p}>
          Branded items from happy hour after the brand launch.
        </FadeInView>
        <FadeInView component={motion.h2} style={{ fontSize: 18 }}>
          See the complete process{' '}
          <a href="#" onClick={() => window.open('/fabric.pdf', '_blank')}>
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
