import React from 'react';
import PropTypes from 'prop-types';
import Anchor from './Anchor';
import BuyMeCoffee from './Coffee';

const Blocks = () => {
  return (
    <div className="w-screen overflow-hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 2048 150"
        height="150px"
      >
        <rect width="2048" height="150" className="fill-current text-default" />
        <path
          className="fill-current text-color-1"
          d="M0 135L0 105L17.3 105L17.3 135L34.59 135L34.59 120L51.94 120L51.94 75L69.23 75L69.23 15L86.53 15L86.53 15L103.83 15L103.83 60L121.17 60L121.17 105L138.47 105L138.47 30L155.77 30L155.77 135L173.06 135L173.06 75L190.41 75L190.41 135L207.7 135L207.7 135L225 135L225 30L242.3 30L242.3 150L259.59 150L259.59 150L276.94 150L276.94 0L294.23 0L294.23 120L311.53 120L311.53 105L328.83 105L328.83 30L346.17 30L346.17 75L363.47 75L363.47 45L380.77 45L380.77 75L398.06 75L398.06 75L415.41 75L415.41 75L432.7 75L432.7 15L450 15L450 75L467.3 75L467.3 75L484.59 75L484.59 75L501.94 75L501.94 135L519.23 135L519.23 90L536.53 90L536.53 105L553.83 105L553.83 75L571.17 75L571.17 150L588.47 150L588.47 0L605.77 0L605.77 30L623.06 30L623.06 135L640.41 135L640.41 105L657.7 105L657.7 105L675 105L675 150L657.7 150L657.7 150L640.41 150L640.41 150L623.06 150L623.06 150L605.77 150L605.77 150L588.47 150L588.47 150L571.17 150L571.17 150L553.83 150L553.83 150L536.53 150L536.53 150L519.23 150L519.23 150L501.94 150L501.94 150L484.59 150L484.59 150L467.3 150L467.3 150L450 150L450 150L432.7 150L432.7 150L415.41 150L415.41 150L398.06 150L398.06 150L380.77 150L380.77 150L363.47 150L363.47 150L346.17 150L346.17 150L328.83 150L328.83 150L311.53 150L311.53 150L294.23 150L294.23 150L276.94 150L276.94 150L259.59 150L259.59 150L242.3 150L242.3 150L225 150L225 150L207.7 150L207.7 150L190.41 150L190.41 150L173.06 150L173.06 150L155.77 150L155.77 150L138.47 150L138.47 150L121.17 150L121.17 150L103.83 150L103.83 150L86.53 150L86.53 150L69.23 150L69.23 150L51.94 150L51.94 150L34.59 150L34.59 150L17.3 150L17.3 150L0 150L0 150L0 135ZM706 135L706 105L723.3 105L723.3 135L740.59 135L740.59 120L757.94 120L757.94 75L775.23 75L775.23 15L792.53 15L792.53 15L809.83 15L809.83 60L827.17 60L827.17 105L844.47 105L844.47 30L861.77 30L861.77 135L879.06 135L879.06 75L896.41 75L896.41 135L913.7 135L913.7 135L931 135L931 30L948.3 30L948.3 150L965.59 150L965.59 150L982.94 150L982.94 0L1000.23 0L1000.23 120L1017.53 120L1017.53 105L1034.83 105L1034.83 30L1052.17 30L1052.17 75L1069.47 75L1069.47 45L1086.77 45L1086.77 75L1104.06 75L1104.06 75L1121.41 75L1121.41 75L1138.7 75L1138.7 15L1156 15L1156 75L1173.3 75L1173.3 75L1190.59 75L1190.59 75L1207.94 75L1207.94 135L1225.23 135L1225.23 90L1242.53 90L1242.53 105L1259.83 105L1259.83 75L1277.17 75L1277.17 150L1294.47 150L1294.47 0L1311.77 0L1311.77 30L1329.06 30L1329.06 135L1346.41 135L1346.41 105L1363.7 105L1363.7 105L1381 105L1381 150L1363.7 150L1363.7 150L1346.41 150L1346.41 150L1329.06 150L1329.06 150L1311.77 150L1311.77 150L1294.47 150L1294.47 150L1277.17 150L1277.17 150L1259.83 150L1259.83 150L1242.53 150L1242.53 150L1225.23 150L1225.23 150L1207.94 150L1207.94 150L1190.59 150L1190.59 150L1173.3 150L1173.3 150L1156 150L1156 150L1138.7 150L1138.7 150L1121.41 150L1121.41 150L1104.06 150L1104.06 150L1086.77 150L1086.77 150L1069.47 150L1069.47 150L1052.17 150L1052.17 150L1034.83 150L1034.83 150L1017.53 150L1017.53 150L1000.23 150L1000.23 150L982.94 150L982.94 150L965.59 150L965.59 150L948.3 150L948.3 150L931 150L931 150L913.7 150L913.7 150L896.41 150L896.41 150L879.06 150L879.06 150L861.77 150L861.77 150L844.47 150L844.47 150L827.17 150L827.17 150L809.83 150L809.83 150L792.53 150L792.53 150L775.23 150L775.23 150L757.94 150L757.94 150L740.59 150L740.59 150L723.3 150L723.3 150L706 150L706 150L706 135ZM1364 135L1364 105L1381.3 105L1381.3 135L1398.59 135L1398.59 120L1415.94 120L1415.94 75L1433.23 75L1433.23 15L1450.53 15L1450.53 15L1467.83 15L1467.83 60L1485.17 60L1485.17 105L1502.47 105L1502.47 30L1519.77 30L1519.77 135L1537.06 135L1537.06 75L1554.41 75L1554.41 135L1571.7 135L1571.7 135L1589 135L1589 30L1606.3 30L1606.3 150L1623.59 150L1623.59 150L1640.94 150L1640.94 0L1658.23 0L1658.23 120L1675.53 120L1675.53 105L1692.83 105L1692.83 30L1710.17 30L1710.17 75L1727.47 75L1727.47 45L1744.77 45L1744.77 75L1762.06 75L1762.06 75L1779.41 75L1779.41 75L1796.7 75L1796.7 15L1814 15L1814 75L1831.3 75L1831.3 75L1848.59 75L1848.59 75L1865.94 75L1865.94 135L1883.23 135L1883.23 90L1900.53 90L1900.53 105L1917.83 105L1917.83 75L1935.17 75L1935.17 150L1952.47 150L1952.47 0L1969.77 0L1969.77 30L1987.06 30L1987.06 135L2004.41 135L2004.41 105L2021.7 105L2021.7 105L2039 105L2039 150L2021.7 150L2021.7 150L2004.41 150L2004.41 150L1987.06 150L1987.06 150L1969.77 150L1969.77 150L1952.47 150L1952.47 150L1935.17 150L1935.17 150L1917.83 150L1917.83 150L1900.53 150L1900.53 150L1883.23 150L1883.23 150L1865.94 150L1865.94 150L1848.59 150L1848.59 150L1831.3 150L1831.3 150L1814 150L1814 150L1796.7 150L1796.7 150L1779.41 150L1779.41 150L1762.06 150L1762.06 150L1744.77 150L1744.77 150L1727.47 150L1727.47 150L1710.17 150L1710.17 150L1692.83 150L1692.83 150L1675.53 150L1675.53 150L1658.23 150L1658.23 150L1640.94 150L1640.94 150L1623.59 150L1623.59 150L1606.3 150L1606.3 150L1589 150L1589 150L1571.7 150L1571.7 150L1554.41 150L1554.41 150L1537.06 150L1537.06 150L1519.77 150L1519.77 150L1502.47 150L1502.47 150L1485.17 150L1485.17 150L1467.83 150L1467.83 150L1450.53 150L1450.53 150L1433.23 150L1433.23 150L1415.94 150L1415.94 150L1398.59 150L1398.59 150L1381.3 150L1381.3 150L1364 150L1364 150L1364 135Z"
        />
      </svg>
    </div>
  );
};

