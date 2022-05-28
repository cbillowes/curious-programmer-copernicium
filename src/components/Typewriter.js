// https://codesandbox.io/s/react-text-typing-effect-in-infinite-loop-hooks-rycur?file=/src/index.js:439-680
import React from 'react';
import PropTypes from 'prop-types';
// import Typist from "react-typist"

const Typewriter = ({ prefix, count, setCount, phrases, children }) => {
  return <></>;
  // if (phrases && phrases.length > 0) {
  //   return count ? (
  //     <Typist avgTypingDelay={120} onTypingDone={() => setCount(0)}>
  //       {`${prefix} `}
  //       {phrases.map((phrase, index) => (
  //         <span key={index}>
  //           <span>
  //             <span className="font-semibold">{phrase}</span>
  //           </span>
  //           <Typist.Backspace count={phrase.length} delay={800} />
  //         </span>
  //       ))}
  //     </Typist>
  //   ) : (
  //     <></>
  //   )
  // }
  // return children
};

Typewriter.propTypes = {
  prefix: PropTypes.string,
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
  phrases: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
};

export default Typewriter;
