import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Layout } from '../components/Layout';
import { FaLinkedinIn } from 'react-icons/fa/index';
import { ImStackoverflow } from 'react-icons/im/index';
import { VscGithub } from 'react-icons/vsc/index';
import Emoji from '../components/Emoji';
import SocialMediaIcon from '../components/SocialMediaIcon';
import List from '../components/Articles/List';
import Anchor from '../components/Anchor';
import BuyMeCoffee from '../components/Coffee';
import WavingHand from '../components/WavingHand';

const Articles = ({ edges }) => {
  return <List edges={edges} />;
};

const IndexPage = ({ data }) => {
  const { allMarkdownRemark, site } = data;
  const edges = allMarkdownRemark.edges;
  const { title } = site.siteMetadata;

  return (
    <Layout
      meta={{
        ...site.siteMetadata,
        pageTitle: 'A place for a curious mind',
        siteTitle: title,
        route: '/',
      }}
    >
      <div className="relative font-alt-sans">
        <div>
          <StaticImage
            src="../images/profile.jpg"
            alt="I am standing in a star fish pose on top of Mauritius rocks by the sea"
            layout="constrained"
            width={1440}
          />
        </div>
        <div className="hidden opacity-70 bg-default text-welcome absolute right-0 top-0 bottom-0 lg:flex flex-col flex-wrap justify-center items-center w-5/12 lg:w-6/12 xl:w-5/12">
          <div className="mb-5">
            <WavingHand />
          </div>
          <div className="p-2 lg:px-5 lg:py-3">
            <h1 className="text-md lg:text-5xl xl:text-8xl text-center">
              Hello <span className="font-semibold">Clarice</span>
            </h1>
          </div>
          <div className="py-1 lg:px-5 lg:py-3 mt-1">
            <p className="text-sm lg:text-xl xl:text-2xl text-center mb-2">
              I&apos;m a Senior Software Engineer
            </p>
            <p className="text-sm lg:text-xl xl:text-2xl text-center">
              and I work at Cloudsure in Mauritius.
            </p>
          </div>
          <div className="hidden lg:inline-block mt-2 xl:mt-10 text-center lg:text-xl xl:text-2xl">
            <p className="mb-2">I write code. I share code. I love code.</p>
            <p>I am a curious programmer.</p>
          </div>
          <div className="hidden lg:flex mt-12 items-center">
            <Emoji
              className="text-5xl inline mr-4"
              label="South African flag emoji"
            >
              🇿🇦
            </Emoji>
            <Emoji
              className="text-5xl inline mr-4"
              label="Mauritian flag emoji"
            >
              🇲🇺
            </Emoji>
            <Emoji className="text-5xl inline mr-4" label="Island emoji">
              🏝️
            </Emoji>
            <span className="mr-4">
              <StaticImage
                src="../images/clojure.png"
                alt="Clojure(Script)"
                width={48}
              />
            </span>
            <span>
              <StaticImage
                src="../images/cloudsure.png"
                alt="Cloudsure"
                width={48}
              />
            </span>
          </div>
        </div>
        <div>
          <BuyMeCoffee component="header" />
        </div>
      </div>

      <div className="lg:hidden p-4 font-alt-sans">
        <div className="leading-relaxed text-center">
          <p className="text-lg md:text-2xl text-center">
            I&apos;m <span className="font-semibold">Clarice</span> Bouwer, a
            Senior <span className="font-semibold">Software Engineer</span> at
            Cloudsure, Mauritius
          </p>
          <p className="mt-3 text-sm md:text-lg">
            I write code. I share code. I love code.
          </p>
          <p className="mt-1 text-sm md:text-lg">I am a curious programmer.</p>
        </div>
      </div>

      <div className="flex justify-center">
        <SocialMediaIcon
          to="https://www.linkedin.com/in/cbouwer/"
          title="LinkedIn"
        >
          <FaLinkedinIn className="text-linkedin" />
        </SocialMediaIcon>

        <SocialMediaIcon to="https://github.com/cbillowes" title="GitHub">
          <VscGithub className="text-github" />
        </SocialMediaIcon>

        <SocialMediaIcon
          to="https://stackoverflow.com/users/849986/clarice-bouwer"
          title="Stack Overflow"
        >
          <ImStackoverflow className="text-stackoverflow" />
        </SocialMediaIcon>
      </div>

      <div className="bg-default text-default-script">
        <div className="mx-auto pb-16 text-center">
          <Articles edges={edges} />
          <Anchor
            to="/blog"
            title="All articles"
            className="bg-color-1-alternative text-color-1-script rounded py-1 px-3 transform shadow-md hover:bg-color-1"
          >
            Discover more
          </Anchor>
        </div>
      </div>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }).isRequired,

    site: PropTypes.shape({
      siteMetadata: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
};

Articles.propTypes = {
  edges: PropTypes.array.isRequired,
  wordCount: PropTypes.number,
};

export const query = graphql`
  query IndexPageQuery {
    allMarkdownRemark(
      limit: 10
      filter: { fields: { slug: { nin: "/blog/example/" } } }
      sort: { order: DESC, fields: fields___number }
    ) {
      edges {
        node {
          timeToRead
          excerpt(truncate: true, pruneLength: 200, format: PLAIN)
          fields {
            slug
            date(formatString: "LL")
            number
            component
            photo
            credit
            source
            link
          }
          frontmatter {
            title
            tags
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

export default IndexPage;
