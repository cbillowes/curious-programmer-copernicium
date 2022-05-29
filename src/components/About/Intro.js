import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { greetings } from '../../common/greetings';
import Emoji from '../Emoji';
import WavingHand from '../WavingHand';

const getRandomGreeting = () => {
  const index = Math.floor(Math.random() * greetings.length);
  const greeting = greetings[index];
  return greeting;
};

const Intro = () => {
  const [greeting, setGreeting] = useState(getRandomGreeting());

  const greet = () => {
    const greeting = getRandomGreeting();
    setGreeting(greeting);
  };
  return (
    <>
      <div className="text-center relative">
        <div className="relative inline-block">
          <StaticImage
            src="../../images/avatar.png"
            alt="A photo of Clarice Bouwer on a windy day at the beach"
            width={260}
            height={260}
            style={{
              borderRadius: '50%',
            }}
          />
          <WavingHand className="absolute right-0 top-0" />
        </div>
        <h1 className="text-5xl xl:text-8xl text-center mb-5 xl:mb-10 mt-5">
          <span className="font-semibold">{greeting}!</span>
        </h1>
        <div className="text-xl leading-loose xl:max-w-2xl mx-auto">
          <p>
            My name is Clarice Bouwer and I am a Senior Software Engineer
            working in the Financial Services Industry at Cloudsure Limited in
            Mauritius <Emoji className="inline-block">🏝️</Emoji>
          </p>
          <p>
            I obsess over Clojure(Script), Gatsby and Git{' '}
            <Emoji className="inline-block">🤤</Emoji>
          </p>
        </div>
      </div>
    </>
  );
};

export default Intro;
