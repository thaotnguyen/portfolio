import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { item } from '../Body/Body';

export const FadeInView = (props) => {
  const { component: Component, divStyle, marginBottom, ...otherProps } = props;
  const controls = useAnimation();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('show');
    }
  }, [controls, inView]);
  return (
    <div
      ref={ref}
      style={{
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        alignItems: 'flex-start',
        position: 'relative',
        flexDirection: 'column',
        marginBottom: marginBottom ? (window.innerWidth > 600 ? 64 : 16) : 0,
        ...divStyle,
      }}
    >
      <Component
        // variants={item}
        // animate={controls}
        // initial="hidden"
        {...otherProps}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <motion.div
          variants={item}
          animate={controls}
          initial="hidden"
          style={{
            background: '#191819',
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    </div>
  );
};

export default FadeInView;
