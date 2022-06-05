import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';
import Anchor from '../components/Anchor';
import ResumeDates from '../components/ResumeDates';
import ResumeIcon from '../components/ResumeIcon';

const getLogo = (logo) => {
  try {
    return require(`../images/logos/${logo}`).default;
  } catch (e) {
    return '';
  }
};

const Timeline = ({
  allMarkdownRemark,
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
        className="relative mx-auto lg:w-6/12 xl:w-screen md:mt-12 md:mb-16 p-5 flex justify-center flex-col-reverse xl:flex-row"
      >
        <div className="absolute text-2xl top-1/2 transform -translate-y-1/2 bg-color-1 text-color-1-script rounded-full p-2">
          <ResumeIcon category={category} />
        </div>
        <div className="border-color-3 border-none xl:border-dashed xl:w-1/4 xl:mx-8 xl:text-right xl:border-r xl:pr-8">
          {company && (
            <h2 className="text-xl mt-8 xl:mt-0 md:text-2xl leading-loose font-semibold hover:text-color-1 font-alt-sans">
              <Anchor
                to={`/resume/${slug}`}
                title={`${jobTitle} at ${company}`}
              >
                <span className="text-color-3">{jobTitle}</span> at{' '}
                <span className="text-color-1-alternative">{company}</span>
              </Anchor>
            </h2>
          )}
          {name && (
            <h2 className="text-xl mt-8 xl:mt-0 md:text-2xl leading-loose font-semibold hover:text-color-1 font-alt-sans">
              <Anchor to={`/resume/${slug}`} title={name}>
                {name}
              </Anchor>
            </h2>
          )}
          <div className="leading-loose mb-4">
            {(category === 'Career' || category === 'Education') && (
              <div className="font-bold">
                {location} &middot; {type} &middot;
                <br />
                <ResumeDates start={start} end={end} />
              </div>
            )}
            {category === 'Testimonial' && (
              <>
                <h3 className="font-bold">{jobTitle}</h3>
                <p>{description}</p>
              </>
            )}
            <p className="mt-2 text-right">{summary || excerpt}</p>
          </div>
          <div className="flex items-center flex-wrap xl:flex-row-reverse">
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
        <div className="xl:w-1/4 relative flex items-center justify-center xl:justify-start xl:text-right">
          <div className="text-center">
            <div className="w-48 pr-3 pt-3">
              {logo && (
                <img
                  src={getLogo(logo)}
                  className={`mx-auto ${
                    category === 'Testimonial' ? 'rounded-full' : ''
                  }`}
                />
              )}
            </div>
            <div className="w-48 pr-3 pt-3 text-center">
              {tech &&
                tech.map((t, i) => (
                  <>
                    <span className="text-neutral">{t}</span> &middot;{' '}
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
    <div className="text-center mb-6">
      <p className="text-right pr-6">2022-06-04</p>
      <div className="w-44 mx-auto">
        <StaticImage
          src="../../images/avatar.png"
          alt="A photo of Clarice Bouwer on a windy day at the beach"
          width={dimensions}
          height={dimensions}
          className="rounded-full shadow-md border-8 border-color-1"
        />
      </div>
      <h1 className="text-xl mt-4 md:text-4xl leading-loose font-semibold font-alt-sans">
        Clarice Bouwer
      </h1>
      <h2 className="text-xl mt-2 md:text-xl leading-loose font-alt-sans font-bold">
        Senior Software Engineer
      </h2>
      <p className="mt-2">
        Remote &middot; Mauritius &middot; clarice@bouwer.dev &middot;
        curiousprogrammer.dev
      </p>
    </div>
  );
};

const CoverLetter = () => {
  return (
    <div className="text-center max-w-5xl mx-auto m-4 leading-loose">
      <p className="mb-4">
        I have been a professional web developer for{' '}
        {new Date().getFullYear() - 2006} years although the story goes way back
        in high school already. I am curious, a fast learner, team player,
        problem solver and a firm believer in keeping open honest communication
        channels open at all times.
      </p>
      <p>
        I drive to write developer-friendly code for user-friendly systems. I
        relish in learning new things and solving problems, collecting e-books,
        reading, watching Anime, listening to punk rock music, blogging and
        pushing myself outside my comfort zone. Find out more{' '}
        <Anchor useMarkdownStyles={true} to="/about">
          about me
        </Anchor>
        .
      </p>
    </div>
  );
};

const Button = ({ on, onClick, className = '', children }) => {
  return (
    <button
      className={`bg-color-${on ? '1' : 'neutral'} text-color-${
        on ? '1' : 'neutral'
      }-script py-1 px-4 m-1 rounded-md ${className}`}
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
      <div className="pt-16 pb-16">
        <Meta />
        <CoverLetter />
        <div className="text-center max-w-4xl mx-auto m-4 leading-loose">
          <Button
            on={education}
            onClick={() => toggle(setEducation, !education)}
          >
            Education
          </Button>
          <Button on={career} onClick={() => toggle(setCareer, !career)}>
            Career
          </Button>
          <Button
            on={testimonials}
            onClick={() => toggle(setTestimonials, !testimonials)}
          >
            Testimonials
          </Button>
          <Button on={podcasts} onClick={() => toggle(setPodcasts, !podcasts)}>
            Podcasts
          </Button>
          <Button
            on={publications}
            onClick={() => toggle(setPublications, !publications)}
          >
            Publications
          </Button>
        </div>
        <Timeline
          allMarkdownRemark={allMarkdownRemark}
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
          excerpt(truncate: true, pruneLength: 200, format: PLAIN)
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
