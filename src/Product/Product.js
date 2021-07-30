import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import { container, item } from '../Body/Body';

import './Product.scss';

export const Product = () => {
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
        <motion.h1 variants={item}>Illustrations</motion.h1>
        <motion.p variants={item}>
          <motion.span>
            A collection of various illustrations I've done for many internal
            products across Google, some of which are used by the majority of
            UXers at the company.
          </motion.span>
        </motion.p>
        <motion.img variants={item} src="/illustration1.png" />
        <motion.p variants={item}>
          Initial sketches and ideas for illustrations for an app where users
          can annotate and inspect Figma/Sketch mocks for handoff to engineers.
          The main challenge was figuring out visual representations of the
          concepts of annotation and inspection, as well as communicating the
          idea of style guides via illustration.
        </motion.p>
        <motion.img variants={item} src="/illustration2.png" />
        <motion.p variants={item}>
          Ideas for more elaborate illustrations for the same app's empty and
          404 pages. I wanted to convey the idea of a mistake without feeling
          overly punishing or negative to the user. Additionally, most users
          were creatives or designers so I wanted the illustrations to reflect
          that.
        </motion.p>
        <motion.img src="/illustration3.png" />
        <motion.p>
          Additional sketches for the actual inspect page, with illustrations
          indicating to a new user what that page is for and what they should do
          there.
        </motion.p>
        <motion.img src="/illustration4.png" />
        <motion.p>
          Initial sketches for empty and 404 illustrations for Google Ads
          Creative Studio, an app where creatives can work on an ad campaign.
          Because the audience was creatives, I wanted that reflected in the
          sketches.
        </motion.p>
        <motion.img src="/illustration5.png" />
        <motion.p>
          Hero sketches for Google Ads Creative Studio's onboarding page. I
          wanted to convey a sense of energy and action, getting users to move
          forward with the onboarding process, while associating the feeling of
          being able to do anything with Creative Studio.
        </motion.p>
        <motion.img src="/illustration6.png" />
        <motion.p>
          Final sketch for Creative Studio's hero image. The intention was to
          instill a sense of teamwork in the act of creativity.
        </motion.p>
        <motion.img src="/illustration7.png" style={{ maxWidth: 500 }} />
        <motion.p>
          Iterations on artistic style. Being an internal product, there were
          many directions that I could go with color, level of detail, stroke,
          etc. which I worked with product on.
        </motion.p>
        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: 800,
          }}
        >
          <motion.img
            src="/illustration8_1.png"
            style={{ maxWidth: window.innerWidth > 600 ? 150 : 50 }}
          />
          <motion.img
            src="/product.png"
            style={{ maxWidth: window.innerWidth > 600 ? 150 : 50 }}
          />
          <motion.img
            src="/illustration8_2.png"
            style={{ maxWidth: window.innerWidth > 600 ? 150 : 50 }}
          />
        </motion.div>
        <motion.img src="/illustration9.png" style={{ maxWidth: 400 }} />
        <motion.p style={{ margin: 32 }}>
          Various ideas for empty and 404 state for an internal app that allows
          users to take, upload, and manage screenshots easily. I wanted to make
          the experience not only refined but also fun and light feeling.
        </motion.p>
        <motion.svg
          class="img"
          width="783"
          height="574"
          viewBox="0 0 783 574"
          fill="none"
          style={{ maxWidth: 400, height: 'auto' }}
        >
          <g id="error">
            <g id="ufo">
              <motion.path
                id="Vector"
                d="M503.479 69.1179C451.855 -23.9478 333.564 -22.2391 273.278 69.4597L503.479 69.1179Z"
                fill="#00D6AE"
              />
              <motion.path
                id="Vector_2"
                d="M651.515 137.465C516.585 39.1592 248.891 49.0695 118.292 137.465H651.515Z"
                fill="url(#paint0_linear)"
              />
              <motion.path
                id="Vector_3"
                d="M651.971 138.832C651.971 147.831 553.622 155.349 384.846 155.349C216.07 155.349 117.722 147.945 117.722 138.832C117.722 130.744 216.07 123.795 384.846 123.795C553.622 123.795 651.971 129.719 651.971 138.832Z"
                fill="url(#paint1_linear)"
              />
              <motion.path
                id="Vector_4"
                d="M273.164 69.3457C353.165 58.1824 430.43 57.0433 504.049 69.3457L514.306 79.9395C439.547 68.5483 342.681 69.6875 262.908 80.3951L273.164 69.3457Z"
                fill="#FFBB00"
              />
              <motion.path
                id="Vector_5"
                d="M389.177 139.971C431.66 139.971 466.1 138.441 466.1 136.554C466.1 134.666 431.66 133.136 389.177 133.136C346.693 133.136 312.253 134.666 312.253 136.554C312.253 138.441 346.693 139.971 389.177 139.971Z"
                fill="#00D6AE"
              />
            </g>
            <motion.path
              id="middle-beam"
              opacity="0.2"
              d="M348.948 136.895L144.502 550.736C318.293 562.696 480.915 564.633 625.873 550.736L431.57 136.895"
              fill="url(#paint2_linear)"
            />
            <motion.path
              id="beam-shadow"
              d="M390.886 573.974C606.766 573.974 781.772 564.284 781.772 552.33C781.772 540.377 606.766 530.687 390.886 530.687C175.006 530.687 0 540.377 0 552.33C0 564.284 175.006 573.974 390.886 573.974Z"
              fill="url(#paint3_linear)"
            />
            <g id="artboard">
              <motion.path
                id="Vector_6"
                d="M436.242 304.769C438.408 305.681 440.459 306.706 442.51 307.617C445.017 308.756 446.385 310.237 447.297 312.857C448.664 316.844 448.094 317.186 444.334 315.477C438.294 312.857 432.596 310.465 427.24 308.187C426.898 308.073 426.442 307.845 425.986 307.731C427.126 310.579 428.151 313.313 429.177 315.933C433.052 326.299 435.787 336.437 435.331 346.461C435.217 349.081 433.28 350.106 430.772 349.195C428.151 348.284 427.809 347.714 428.037 344.866C428.379 337.12 427.012 329.146 424.618 321.173C424.049 319.35 424.049 319.35 422.567 318.781C417.439 316.958 412.311 315.249 407.296 313.541C406.955 313.427 406.613 313.313 406.157 313.085C406.157 313.655 406.157 314.11 406.043 314.566C405.701 322.198 404.333 329.83 401.484 337.006C400.801 338.829 399.205 339.512 397.382 339.057C396.698 338.829 396.014 338.715 395.331 338.487C393.507 337.918 392.937 336.551 393.735 334.728C395.217 331.197 396.242 327.552 397.154 323.907C398.18 319.692 398.749 315.249 399.091 310.807C393.393 308.87 387.809 306.934 381.769 304.769C380.744 306.934 379.718 309.098 378.464 311.262C375.387 316.844 371.855 322.312 367.524 327.552C366.384 328.919 365.131 329.26 363.649 328.805C363.194 328.691 362.738 328.463 362.396 328.349C360.345 327.552 360.003 325.501 361.484 323.679C365.131 318.894 368.322 313.996 371.171 308.984C374.59 302.833 377.325 296.568 379.718 290.189C379.832 289.961 379.946 289.733 380.06 289.277C379.604 289.05 379.262 288.936 378.92 288.822C373.336 286.544 367.296 283.924 360.914 281.076C358.407 279.937 357.609 278.342 358.065 275.494C358.863 271.052 359.775 270.596 363.535 272.305C365.131 272.988 366.612 273.672 368.208 274.355C368.322 273.672 368.436 273.102 368.436 272.646C371.285 253.737 374.134 234.828 379.832 217.058C380.744 214.324 382.453 212.957 384.276 213.412C384.732 213.526 385.074 213.754 385.53 213.982C391 217.399 394.875 220.703 398.294 224.006C398.521 224.12 398.635 224.348 398.863 224.576C399.889 222.753 400.687 222.867 401.37 223.778C402.054 224.576 402.738 225.259 403.422 226.057C403.992 224.576 404.561 222.753 405.587 222.411C406.499 222.07 406.841 223.095 407.41 223.664C408.094 224.462 407.638 225.829 406.499 229.246C406.613 229.36 406.727 229.588 406.727 229.702C407.41 230.499 408.094 231.183 408.778 231.866C409.234 232.436 409.576 233.233 409.462 234.714C409.348 235.511 409.462 235.739 409.804 236.081C412.994 239.156 416.755 242.232 421.883 245.535C424.049 246.902 424.96 249.522 424.618 252.712C422.909 270.254 430.203 287.227 436.015 303.516C435.901 303.744 436.129 304.2 436.242 304.769ZM406.043 299.529C406.271 303.289 406.499 306.82 406.385 310.351C411.969 312.288 417.439 314.224 423.251 316.388C422.111 312.743 420.744 309.098 419.376 305.453C419.262 305.111 418.806 304.655 418.465 304.542C415.843 303.402 413.336 302.491 410.715 301.466C409.348 300.783 407.752 300.213 406.043 299.529ZM399.433 307.959C399.661 304.314 399.661 300.783 399.661 297.137C399.547 297.023 399.433 296.91 399.319 296.91C395.444 295.315 391.57 293.834 387.581 292.239C387.125 292.011 386.897 292.239 386.669 292.809C386.1 294.517 385.53 296.226 384.846 297.935C384.276 299.302 383.707 300.783 383.137 302.263C388.721 304.2 394.077 306.022 399.433 307.959Z"
                fill="black"
              />
            </g>
            <g id="project">
              <motion.path
                id="Vector_7"
                d="M307.239 454.677C317.267 435.654 328.777 417.428 340.287 399.202C342.909 394.987 340.287 391.798 336.983 392.937C311.455 405.923 291.056 430.755 263.364 439.299C259.489 440.438 259.603 445.222 263.25 446.134C277.039 449.095 290.487 452.171 303.82 456.727C305.074 457.183 306.327 456.386 307.239 454.677ZM301.655 441.235C298.122 440.096 296.412 439.754 292.766 439.185C290.031 438.729 291.398 431.781 295.045 429.047C301.655 424.149 305.074 421.301 312.367 415.947C315.786 413.441 316.584 418.225 313.507 423.693C310.316 429.389 308.72 432.35 305.871 437.59C304.39 440.21 302.68 441.577 301.655 441.235Z"
                fill="black"
              />
            </g>
            <g id="styleguide">
              <motion.path
                id="Vector_8"
                opacity="0.7"
                d="M360.775 492.496C351.43 501.722 353.937 501.267 344.478 511.861C348.923 511.063 350.746 510.949 354.393 511.063C354.963 514.594 355.191 516.417 355.532 520.062C363.624 511.291 361.231 511.633 375.134 499.9C369.322 496.824 366.245 495.457 360.775 492.496Z"
                fill="black"
              />
              <motion.path
                id="Vector_9"
                d="M362.51 496.027L402.738 558.792C406.157 563.349 409.576 563.349 412.994 559.931L495.502 493.407C495.73 493.293 495.844 493.065 495.958 492.837L496.414 492.04C496.756 491.356 496.756 490.559 496.3 489.876L494.021 486.458C493.565 485.775 493.565 484.864 494.021 484.18C494.705 483.155 495.502 481.56 495.274 480.421C494.932 478.94 476.243 452.513 471.456 445.792C470.773 444.881 471.001 443.741 471.798 443.058L513.508 408.315C514.192 407.745 514.42 406.834 514.192 406.037C513.964 405.239 513.166 404.67 512.368 404.67L452.197 401.48C446.841 401.253 441.485 403.075 437.496 406.72L365.815 470.625C362.168 473.814 360.117 478.485 360.003 483.269L359.889 487.484C360.003 490.559 360.914 493.521 362.51 496.027Z"
                fill="black"
              />
              <motion.path
                id="Vector_10"
                d="M470.089 444.311L509.291 411.391C510.659 410.251 509.861 407.973 508.152 407.973L452.083 405.809C449.348 405.695 447.639 408.657 449.12 410.935L470.089 444.311Z"
                fill="#111111"
              />
              <motion.path
                id="Vector_11"
                d="M449.006 410.707C454.704 408.201 509.405 410.707 513.964 423.237L484.904 465.612"
                fill="#222222"
              />
              <motion.path
                id="Vector_12"
                d="M449.7 411.732C455.626 409.91 512.938 424.49 515.901 437.476L490.146 472.903"
                fill="#333333"
              />
              <motion.path
                id="Vector_13"
                d="M450.006 412.188C456.16 411.277 501.428 422.098 513.622 454.563L493.679 477.687"
                fill="#444444"
              />
              <motion.path
                id="Vector_14"
                d="M450.2 412.441C450.2 412.441 504.847 442.602 503.707 469.941L493.793 477.915C477.952 455.816 464.5 435.974 450.2 412.441Z"
                fill="#555555"
              />
            </g>
            <motion.path
              id="left-beam"
              opacity="0.3"
              d="M352.823 134.389L0.228027 551.533C232.139 566.455 468.721 565.886 709.521 551.533L435.445 134.389"
              fill="url(#paint4_linear)"
            />
            <motion.path
              id="right-beam"
              opacity="0.3"
              d="M429.519 134.389L782.114 551.533C541.884 567.595 301.654 567.595 61.4248 551.533L346.783 134.389"
              fill="url(#paint5_linear)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="118.287"
              y1="102.375"
              x2="651.467"
              y2="102.375"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#C90000" />
              <stop offset="1" stop-color="#FF7C39" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="117.739"
              y1="139.605"
              x2="652.016"
              y2="139.605"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.00126075" stop-color="#930000" />
              <stop offset="0.1278" stop-color="#9E1510" />
              <stop offset="0.3122" stop-color="#AA2C21" />
              <stop offset="0.5093" stop-color="#B23D2E" />
              <stop offset="0.7261" stop-color="#B74736" />
              <stop offset="1" stop-color="#B94A38" />
            </linearGradient>
            <linearGradient
              id="paint2_linear"
              x1="144.461"
              y1="348.688"
              x2="625.8"
              y2="348.688"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00D6AE" />
              <stop offset="1" stop-color="#00D6AE" />
            </linearGradient>
            <linearGradient
              id="paint3_linear"
              x1="0"
              y1="552.325"
              x2="781.772"
              y2="552.325"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00D6AE" />
              <stop offset="1" stop-color="#00D6AE" />
            </linearGradient>
            <linearGradient
              id="paint4_linear"
              x1="354.845"
              y1="562.535"
              x2="354.845"
              y2="134.36"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00D6AE" />
              <stop offset="1" stop-color="white" />
            </linearGradient>
            <linearGradient
              id="paint5_linear"
              x1="421.723"
              y1="134.36"
              x2="421.723"
              y2="563.574"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="#00D6AE" />
            </linearGradient>
          </defs>
        </motion.svg>
        <motion.p style={{ margin: 32 }}>
          Final 404 illustration for an app that had a visual space motif. I
          wanted to convey a sense of fun in the illustration, going with bright
          colors based on the app's main accent color which was orange.
        </motion.p>
        <motion.img
          variants={item}
          src="/illustration.png"
          style={{ boxSizing: 'border-box', padding: 32, background: 'white' }}
        />
        <motion.img
          variants={item}
          src="/illustration11.png"
          style={{
            boxSizing: 'border-box',
            padding: 32,
            background: 'white',
            maxWidth: 500,
            margin: 32,
          }}
        />
        {/* <motion.img src="/illustration10.png" /> */}
        <br />
        <br />
        <br />
      </motion.div>
    </motion.div>
  );
};

export default Product;
