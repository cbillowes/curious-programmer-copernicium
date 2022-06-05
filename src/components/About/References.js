import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Kebab from '../Kebab';
import Anchor from '../Anchor';

const References = ({ edges }) => {
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
        <ul>
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

References.propTypes = {
  edges: PropTypes.array.isRequired,
};

export default References;
