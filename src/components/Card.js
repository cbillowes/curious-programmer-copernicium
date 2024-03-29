import React from 'react';
import PropTypes from 'prop-types';
import { FaMicrophoneAlt } from '@react-icons/all-files/fa/FaMicrophoneAlt';
import { GrArticle } from '@react-icons/all-files/gr/GrArticle';
import { GiPublicSpeaker } from '@react-icons/all-files/gi/GiPublicSpeaker';
import { BiCodeAlt } from '@react-icons/all-files/bi/BiCodeAlt';
import Anchor from './Anchor';

const Icon = ({ isEven, type }) => {
  return (
    <div
      className={`icon-in-a-card text-3xl opacity-50 ${
        isEven ? 'float-left mr-3' : 'float-right ml-3'
      }`}
    >
      {type === 'article' ? <GrArticle title="Article" /> : <></>}
      {type === 'podcast' ? <FaMicrophoneAlt title="Podcast" /> : <></>}
      {type === 'talk' ? <GiPublicSpeaker title="Talk" /> : <></>}
      {type === 'project' ? <BiCodeAlt title="Project" /> : <></>}
    </div>
  );
};

Icon.propTypes = {
  isEven: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
};

const Card = ({
  index,
  type,
  link,
  buttonText,
  title,
  blurb,
  image,
  caption,
  ribbon,
  className,
}) => {
  const isEven = index % 2 === 0;

  return (
    <section
      className={`relative mx-auto max-w-[1600px] lg:w-6/12 xl:w-screen md:mt-12 md:mb-16 p-5 flex justify-center flex-col-reverse ${
        isEven ? 'xl:flex-row-reverse' : 'xl:flex-row'
      } ${className}`}
    >
      <div
        className={`border-color-3 border-none xl:border-dashed xl:w-1/4 xl:mx-8 ${
          isEven
            ? 'xl:text-left xl:border-l xl:pl-8'
            : 'xl:text-right xl:border-r xl:pr-8'
        }`}
      >
        <h2 className="text-xl mt-8 xl:mt-0 md:text-2xl leading-loose font-semibold hover:text-color-1">
          {title}
        </h2>
        <div className="leading-loose mb-4">
          <div
            className={`mt-2 text-left ${
              isEven ? 'xl:text-left' : 'xl:text-right'
            }`}
          >
            <Icon isEven={isEven} type={type} />
            {blurb}
          </div>
          {link && (
            <Anchor
              className="rounded-sm bg-color-1 text-color-1-script hover:bg-color-1-alternative px-4 mt-6"
              to={link}
            >
              {buttonText ? buttonText : 'Check it out'}
            </Anchor>
          )}
        </div>
      </div>
      <div className="xl:w-1/4 relative">
        {ribbon}
        <div>
          <div className="bg-color-3" style={{ minHeight: '180px ' }}>
            {image}
          </div>
          <div className="leading-loose mt-1 text-center text-sm">
            {caption}
          </div>
        </div>
      </div>
    </section>
  );
};

Card.propTypes = {
  index: PropTypes.number.isRequired,
  type: PropTypes.string,
  link: PropTypes.string,
  buttonText: PropTypes.string,
  title: PropTypes.node.isRequired,
  blurb: PropTypes.node.isRequired,
  image: PropTypes.node.isRequired,
  caption: PropTypes.node.isRequired,
  ribbon: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const Cards = ({ className, data }) => {
  return (
    data &&
    data.length > 0 &&
    data.map((item, index) => {
      return <Card key={index} {...item} index={index} className={className} />;
    })
  );
};
