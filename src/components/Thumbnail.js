import React from 'react';
import PropTypes from 'prop-types';
import Anchor from './Anchor';
import DownloadLogo from '../images/svgs/download.svg';
import UnsplashLogo from '../images/svgs/unsplash.svg';
import ComponentIndex from '../components/Images';

const getCreditTitle = (source, attribute) => {
  if (!source && !attribute) return '';

  if (source && source.toLowerCase() === 'unsplash') {
    return `Download free do whatever you want high-resolution photos from ${attribute}`;
  }

  if (!attribute) {
    return `Image from ${source}`;
  }

  if (source) {
    return `Image by ${attribute} @ ${source}`;
  }

  return `Image by ${attribute}`;
};

const Credit = ({ source, link, text }) => {
  if (!source) return <span></span>;
  return (
    <Anchor
      to={link}
      title={getCreditTitle(source, text)}
      className="bg-black text-gray-300 py-1 px-2 pl-6 rounded absolute bottom-2 left-2 text-sm"
    >
      <img
        alt={source}
        className="filter invert w-3 absolute left-2 top-2"
        src={source === 'unsplash' ? UnsplashLogo : DownloadLogo}
      />
      {source}
    </Anchor>
  );
};

Credit.propTypes = {
  componentName: PropTypes.string,
  source: PropTypes.string,
  link: PropTypes.string,
  text: PropTypes.string,
};

const ExternalThumbnail = ({ to, alt, src }) => {
  return (
    <Anchor to={to} title={alt} className="flex">
      <img alt={alt} src={src} width={450} />
    </Anchor>
  );
};

const Thumbnail = ({
  alt = '',
  to,
  image,
  credit,
  source,
  link,
  component,
}) => {
  if (component === 'url')
    return <ExternalThumbnail to={link} alt={alt} src={image} title={alt} />;

  const Image = ComponentIndex[component];
  return (
    <div className="relative text-center lg:max-w-[600px] mx-auto">
      <Anchor to={to} isBlock>
        {Image && (
          <Image
            className="shadow-md transform w-full"
            alt={alt}
            title={alt}
            width={800}
          />
        )}
      </Anchor>
      <Credit
        componentName={component}
        source={source}
        link={link}
        text={credit}
      />
    </div>
  );
};

Thumbnail.propTypes = {
  alt: PropTypes.string,
  to: PropTypes.string,
  image: PropTypes.string,
  credit: PropTypes.string,
  source: PropTypes.string,
  link: PropTypes.string,
  component: PropTypes.string,
};

export default Thumbnail;
