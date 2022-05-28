import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Kebab from '../Kebab';
import Anchor from '../Anchor';
import List from '../Articles/List';

const Articles = ({ edges }) => {
  const [visible, toggleVisibility] = useState(false);
  return (
    <>
      <Kebab
        className="cursor-pointer"
        onClick={() => toggleVisibility(!visible)}
        expanded={visible}
      >
        Featured articles
      </Kebab>
      <div className={`mx-auto text-center ${visible ? 'block' : 'hidden'}`}>
        <List edges={edges} />
        <Anchor
          to="/blog"
          title="All articles"
          className="bg-color-1-alternative text-color-1-script rounded py-1 px-3 transform shadow-md hover:bg-color-1"
        >
          Discover more
        </Anchor>
      </div>
    </>
  );
};

Articles.propTypes = {
  edges: PropTypes.array.isRequired,
};

export default Articles;
