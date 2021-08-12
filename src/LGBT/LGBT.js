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
        variants={item}
        style={{ fontWeight: 400 }}
        divStyle={{ width: '100%', maxWidth: 600 }}
      >
        LGBT Asylum Project
      </FadeInView>
      <FadeInView component={motion.p} variants={item} style={{ fontSize: 21 }}>
        <FadeInView component={motion.span}>
          The 2020 annual report for the LGBT Asylum Project, a nonprofit legal
          organization that helps persecuted LGBTQ+ people abroad get protection
          in the US.
        </FadeInView>
      </FadeInView>
      <FadeInView
        component={motion.img}
        variants={item}
        src="/lgbt1.png"
        divStyle={{
          maxWidth: 600,
        }}
      />
      <FadeInView
        component={motion.h2}
        variants={item}
        divStyle={{
          maxWidth: 600,
          width: '100%',
          justifyContent: 'left',
          marginBottom: -16,
        }}
      >
        Background
      </FadeInView>
      <FadeInView component={motion.p} variants={item}>
        LGBTQ+ people throughout the world are subjected to violence and abuse
        because of their sexuality and/or gender identity .
        <br />
        <br />
        The LGBT Asylum Project is the only San Francisco nonprofit organization
        exclusively dedicated to providing accessible legal representation for
        LGBT asylum seekers who are fleeing persecution due to their sexual
        orientation, gender identity and/or HIV status.
      </FadeInView>
      <FadeInView
        component={motion.h2}
        variants={item}
        divStyle={{
          maxWidth: 600,
          width: '100%',
          justifyContent: 'left',
          marginBottom: -16,
        }}
      >
        Problem
      </FadeInView>
      <FadeInView component={motion.p} variants={item}>
        As a nonprofit organization, the LGBT Asylum Project is dependent on
        funding and donations from various charity funds or government
        organizations. <br />
        <br />
        In order to secure funding, the LGBT Asylum Project needs to have an
        annual report for sponsor organizations to get an idea of who we are and{' '}
        what exactly their money is going towards.
      </FadeInView>
      <FadeInView
        component={motion.img}
        src="/lgbt9.png"
        divStyle={{
          maxWidth: 1000,
        }}
        style={{ maxWidth: 1200 }}
      />
      <FadeInView component={motion.p}>
        The team I worked with. It consisted of mostly lawyers, including the
        first LGBTQ+ lawyer from Turkey. <br />
        <br />
        They were extremely passionate in their work and their mission, which
        drew me to the project. However, they did not have much prior experience
        in creating graphics, so previous reports were just pages and pages of
        graphs that didn't always make sense and were difficult to read. For
        example, global outreach was actually presented in the form of a pie
        chart, which wasn't useful to readers.
      </FadeInView>
      <FadeInView component={motion.img} variants={item} src="/lgbt10.svg" />
      <FadeInView component={motion.p}>
        Initial research for the report. Previously, their reports had been only
        numbers from their own organization, and I helped them do research into
        quantitative measures of the global context of their work to tell their
        story better.
      </FadeInView>
      <FadeInView
        component={motion.img}
        src="/lgbt12.jpg"
        divStyle={{
          maxWidth: 500,
        }}
      />
      <FadeInView component={motion.p}>
        Initial sketches for how the LGBT Asylum Project's data could be
        presented in engaging ways. I explored different styles of presenting
        quantitative data to charity organizations to put together a cohesive
        narrative.
      </FadeInView>
      <FadeInView
        component={motion.img}
        src="/lgbt-logo.png"
        divStyle={{
          maxWidth: 600,
        }}
      />
      <FadeInView component={motion.p}>
        The logo of the organization, which I used to inform my subsequent
        decisions on the visual design of the report. I also extended it into
        visual elements that could be used elsewhere to highlight information
        while expressing their brand identity.
        <br />
        <br />
        In addition, I worked with the team to further define and develop their
        brand identity and learned that their work is life-saving and hopeful. I
        worked to incorporate this energy into their report so charities would
        understand who they are.
      </FadeInView>
      <FadeInView
        component={motion.img}
        src="/lgbt2.png"
        divStyle={{
          maxWidth: 600,
        }}
      />
      <FadeInView component={motion.p}>
        In addition to the visual design, I also wrote the majority of the
        content and copy, especially on the full spread illustration pages.
      </FadeInView>
      <FadeInView
        component={motion.img}
        src="/lgbt4.png"
        divStyle={{
          maxWidth: 1000,
        }}
        style={{ maxWidth: 1200 }}
      />
      <FadeInView component={motion.p}>
        The spread I created to illustrate the organization's impact around the
        world.
        <br />
        <br />
        Previously, this data was actually presented in pie chart form so I
        worked with the team to get them to see that >data can be a story and
        not just graphs. Discussions like those led to more informative and
        engaging reports .
      </FadeInView>
      <FadeInView
        component={motion.img}
        src="/lgbt5.png"
        divStyle={{
          maxWidth: 1000,
        }}
        style={{ maxWidth: 1200 }}
      />
      <FadeInView component={motion.p}>
        An additional example of a spread that came out of working with the team
        to create a graphic that tells a story and engages charity organizations
        to see our value and impact.
      </FadeInView>
      <FadeInView
        component={motion.img}
        src="/lgbt6.png"
        divStyle={{
          maxWidth: 1000,
        }}
        style={{ maxWidth: 1200 }}
      />
      <FadeInView component={motion.p}>
        A client story to make a truly deep impression on readers and to put all
        of the previous quantitive data into a real world, practical example.
        <br />
        <br />I worked with the team to learn about their clients and their
        stories and convinced them to include a qualitative client story in
        their report because the stories of real people are more compelling than
        raw numbers.
      </FadeInView>
      <br />
      <br />
      <br />
    </motion.div>
    // </motion.div>
  );
};

export default LGBT;
