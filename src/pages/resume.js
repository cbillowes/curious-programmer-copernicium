import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';
import Anchor from '../components/Anchor';
import ResumeDates from '../components/ResumeDates';
import ResumeIcon from '../components/ResumeIcon';
import {
  FaApple,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLinux,
  FaPrint,
  FaSpider,
  FaWindows,
} from 'react-icons/fa';
import '../styles/print.scss';

const getLogo = (logo) => {
  try {
    return require(`../images/logos/${logo}`).default;
  } catch (e) {
    return '';
  }
};

const Timeline = ({
  allMarkdownRemark,
  color,
  showEducation,
  showCareer,
  showTestimonials,
  showPodcasts,
  showPublications,
}) => {
  return allMarkdownRemark.edges.map(({ node }, index) => {
    const { excerpt, frontmatter } = node;
    const { slug, resume } = frontmatter;
    const {
      name,
      description,
      category,
      logo,
      company,
      jobTitle,
      type,
      location,
      start,
      end,
      tech,
      summary,
      os,
    } = resume;
    if (
      `${showEducation ? 'Education' : ''}|
       ${showCareer ? 'Career' : ''}|
       ${showPodcasts ? 'Podcast' : ''}|
       ${showPublications ? 'Publication' : ''}|
       ${showTestimonials ? 'Testimonial' : ''}`.indexOf(category) === -1
    )
      return <></>;

    return (
      <section
        key={index}
        className="relative mx-auto max-w-[1600px] lg:w-6/12 xl:w-screen md:mt-3 md:mb-3 p-5 flex justify-center flex-col-reverse xl:flex-row print:px-0 print:py-2"
      >
        <div
          className={`absolute text-2xl top-1/2 transform -translate-y-1/2 rounded-full p-2 ${color[category].button} hidden xl:block`}
        >
          <ResumeIcon category={category} />
        </div>
        <div className="border-color-3 border-none xl:border-dashed xl:w-1/4 xl:mx-8 xl:text-right xl:border-r xl:pr-8">
          {company && (
            <h2 className="text-xl mt-2 xl:mt-0 md:text-2xl leading-loose font-semibold font-alt-sans print:mt-0 print:text-sm">
              <ResumeIcon
                category={category}
                className={`text-4xl rounded-full p-2 mr-1 ${color[category].button} inline xl:hidden`}
              />
              <Anchor
                to={`/resume/${slug}`}
                title={`${jobTitle} at ${company}`}
              >
                <span className={color[category].heading}>{jobTitle}</span> at{' '}
                <span>{company}</span>
              </Anchor>
            </h2>
          )}
          {name && (
            <>
              <h2
                className={`text-xl mt-2 xl:mt-0 md:text-2xl leading-loose font-semibold font-alt-sans print:mt-0 print:text-sm ${color[category].heading}`}
              >
                <ResumeIcon
                  category={category}
                  className={`text-4xl rounded-full p-2 mr-1 ${color[category].button} inline xl:hidden`}
                />
                <Anchor to={`/resume/${slug}`} title={name}>
                  {name}
                </Anchor>
              </h2>
              <h3 className="font-semibold font-alt-sans">{jobTitle}</h3>
            </>
          )}
          <div className="leading-loose mb-4 print:text-sm print:mb-0">
            {(category === 'Career' || category === 'Education') && (
              <div className="font-bold">
                {location} &middot; {type} &middot;
                <span className="pl-1 text-neutral">
                  {os === 'windows' && <FaWindows className="inline" />}
                  {os === 'macOS' && <FaApple className="inline" />}
                  {os === 'linux' && <FaLinux className="inline" />}
                </span>
                <br />
                <ResumeDates start={start} end={end} />
              </div>
            )}
            {category === 'Testimonial' && (
              <>
                <h4 className="font-bold">{description}</h4>
              </>
            )}
            <div className="hidden print:block text-xs text-gray-600">
              {tech &&
                tech.map((t, i) => (
                  <>
                    <span className="text-neutral">{t}</span>
                    {i < tech.length - 1 && <> &middot; </>}
                  </>
                ))}
            </div>
            <p className="mt-2 xl:text-right print:text-sm print:text-left">
              {summary || excerpt}
            </p>
          </div>
          <div className="flex items-center flex-wrap xl:flex-row-reverse print:hidden">
            <Anchor
              className="bg-color-1 text-color-1-script rounded py-1 px-3 transform shadow-md hover:bg-color-1-alternative xl:mr-2"
              to={`/resume/${slug}`}
              title={company}
              forceNewTab={false}
            >
              Read more
            </Anchor>
          </div>
        </div>
        <div className="hidden xl:flex xl:w-1/4 relative items-center justify-center xl:justify-start xl:text-right print:hidden">
          <div className="text-center">
            <div className="w-20 xl:w-48 pr-3 pt-3">
              {logo && (
                <img
                  src={getLogo(logo)}
                  alt={company || name}
                  className={`mx-auto ${
                    category === 'Testimonial' ? 'rounded-full' : ''
                  }`}
                />
              )}
            </div>
            <div className="w-full xl:w-48 pr-3 pt-3 text-center print:hidden">
              {tech &&
                tech.map((t, i) => (
                  <>
                    <span className="text-neutral">{t}</span>
                    {i < tech.length - 1 && <> &middot; </>}
                  </>
                ))}
            </div>
          </div>
        </div>
      </section>
    );
  });
};

