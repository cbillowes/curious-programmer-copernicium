import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const BURGER_WIDTH = 25
const BURGER_HEIGHT = 24
const BAR_HEIGHT = 3

/*!
 * Hamburgers: hamburger--spin
 * @description Tasty CSS-animated hamburgers
 * @author Jonathan Suh @jonsuh
 * @site https://jonsuh.com/hamburgers
 * @link https://github.com/jonsuh/hamburgers
 */

const Container = styled.button`
  width: ${BURGER_WIDTH}px;
  height: ${BURGER_HEIGHT}px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;

  .hamburger:hover {
    .hamburger-inner,
    .hamburger-inner::before,
    .hamburger-inner::after {
      background-color: white;
      opacity: 1;
    }
  }
  .hamburger.is-active:hover {
    opacity: 0.7;
  }
  .hamburger.is-active .hamburger-inner,
  .hamburger.is-active .hamburger-inner::before,
  .hamburger.is-active .hamburger-inner::after {
    background-color: white;
  }

  .hamburger-box {
    width: ${BURGER_WIDTH}px;
    height: ${BURGER_HEIGHT}px;
    display: inline-block;
    position: relative;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
  }
  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    background-color: white;
    width: ${BURGER_WIDTH}px;
    height: ${BAR_HEIGHT}px;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }
  .hamburger-inner::before,
  .hamburger-inner::after {
    content: "";
    display: block;
  }
  .hamburger-inner::before {
    top: -8px;
  }
  .hamburger-inner::after {
    bottom: -8px;
  }

  .hamburger--spin .hamburger-inner {
    transition-duration: 0.22s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .hamburger--spin .hamburger-inner::before {
    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
  }
  .hamburger--spin .hamburger-inner::after {
    transition: bottom 0.1s 0.25s ease-in,
      transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  .hamburger--spin.is-active .hamburger-inner {
    transform: rotate(225deg);
    transition-delay: 0.12s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .hamburger--spin.is-active .hamburger-inner::before {
    top: 0;
    opacity: 0;
    transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
  }
  .hamburger--spin.is-active .hamburger-inner::after {
    bottom: 0;
    transform: rotate(-90deg);
    transition: bottom 0.1s ease-out,
      transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  /*
   * Spin Reverse
   */
  .hamburger--spin-r .hamburger-inner {
    transition-duration: 0.22s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .hamburger--spin-r .hamburger-inner::before {
    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
  }
  .hamburger--spin-r .hamburger-inner::after {
    transition: bottom 0.1s 0.25s ease-in,
      transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  .hamburger--spin-r.is-active .hamburger-inner {
    transform: rotate(-225deg);
    transition-delay: 0.12s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .hamburger--spin-r.is-active .hamburger-inner::before {
    top: 0;
    opacity: 0;
    transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
  }
  .hamburger--spin-r.is-active .hamburger-inner::after {
    bottom: 0;
    transform: rotate(90deg);
    transition: bottom 0.1s ease-out,
      transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`

const Hamburger = ({ isOpen, toggle }) => (
  <Container aria-label="Menu" onClick={() => toggle(!isOpen)}>
    <div className={`hamburger hamburger--spin ${isOpen ? "is-active" : ""}`}>
      <div className="hamburger-box">
        <div className="hamburger-inner"></div>
      </div>
    </div>
  </Container>
)

export default Hamburger

Hamburger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
}
