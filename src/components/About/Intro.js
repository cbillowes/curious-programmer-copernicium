import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { greetings } from "../../common/greetings"
import Emoji from "../Emoji"
import Anchor from "../Anchor"

const getRandomGreeting = () => {
  const index = Math.floor(Math.random() * greetings.length)
  const greeting = greetings[index]
  return greeting
}

const Intro = () => {
  const [greeting, setGreeting] = useState(getRandomGreeting())
  const [isWaving, setWave] = useState(true)

  const greet = () => {
    const greeting = getRandomGreeting()
    setGreeting(greeting)
  }
  return (
    <>
      <div className="text-center relative">
        <div className="relative inline-block">
          <StaticImage
            src="../../images/avatar.png"
            alt="My avatar"
            quality={50}
            width={260}
            height={260}
            style={{
              borderRadius: "50%",
            }}
          />
          <div
            className={`absolute right-0 top-0 cursor-pointer ${
              isWaving ? "animate-wave" : ""
            }`}
            onAnimationEnd={() => setWave(false)}
            onClick={() => {
              setWave(true)
              greet()
            }}
            style={{
              transformOrigin: "70% 70%",
            }}
          >
            <StaticImage
              src="../../images/emoji-waving-hand.png"
              alt="Waving hand emoji"
              quality={50}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "30%",
              }}
            />
          </div>
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
            I obsess over Clojure(Script), Gatsby and Git{" "}
            <Emoji className="inline-block">🤤</Emoji>
          </p>
          <p>
            It all Sounds fancy{" "}
            <Anchor
              to="/blog/the-imposter-within/"
              title="The Imposter Within"
              useMarkdownStyles={true}
            >
              doesn’t
            </Anchor>{" "}
            it?
          </p>
        </div>
      </div>
    </>
  )
}

export default Intro