const Meta = () => {
  const dimensions = 300;
  return (
    <div className="text-center mb-6 print:text-left">
      <p className="text-right hidden print:block print:text-sm">2022-06-04</p>
      <div className="w-44 mx-auto print:w-20 print:float-right">
        <StaticImage
          src="../../images/avatar.png"
          alt="A photo of Clarice Bouwer holding her head in a pose"
          width={dimensions}
          height={dimensions}
          className="rounded-full shadow-md print:border-0"
        />
      </div>
      <div className="hidden print:block print:text-2xl font-semibold">
        Resume
      </div>
      <h1 className="text-xl mt-4 md:text-4xl leading-loose font-semibold font-alt-sans print:text-sm print:mt-1">
        Clarice Bouwer
      </h1>
      <h2 className="text-xl mt-2 md:text-xl leading-loose font-alt-sans font-bold print:mt-0 print:text-sm">
        Senior Software Engineer
      </h2>
      <p className="px-6 mt-2 leading-loose print:text-sm print:mt-0">
        <Anchor to="mailto:clarice@bouwer.dev" title="Email address">
          <FaEnvelope className="inline" /> clarice@bouwer.dev
        </Anchor>{' '}
        &middot;{' '}
        <Anchor
          to="https://curiousprogrammer.dev"
          title="Curious Programmer website"
        >
          <FaSpider className="inline" /> curiousprogrammer.dev
        </Anchor>{' '}
        &middot;{' '}
        <Anchor to="https://github.com/cbillowes" title="GitHub profile">
          <FaGithub className="inline" /> github.com/cbillowes
        </Anchor>
        &middot;{' '}
        <Anchor
          to="https://www.linkedin.com/in/cbouwer/"
          title="LinkedIn profile"
        >
          <FaLinkedin className="inline" /> linkedin.com/in/cbouwer
        </Anchor>{' '}
        <br />
        Remote &middot; Mauritius
      </p>
    </div>
  );
};

const CoverLetter = () => {
  return (
    <div className="px-6 text-center max-w-5xl mx-auto m-4 leading-loose print:text-left print:text-sm">
      <p className="mb-4">
        Going on {new Date().getFullYear() - 2006} years now, I professionally
        strive to develop aesthetically pleasing, user (and developer)-friendly
        web products with powerful features. I am at my best when working across
        different competencies within a team. I am curious, I think about the
        bigger picture which makes me empathetic and helps me make well-informed
        decisions. I work well with others forming a safe cohesive environment.
        I value keeping people in the loop through open honest communication.
      </p>
      <p className="mb-4">
        I thrive in a collaborative - people first - culture. An atmosphere rich
        in constructive conversations, intrinsic willingness to help each other,
        pair/mob programming, code reviews, mentoring and the desire to
        continuously improve.
      </p>
      <p>
        Coding, learning, solving problems, collecting e-books, reading, anime,
        music and breaking free from my comfort zone keeps me ticking.{' '}
        <span className="print:hidden">
          Find out more{' '}
          <Anchor useMarkdownStyles={true} to="/about">
            about me
          </Anchor>
          .
        </span>
      </p>
    </div>
  );
};

