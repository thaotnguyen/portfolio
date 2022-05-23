import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import { container, item } from '../Body/Body';

import './Recall.scss';
import FadeInView from '../fadeInView';

export const Recall = () => {
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
        <FadeInView component={motion.h1} className="title" divStyle={{ width: '100%' }}>Recall</FadeInView>
        <FadeInView component={motion.h2} className="subtitle">
          Product design for a video platform at Google that
          enables UX researchers to record, upload, analyze, and share
          videos of their user studies.
        </FadeInView>
        <FadeInView component={motion.h2} style={{ fontSize: 18 }} marginBottom>
          See the complete process{' '}
          <a href="#" onClick={() => window.open('/recall.pdf', '_blank')}>
            here
          </a>
          .
        </FadeInView>
        <FadeInView component={motion.img} src="/recall_hero.png" />
        <FadeInView component={motion.h1}>Overview &amp; goals</FadeInView>
        <FadeInView component={motion.p}>
          Recall is an internal video platform
          for UX researchers to upload footage of interviews for automatic
          analysis like transcription. When Recall was first developed, it was
          developed entirely by engineers without designers so the product
          looked like just functionality plopped on the page. My
          task was to give the app a solid UX foundation with research and
          design. I performed the UX research and design, and I worked with 2 developers to complete the project.<br /><br />
          The goals of this project were threefold: to aid current users in their tasks, to attract new users to our product, and to upgrade the visuals of the product.
        </FadeInView>
        <FadeInView component={motion.h1}>Research</FadeInView>
        <FadeInView component={motion.p} >
          I started my UX research by looking at quantitative data, which showed that a unexpectedly high number of users were dropping off on the home page. Analytics also revealed that, even though this tool was for UX researchers, other unexpected groups made up a large part of the user base, like software engineers who wanted to record bugs on their devices.
          <br />
          <br />
          I then conducted user interviews with UX researcher users, other users, and prospective UX researcher users to find out what their pain points were, what their user journeys were and how they differed, and where we sat in the market of similar tools and what our strengths and weaknesses were.
        </FadeInView>
        <FadeInView component={motion.img} src="/recall4.png" />
        <FadeInView component={motion.h1}>Insights</FadeInView>
        <FadeInView component={motion.p}>
          Research showed that many new users had trouble getting started and
          didn't know what the purpose of most components on the page were, so a
          new design had to include various empty states and prompts to guide
          users. Guidance was the main pillar for this redesign.<br /><br />
        </FadeInView>
        <FadeInView component={motion.img} src="/recall5.png" />
        <FadeInView component={motion.p}>
          Users stated in interviews that automated analysis was what set us apart from other competing products, so the design had to make that analysis clear and easily accessible.
          <br /><br />
          I created prototypes, ranging from using Figma to real code, to conduct usability tests to iterate on designs.
        </FadeInView>
        <FadeInView component={motion.img} src="/recall6.png" marginBottom />
        <FadeInView component={motion.img} src="/recall13.png" />
        <FadeInView component={motion.p}>
          I also created illustrations to not only ease users into the product,
          but also to add polish and refinement to increase trust.
        </FadeInView>
        <FadeInView component={motion.img}
          src="/recall8.png"
          style={{ padding: 0, border: '1px solid #e0e0e0' }} marginBottom
        />
        <FadeInView component={motion.img}
          src="/recall11.png"
          style={{ padding: 0, border: '1px solid #e0e0e0' }} marginBottom
        />
        <FadeInView component={motion.img}
          src="/recall12.png"
          style={{ padding: 0, border: '1px solid #e0e0e0' }}
        />
        <FadeInView component={motion.h1}>Impact</FadeInView>
        <FadeInView component={motion.p}>
          Metrics showed that the project was an overall
          success. We had a 64% increase in MAU a week after the launch, and
          drop off rate on the homepage also reduced significantly from 90% to 36%.
        </FadeInView>
        <FadeInView component={motion.h2} style={{ fontSize: 18 }} marginBottom>
          See the complete process{' '}
          <a href="#" onClick={() => window.open('/recall.pdf', '_blank')}>
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

export default Recall;
