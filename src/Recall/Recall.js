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
        <FadeInView component={motion.p}>
          My main UX project at Google was Recall, an internal video platform
          for UX researchers to upload footage of interviews for automatic
          analysis like transcription. When Recall was first developed, it was
          developed entirely by engineers without designers so the product
          basically looked like just the functionality plopped on the page. My
          job was to give the app a real UX foundation with research and
          design.
        </FadeInView>
        <FadeInView component={motion.h1}>Research</FadeInView>
        <FadeInView component={motion.p} >
          Starting UX research by looking at quantitative data.
        </FadeInView>
        <FadeInView component={motion.img} src="/recall4.png" />
        <FadeInView component={motion.p}>
          Research showed that many new users had trouble getting started and
          didn't know what the purpose of most components on the page were, so a
          new design had to include various empty states and prompts to guide
          users.
        </FadeInView>
        <FadeInView component={motion.img} src="/recall5.png" />
        <FadeInView component={motion.p}>
          The design also needed to surface the most salient information to
          users, based on what they found important in usability tests.
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
        <FadeInView component={motion.p}>
          The finished product. Metrics showed that the project was an overall
          success. We had a 64% increase in MAU a week after the launch, and
          drop off rate on the homepage also reduced significantly.
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
