import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Kebab from '../Kebab';
import Anchor from '../Anchor';

const References = () => {
  const [visible, toggleVisibility] = useState(false);
  return (
    <>
      <Kebab
        className="cursor-pointer"
        onClick={() => toggleVisibility(!visible)}
        expanded={visible}
      >
        References
      </Kebab>
      <div className={`mx-auto text-center ${visible ? 'block' : 'hidden'}`}>
        <ul className="leading-loose">
          <li>
            - Finding Opportunities in the Mistakes We Make{' '}
            <Anchor
              to="https://www.getabstract.com/en/summary/finding-opportunities-in-the-mistakes-we-make/27996"
              useMarkdownStyles={true}
            >
              getAbstract
            </Anchor>
            . Editorial rating of 8 stars. Innovative and applicable qualities.
          </li>
          <li>
            - How Should Designers Learn To Code? Git, HTML/CSS, Engineering
            Principles (Part 2) by Paul Hanaoka at{' '}
            <Anchor
              to="https://www.smashingmagazine.com/2020/03/designers-code-git-hmtl-css-engineering-principles/"
              useMarkdownStyles={true}
            >
              Smashing Magazine
            </Anchor>
          </li>
          <li>
            - Atomic Commits at{' '}
            <Anchor
              to="https://mattshelley.dev/atomic-commits/"
              useMarkdownStyles={true}
            >
              mattshelley.dev
            </Anchor>
          </li>
        </ul>
      </div>
    </>
  );
};

export default References;
