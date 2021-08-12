import React, { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { item } from '../Body/Body';

export const FadeInView = (props) => {
  const { component: Component, divStyle, ...otherProps } = props;
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
        justifyContent: 'flex-start',
        ...divStyle,
      }}
    >
      <Component
        variants={item}
        animate={controls}
        initial="hidden"
        {...otherProps}
      />
    </div>
  );
};

export default FadeInView;
