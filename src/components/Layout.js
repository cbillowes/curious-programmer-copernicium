import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext, toggleColorMode } from '../context/Theme';
import { MdWbSunny } from '@react-icons/all-files/md/MdWbSunny';
import { MdBrightness2 } from '@react-icons/all-files/md/MdBrightness2';
import { MdOutlineSchool } from 'react-icons/md';
import { FiRss } from '@react-icons/all-files/fi/FiRss';
import Head from '../components/Head';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { SearchIcon } from './Search/icon';
import Search from './Search';
import BuyMeCoffee from './Coffee';
import Anchor from './Anchor';
import Cookies from './Cookies';

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

  console.log(
    '👋 Welcome! Thank you for your interest in my blog. In the famous words of Deckard Cain: "Stay a while and listen." 💖',
  );

  return (
    <div
      className={`${colorMode} relative bg-color-1 text-color-1-script m-0 px-0 py-1 ${
        showSearch ? 'overflow-hidden max-h-screen' : 'min-h-screen'
      }`}
      onKeyUp={(e) => {
        if (e.key === 'Escape') {
          toggleSearchMode(!showSearch);
        }
      }}
    >
      <Head {...meta} />
      <div className="print:hidden fixed top-0 left-0 right-0 z-50 bg-color-1 text-color-1-script">
        <div className="max-w-[1920px] mx-auto relative px-4">
          <BuyMeCoffee component="top-bar" />
          <Anchor
            to="/courses"
            title="Courses"
            className="absolute left-10 -top-1 text-3xl hover:text-color-2 hover:animate-wiggle animate"
          >
            <MdOutlineSchool className="inline" />
          </Anchor>
          <div className="text-right text-lg">
            <div className="mr-3 pt-1 inline-block">
              <SearchIcon
                show={showSearch}
                toggle={() => toggleSearchMode(!showSearch)}
              />
            </div>
            <div className="mr-4 pt-1 inline-block">
              <Toggler colorMode={colorMode} setColorMode={setColorMode} />
            </div>
            <div className="pt-1 inline-block">
              <Anchor to="/rss.xml" forceNewTab={true} title="RSS Feed">
                <FiRss />
              </Anchor>
            </div>
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

      <main className="pt-16 print:pt-0 bg-default text-default-script">
        {children}
      </main>
      <Footer
        toggler={<Toggler colorMode={colorMode} setColorMode={setColorMode} />}
      />
      <Cookies />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  meta: PropTypes.object.isRequired,
};
