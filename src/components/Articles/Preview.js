import React from 'react';
import PropTypes from 'prop-types';
import Anchor from '../Anchor';
import Tags from '../Tags';
import Thumbnail from '../Thumbnail';
import Ribbon from './Ribbon';
import { TbScribble } from 'react-icons/tb';
import { RiArticleLine } from 'react-icons/ri';
import { MdOutlineSchool } from 'react-icons/md';
import { Link } from 'gatsby';
import Metadata from '../Metadata';

const Preview = ({
  index,
  number,
  slug,
  title,
  date,
  timeToRead,
  excerpt,
  tags,
  hero,
  type,
}) => {
  const isEven = index % 2 === 0;
  return (
    <section
      key={index}
      className={`relative mx-auto max-w-[1600px] md:w-6/12 xl:w-screen md:mt-12 md:mb-16 p-5 flex justify-center flex-col-reverse ${
        isEven ? 'xl:flex-row-reverse' : 'xl:flex-row'
      }`}
    >
      <div
        className={`border-color-3 border-none xl:border-dashed xl:w-1/4 xl:mx-8 ${
          isEven
            ? 'xl:text-left xl:border-l xl:pl-8'
            : 'xl:text-right xl:border-r xl:pr-8'
        }`}
      >
        <div
          className={`uppercase mb-1 opacity-40 text-center mt-5 xl:mt-0 ${
            isEven ? 'xl:text-left' : 'xl:text-right'
          }`}
        >
          {type === 'scribbles' && (
            <Link to="/scribbles">
              <TbScribble
                className="inline-block mr-2 bg-color-neutral p-2 text-4xl rounded"
                alt="Scribble"
              />
              {type}
            </Link>
          )}
          {type === 'article' && (
            <Link to="/blog">
              <RiArticleLine
                className="inline-block mr-2 bg-color-neutral p-2 text-4xl rounded"
                alt="Article"
              />
              {type}
            </Link>
          )}
          {type === 'course' && (
            <Link to="/courses">
              <MdOutlineSchool
                className="inline-block mr-2 bg-color-neutral p-2 text-4xl rounded"
                alt="Course"
              />
              {type}
            </Link>
          )}
        </div>
        <h2 className="text-xl mt-8 xl:mt-0 md:text-2xl leading-loose font-semibold hover:text-color-1 font-alt-sans">
          <Anchor to={slug} title={title}>
            {title}
          </Anchor>
        </h2>
        <div className="leading-loose mb-4">
          <Metadata data={date} timeToRead={timeToRead} />
          <p
            className={`mt-2 text-left ${
              isEven ? 'xl:text-left' : 'xl:text-right'
            }`}
          >
            {excerpt}
          </p>
        </div>
        <div
          className={`flex items-center flex-wrap ${
            isEven ? 'xl:flex-row' : 'xl:flex-row-reverse'
          }`}
        >
          <Anchor
            className={`bg-color-1 text-color-1-script rounded py-1 px-3 transform shadow-md hover:bg-color-1-alternative ${
              isEven ? 'xl:mr-2' : 'xl:ml-4'
            }`}
            to={slug}
            title={slug}
          >
            Read more
          </Anchor>
          <Tags tags={tags} redirect={true} />
        </div>
      </div>
      <div className="xl:w-1/4 relative">
        <Ribbon>#{number}</Ribbon>
        <Thumbnail number={number} to={slug} alt={title} {...hero} />
      </div>
    </section>
  );
};

Preview.propTypes = {
  index: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  tags: PropTypes.array,
  image: PropTypes.string.isRequired,
  credit: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Preview;