const TopAnchor = (props) => (
  <Anchor
    {...props}
    newTabIndicator={true}
    className="text-footer-link-1 font-semibold hover:text-footer-link-2"
  />
);

const BottomAnchor = (props) => (
  <Anchor
    {...props}
    newTabIndicator={true}
    className="inline-block mt-3 mr-3 py-2 px-4 md:py-1 md:px-3 text-sm rounded text-inverse bg-inverse-script hover:bg-color-3 hover:text-color-3-script"
  />
);

const Footer = ({ toggler }) => (
  <footer className="relative print:hidden">
    <Blocks />
    <div className="mx-auto md:max-w-screen-md md:flex md:flex-row-reverse md:justify-between md:align-baseline py-12 leading-loose font-alt-sans">
      <div className="absolute right-2 pt-1 md:relative">{toggler}</div>
      <div className="px-8 pb-10">
        <p>
          Copyright &copy; {new Date().getFullYear()}. Curious Programmer. A
          curious place for a curious mind.
        </p>
        <div>
          Built with{' '}
          <TopAnchor to="https://www.gatsbyjs.org/" title="Gatsby">
            Gatsby
          </TopAnchor>{' '}
          and other cool stuff.
          {/* <TopAnchor to="/credits" title="Credits">
            cool stuff
          </TopAnchor> */}
          .
        </div>
        <div className="md:flex align-bottom justify-start">
          {/* <BottomAnchor to="/about" title="About Clarice Bouwer">
            About me
          </BottomAnchor> */}
          <BottomAnchor to="/privacy" title="Privacy policy">
            Privacy policy
          </BottomAnchor>
          <BottomAnchor to="/community" title="Community guidelines">
            Community guidelines
          </BottomAnchor>
          <BottomAnchor to="/about" title="More about me">
            About me
          </BottomAnchor>
          <BottomAnchor
            to="https://github.com/cbillowes/curious-programmer-titanium"
            title="Source code on GitHub"
          >
            Source code
          </BottomAnchor>
          <BottomAnchor
            to="https://react-icons.github.io/react-icons/"
            title="Icons from react-icons"
          >
            Icons
          </BottomAnchor>
        </div>
      </div>
    </div>
    <span className="">
      <BuyMeCoffee component="footer" />
    </span>
  </footer>
);

Footer.propTypes = {
  toggler: PropTypes.node,
};

export default Footer;
