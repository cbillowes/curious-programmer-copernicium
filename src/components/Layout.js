import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext, toggleColorMode } from '../context/Theme';
import { MdWbSunny } from '@react-icons/all-files/md/MdWbSunny';
import { MdBrightness2 } from '@react-icons/all-files/md/MdBrightness2';
import { FiRss } from '@react-icons/all-files/fi/FiRss';
import Head from '../components/Head';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { SearchIcon } from './Search/icon';
import Search from './Search';
import BuyMeCoffee from './Coffee';
import Anchor from './Anchor';
import { getLCP, getFID, getCLS } from 'web-vitals';

const searchIndices = [{ name: 'Pages', title: 'Pages' }];

const Toggler = ({ colorMode, setColorMode }) => {
  const handleThemeToggle = () => {
    const toggled = toggleColorMode(colorMode);
    setColorMode(toggled);
  };

  return (
    <button
      onClick={handleThemeToggle}
      className="hover:text-color-2 hover:animate-wiggle animate"
    >
      <span className="dark-button" title="Dark mode" aria-label="Dark mode">
        <MdBrightness2 />
      </span>
      <span className="light-button" title="Light mode" aria-label="Light mode">
        <MdWbSunny />
      </span>
    </button>
  );
};

Toggler.propTypes = {
  colorMode: PropTypes.string.isRequired,
  setColorMode: PropTypes.func.isRequired,
};

export const Layout = ({ meta, children }) => {
  const { colorMode, setColorMode } = useContext(ThemeContext);
  const [showSearch, toggleSearchMode] = useState(false);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    getCLS(console.log);
    getFID(console.log);
    getLCP(console.log);
  });

  return (
    <div
      role="button"
      className={`${colorMode} bg-color-1 text-color-1-script m-0 px-0 py-1 ${
        showSearch ? 'overflow-hidden max-h-screen' : 'min-h-screen'
      }`}
      onKeyUp={(e) => {
        if (e.key === 'Escape') {
          toggleSearchMode(!showSearch);
        }
      }}
    >
      <Head {...meta} />
      <div className="fixed top-0 left-0 right-0 z-50">
        <BuyMeCoffee component="top-bar" />
        <div className="text-right text-lg bg-color-1 text-color-1-script">
          <div className="mr-3 pt-1 inline-block">
            <SearchIcon
              show={showSearch}
              toggle={() => toggleSearchMode(!showSearch)}
            />
          </div>
          <div className="mr-4 pt-1 inline-block">
            <Toggler colorMode={colorMode} setColorMode={setColorMode} />
          </div>
          <div className="mr-4 pt-1 inline-block">
            <Anchor to="/rss.xml" forceNewTab={true} title="RSS Feed">
              <FiRss />
            </Anchor>
          </div>
        </div>
        <Navigation layout="fluid" />
      </div>

      {showSearch && (
        <Search
          indices={searchIndices}
          toggle={() => toggleSearchMode(!showSearch)}
        />
      )}

      <main className="pt-16 bg-default text-default-script">{children}</main>
      <Footer
        toggler={<Toggler colorMode={colorMode} setColorMode={setColorMode} />}
      />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  meta: PropTypes.object.isRequired,
};
