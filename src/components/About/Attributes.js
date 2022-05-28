import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Kebab from '../Kebab';
import Typewriter from '../Typewriter';

const Attribute = ({
  text,
  border,
  bg,
  hoverBorder,
  title,
  children,
  onActivate,
  active,
}) => {
  const [expanded, toggleExpansion] = useState(active === title);

  useEffect(() => {
    toggleExpansion(title === active);
  }, [active]);

  return (
    <div className="m-4">
      <div
        className={`cursor-pointer border-b-4 py-2 px-4 ${hoverBorder} ${
          expanded ? border : ''
        }`}
        onClick={() => {
          toggleExpansion(!expanded);
          onActivate(title);
        }}
      >
        {title}
      </div>
      {expanded && (
        <div
          className={`z-20 ${bg} ${text} absolute py-2 px-3 text-sm mt-2 rounded-md shadow-sm max-w-xs border-2 border-default`}
        >
          <div
            className={`border-8 ${border}`}
            style={{
              width: '0',
              height: '0',
              borderTop: 'none',
              borderRight: '8px solid transparent',
              borderLeft: '8px solid transparent',
              position: 'absolute',
              top: '-8px',
            }}
          >
            &nbsp;
          </div>
          {children}
        </div>
      )}
    </div>
  );
};

Attribute.propTypes = {
  text: PropTypes.string.isRequired,
  border: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  hoverBorder: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  onActivate: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
};

const Attributes = () => {
  const [activeAttribute, setActiveAttribute] = useState('');
  const [visible, toggleVisibility] = useState(false);

  return (
    <>
      <Kebab
        className="cursor-pointer"
        onClick={() => toggleVisibility(!visible)}
        expanded={visible}
        prefix="I am"
        phrases={[
          'creative',
          'curious',
          'determined',
          'dedicated',
          'open & honest',
          'passionate',
        ]}
      />
      <div
        className={`mt-2 items-center justify-center flex-wrap ${
          visible ? 'flex' : 'hidden'
        }`}
      >
        <div className="flex flex-wrap max-w-2xl justify-center mx-auto">
          <Attribute
            title="Code hygiene"
            border="border-pink-700"
            bg="bg-pink-700"
            hoverBorder="hover:border-pink-700"
            text="text-white"
            onActivate={setActiveAttribute}
            active={activeAttribute}
          >
            <p>Good, happy, healthy, clean code.</p>
          </Attribute>
          <Attribute
            title="Consistent"
            border="border-green-700"
            bg="bg-green-700"
            hoverBorder="hover:border-green-700"
            text="text-white"
            onActivate={setActiveAttribute}
            active={activeAttribute}
          >
            <p>Neat and uniform code. Goes beyond coding.</p>
          </Attribute>
          <Attribute
            title="Team player"
            border="border-yellow-500"
            bg="bg-yellow-500"
            hoverBorder="hover:border-yellow-500"
            text="text-white"
            onActivate={setActiveAttribute}
            active={activeAttribute}
          >
            <p>Empathetic and supportive.</p>
          </Attribute>
          <Attribute
            title="Fast feedback"
            border="border-red-700"
            bg="bg-red-700"
            hoverBorder="hover:border-red-700"
            text="text-white"
            onActivate={setActiveAttribute}
            active={activeAttribute}
          >
            <p>
              Enforce hot reload modules, build optimization and streamline
              clunky things that prevent feedback from being fast.
            </p>
          </Attribute>
          <Attribute
            title="Automate"
            border="border-blue-500"
            bg="bg-blue-500"
            hoverBorder="hover:border-blue-500"
            text="text-white"
            onActivate={setActiveAttribute}
            active={activeAttribute}
          >
            <p>
              Automate repetitive, clunky, manual tasks to avoid
              inconsistencies, save time and to keep people sane. Automated
              tests, continuous deployments, scripting stuff, utility
              applications are examples of such things.
            </p>
          </Attribute>
          <Attribute
            title="Simplify"
            border="border-gray-700"
            bg="bg-gray-700"
            hoverBorder="hover:border-gray-700"
            text="text-white"
            onActivate={setActiveAttribute}
            active={activeAttribute}
          >
            <p>
              Design for the future and develop for the now. Build the system to
              be robust, extendable, solid and easy to maintain. Develop only
              the necessary features and complexity that are required now.
            </p>
          </Attribute>
          <Attribute
            title="Grow"
            border="border-pink-500"
            bg="bg-pink-500"
            hoverBorder="hover:border-pink-500"
            text="text-white"
            onActivate={setActiveAttribute}
            active={activeAttribute}
          >
            <p>
              Be a curious sponge. Learn by reading, watching videos, through
              others, doing!
            </p>
          </Attribute>
        </div>
      </div>
    </>
  );
};

export default Attributes;
