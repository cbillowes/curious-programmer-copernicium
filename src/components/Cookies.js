import React, { useState } from 'react';
import Anchor from './Anchor';

const accept = () => {
  document.cookie = 'cookie_banner=ACCEPTED; path=/';
};

const shouldShow = () => {
  return document.cookie.indexOf('cookie_banner=ACCEPTED') !== -1;
}

const Cookies = () => {
  const [closed, setClosed] = useState(shouldShow());
  if (closed) console.log('Hey, looks like you have already accepted our cookie policy.');
  return (
    !closed && (
      <div className="absolute bg-black text-white rounded-lg bottom-5 right-5 w-1/4 py-8 px-12 shadow-md opacity-95">
        <button
          className="absolute top-2 right-4"
          onClick={() => setClosed(true)}
        >
          &times;
        </button>
        We use essential cookies to make our site work. With your consent, we
        may also use non-essential cookies to improve user experience and
        analyze website traffic. By clicking 'Accept', you agree to our
        website's cookie use as described in our{' '}
        <Anchor to="/privacy" className="underline">
          Privacy Policy
        </Anchor>
        .<br />
        <button
          className="inline-block mt-3 mr-3 py-2 px-4 md:py-1 md:px-3 text-sm rounded text-inverse bg-inverse-script hover:bg-color-3 hover:text-color-3-script"
          onClick={() => {
            accept();
            setClosed(true);
          }}
        >
          Accept
        </button>
      </div>
    )
  );
};

export default Cookies;
