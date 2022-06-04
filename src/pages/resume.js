import React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';
import Anchor from '../components/Anchor';
import Logos from '../components/Logos';
import ResumeDates from '../components/ResumeDates';

const Timeline = ({ allMarkdownRemark }) => {
  return allMarkdownRemark.edges.map(({ node }, index) => {
    const { excerpt, frontmatter } = node;
    const { slug, resume } = frontmatter;
    const { company, jobTitle, type, location, start, end, tech, summary } =
      resume;
    const Image = Logos[slug] || Logos['default'];
    const isEven = index % 2 === 0;
    return (
      <section
        key={index}
        className={`relative mx-auto lg:w-6/12 xl:w-screen md:mt-12 md:mb-16 p-5 flex justify-center flex-col-reverse ${
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
          <h2 className="text-xl mt-8 xl:mt-0 md:text-2xl leading-loose font-semibold hover:text-color-1 font-alt-sans">
            <Anchor to={slug} title={`${jobTitle} at ${company}`}>
              <span className="text-color-3">{jobTitle}</span> at{' '}
              <span className="text-color-1-alternative">{company}</span>
            </Anchor>
          </h2>
          <div className="leading-loose mb-4">
            <div className="font-bold">
              {location} &middot; {type} &middot;{' '}
              <ResumeDates start={start} end={end} />
            </div>
            <p
              className={`mt-2 text-left ${
                isEven ? 'xl:text-left' : 'xl:text-right'
              }`}
            >
              {summary || excerpt}
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
              to={`/resume/${slug}`}
              title={company}
              forceNewTab={false}
            >
              Read more
            </Anchor>
          </div>
        </div>
        <div
          className={`xl:w-1/4 relative flex justify-center ${
            isEven ? 'xl:justify-end xl:text-right' : 'xl:justify-start'
          }`}
        >
          <div>
            <div className={`w-48 pr-3 pt-3`}>
              <Image />
            </div>
            <div className="w-48 pr-3 pt-3 text-center">
              {tech.map((t, i) => (
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
    <div className="text-center">
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
      <h2 className="text-xl mt-2 md:text-xl leading-loose font-alt-sans">
        Senior Software Engineer
      </h2>
      <p className="mt-2">Remote &middot; Mauritius</p>
    </div>
  );
};

const CoverLetter = () => {
  return (
    <div className="text-center max-w-4xl mx-auto m-4 leading-loose">
      <p>
        I have been a professional web developer for{' '}
        {new Date().getFullYear() - 2006} years. I am curious, a fast learner,
        team player, problem solver and a strong believer in keeping honest
        communication channels open at all times. Find out more{' '}
        <Anchor useMarkdownStyles={true} to="/about">
          about me
        </Anchor>
        .
      </p>
    </div>
  );
};

const Testimonial = ({ name, title, photoUrl, date, children }) => {
  return (
    <div>
      <div className="m-2 p-6 w-96 bg-color-neutral text-color-neutral-script">
        {photoUrl && (
          <img
            width="48"
            height="48"
            src={photoUrl}
            alt={`${name}'s profile picture`}
            className="rounded-full float-left mr-4"
          />
        )}
        <div>
          <h1 className="font-bold text-2xl">{name}</h1>
          <h2 className="text-xl">{title}</h2>
          <p className="text-sm mb-5">{date}</p>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="m-10 flex overflow-scroll">
      <Testimonial
        name="John Gillespie"
        title="Certified Scrum Master and IT Professional"
        photoUrl="https://media-exp2.licdn.com/dms/image/C4D03AQEz1Wxl8Cmryg/profile-displayphoto-shrink_100_100/0/1633416761122?e=1659571200&v=beta&t=EzLQ7XPOIgALhfgciifvF63pYELmdObJWho_zKH-rWk"
        date="March 20, 2018, John worked with Clarice on the same team"
      >
        <p>
          I have had the distinct pleasure of working alongside Clarice for a
          number of years now. During this time I have come to know her as an
          upstanding individual, and an invaluable member of the team.
        </p>
        <p>
          Clarice always strives to perform tasks to the best of her abilities,
          often going far beyond what the original expectation was in an effort
          to permanently solve any problems she might uncover. A competent
          developer, she is able to take initiative when the situation calls for
          it but also knows when to stand back and ask for direction from other
          sources.
        </p>
        <p>
          Clarice is extremely knowledgeable, and shows an eagerness to learn
          and grow in new fields as well as in her current field of expertise. I
          believe Clarice is an asset to any organization she works for.
        </p>
      </Testimonial>

      <Testimonial
        name="David Sieff"
        photoUrl="https://media-exp2.licdn.com/dms/image/C5603AQG6wXE58695Wg/profile-displayphoto-shrink_100_100/0/1586347153269?e=1659571200&v=beta&t=Y4leLPfqbOnuPdQzt7xvtsvaqeIALOg4wVv3K0TaKhE"
        date="May 23, 2012, David was Clarice’s client"
      >
        <p>
          I had the pleasure of working with Clarice on a critical transactional
          web portal, which she helped develop and gave us the flexibility to
          make changes as we stepped through the various milestones until
          completion. She is dedicated, hard working and has very good attention
          to detail along with creativity to work around challenges and provide
          a viable alternative.
        </p>
      </Testimonial>

      <Testimonial
        name="Amory Somers Vine"
        title="Head of Client Experience, Head of Market Insight"
        photoUrl="https://media-exp2.licdn.com/dms/image/C4D03AQFhFyOTyGJYEQ/profile-displayphoto-shrink_100_100/0/1647250723824?e=1659571200&v=beta&t=iTldA9Ap4ER3XfHyI8OlNyDeoRgeDMX5S33ClQI2-bg"
        date="April 18, 2012, Amory was Clarice’s client"
      >
        <p>
          Clarice is a fantastic asset to have on your team. Her commitment to
          delivery and her attention to detail are remarkable!
        </p>
      </Testimonial>

      <Testimonial
        name="Maneesh Chiba"
        title="Team Lead at Higher Logic"
        photoUrl="https://media-exp2.licdn.com/dms/image/C4E03AQE_eaZ6ssPSkg/profile-displayphoto-shrink_100_100/0/1618972963412?e=1659571200&v=beta&t=hYM01gI1cbVaPAKI84r-Q6tV8YfpLAL2eRUoJrrDf_k"
        date="March 7, 2018, Maneesh worked with Clarice on the same team"
      >
        <p>
          I worked with Clarice during my time at DStv Digital Media across two
          scrum teams. Clarice has an exceptional knowledge and experience with
          real world implementations across various web,app and software
          solutions.
        </p>
        <p>
          She is constantly refining her skills which results in code that is
          not only well written, but also compliant with industry standards as
          well the those of the project team or company. She is unfliching in
          exploring outside of her defined realms and questions intelligently
          which makes her a huge asset on any team.
        </p>
        <p>
          In addition to her excellent software development skills, Clarice is a
          real team player, highly efficient and an all round pleasure to be
          around. I would personally jump at the opportunity to work with her
          again and highly recommend her to anyone.
        </p>
      </Testimonial>

      <Testimonial
        name="Suzaan Hepburn"
        title="Scrum Master at Momentum"
        date="March 8, 2018, Suzaan worked with Clarice on the same team"
      >
        <p>
          Clarice is a thinking developer, she is able to take the lead and
          follow as needed, and this ability makes her a valuable asset in any
          team. I was the Scrum Master and we worked together on the DStv Now
          project. She was the developer always looking for the ways to
          integrate the best innovation and technical solutions while ensuring
          it’s still customer centric. Clarice was always looking for ways of
          increasing agility in our delivery and ensuring quality is built into
          the product. As a colleague Clarice is always striving to create
          mindfulness in her work and also in her relationships. I am happy with
          the work she did as part of the DStv Now project and give her my full
          recommendation.
        </p>
      </Testimonial>
    </div>
  );
};

const ResumePage = ({ data }) => {
  const { site, allMarkdownRemark } = data;
  const { title } = site.siteMetadata;

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
        <Timeline allMarkdownRemark={allMarkdownRemark} />
        <Testimonials />
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