const Button = ({
  color = 'bg-neutral',
  onClick,
  className = '',
  children,
}) => {
  return (
    <button
      className={`${color} py-1 px-4 m-1 rounded-md ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const ResumePage = ({ data }) => {
  const { site, allMarkdownRemark } = data;
  const { title } = site.siteMetadata;
  const [education, setEducation] = useState(true);
  const [career, setCareer] = useState(true);
  const [testimonials, setTestimonials] = useState(true);
  const [podcasts, setPodcasts] = useState(true);
  const [publications, setPublications] = useState(true);

  const color = {
    Education: {
      button: 'bg-pink-500 text-white',
      heading: 'text-pink-500',
    },
    Career: {
      button: 'bg-orange-500 text-white',
      heading: 'text-orange-500',
    },
    Testimonial: {
      button: 'bg-green-500 text-white',
      heading: 'text-green-500',
    },
    Podcast: {
      button: 'bg-blue-500 text-white',
      heading: 'text-blue-500',
    },
    Publication: {
      button: 'bg-yellow-500 text-white',
      heading: 'text-yellow-500',
    },
  };

  const toggle = (onToggle, value) => {
    if (education && career && testimonials && podcasts && publications) {
      setEducation(false);
      setCareer(false);
      setTestimonials(false);
      setPodcasts(false);
      setPublications(false);
      onToggle(true);
    } else {
      onToggle && onToggle(value);
    }
  };

  return (
    <Layout
      meta={{
        ...site.siteMetadata,
        pageTitle: 'My name is Clarice Bouwer',
        siteTitle: title,
        route: '/about',
      }}
    >
      <div className="pt-16 pb-16 print:pt-2">
        <Meta />
        <CoverLetter />
        <div className="text-center max-w-4xl mx-auto m-4 leading-loose print:hidden">
          <Button
            color={education ? color['Education'].button : ''}
            onClick={() => toggle(setEducation, !education)}
          >
            Education
          </Button>
          <Button
            color={career ? color['Career'].button : ''}
            onClick={() => toggle(setCareer, !career)}
          >
            Career
          </Button>
          <Button
            color={testimonials ? color['Testimonial'].button : ''}
            onClick={() => toggle(setTestimonials, !testimonials)}
          >
            Testimonials
          </Button>
          <Button
            color={podcasts ? color['Podcast'].button : ''}
            onClick={() => toggle(setPodcasts, !podcasts)}
          >
            Podcasts
          </Button>
          <Button
            color={publications ? color['Publication'].button : ''}
            onClick={() => toggle(setPublications, !publications)}
          >
            Publications
          </Button>
          <Button color="bg-black text-white" onClick={() => window.print()}>
            <FaPrint className="inline" />
          </Button>
        </div>
        <Timeline
          allMarkdownRemark={allMarkdownRemark}
          color={color}
          showEducation={education}
          showCareer={career}
          showTestimonials={testimonials}
          showPodcasts={podcasts}
          showPublications={publications}
        />
      </div>
    </Layout>
  );
};

ResumePage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  query ResumePageQuery {
    allMarkdownRemark(
      filter: { fields: { type: { eq: "resume" } } }
      sort: { fields: frontmatter___resume___start, order: DESC }
    ) {
      edges {
        node {
          timeToRead
          excerpt(truncate: true, pruneLength: 1000, format: PLAIN)
          frontmatter {
            slug
            title
            tags
            resume {
              category
              company
              start
              end
              jobTitle
              location
              logo
              tech
              type
              website
              summary
              name
              description
              os
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        author {
          name
          url
          twitter
        }
        brand
        description
        keywords
        lang
        title
        url
      }
    }
  }
`;

export default ResumePage;
