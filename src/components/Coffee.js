import React from 'react';
import PropTypes from 'prop-types';
import Anchor from './Anchor';
import { BiCoffeeTogo } from '@react-icons/all-files/bi/BiCoffeeTogo';
import { StaticImage } from 'gatsby-plugin-image';

const title = 'Please buy me a coffee 🙏';

const Footer = () => (
  <StaticImage
    src="../images/buy-me-a-coffee-dark.png"
    alt={title}
    width={150}
  />
);

const Header = () => (
  <StaticImage
    src="../images/buy-me-a-coffee-light.png"
    alt={title}
    width={150}
  />
);

const TopBar = () => (
  <span className="inline-block hover:text-color-2 hover:animate-wiggle animate">
    <BiCoffeeTogo />
  </span>
);

const getClassNames = (component) => {
  switch (component) {
    case 'top-bar': {
      return 'absolute left-4 top-1 text-2xl';
    }
    case 'header': {
      return 'absolute bottom-2 right-2 md:left-2 md:right-auto';
    }
    default: {
      return 'left-2/4 transform -translate-x-1/2 absolute bottom-2 md:left-2 md:bottom-2 md:translate-x-0';
    }
  }
};

const BuyMeCoffee = ({ component }) => {
  const classNames = getClassNames(component);
  return (
    <Anchor
      className={classNames}
      to="https://www.buymeacoffee.com/cbillowes"
      title={title}
    >
      {component === 'header' && <Header />}
      {component === 'top-bar' && <TopBar />}
      {component === 'footer' && <Footer />}
    </Anchor>
  );
};

BuyMeCoffee.propTypes = {
  component: PropTypes.oneOf(['footer', 'header', 'top-bar']).isRequired,
};

export default BuyMeCoffee;
