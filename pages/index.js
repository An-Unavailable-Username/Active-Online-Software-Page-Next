import React from 'react'
import Head from 'next/head'

import { DateTimePrimitive } from '@teleporthq/react-components'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Active Online Software Page</title>
          <meta property="og:title" content="Active Online Software Page" />
        </Head>
        <section className="home-hero">
          <img
            alt="pastedImage"
            src="/external/pastedimage-itor-300h.png"
            className="home-interfact-logo-big"
          />
          <nav className="home-nav-bar">
            <div className="home-left">
              <img
                alt="pastedImage"
                src="/external/pastedimage-itor-300h.png"
                className="home-interfact-logo-small"
              />
              <div className="home-search-filters">
                <input type="radio" id="A-ZRadioButton" name="A-ZRadioButton" />
                <span>A-Z</span>
                <input
                  type="radio"
                  id="DownRadioButton"
                  name="DownRadioButton"
                  className="home-down-radio-button"
                />
                <span>Down</span>
                <input
                  type="radio"
                  id="BlockedRadioButton"
                  name="BlockedRadioButton"
                  className="home-blocked-radio-button"
                />
                <span>Blocked</span>
              </div>
            </div>
            <div className="home-right">
              <input
                type="text"
                id="searchField"
                name="searchField"
                placeholder="Search Camera Name Here!"
                className="home-search-bar input"
              />
              <div id="ClearSearchButton" className="home-search-button1">
                <span className="home-text10">X</span>
              </div>
              <div id="SearchButton" className="home-search-button2">
                <span className="home-text11">🔍</span>
              </div>
            </div>
          </nav>
          <ul className="home-ul list">
            <li className="home-camera-entry11 list-item">
              <div className="home-container2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="home-icon1"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2M9.29 16.29L5.7 12.7a.996.996 0 1 1 1.41-1.41L10 14.17l6.88-6.88a.996.996 0 1 1 1.41 1.41l-7.59 7.59a.996.996 0 0 1-1.41 0"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>
                  MgGalliard 047706
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://maps.app.goo.gl/MbjAAYyqyW5eY5xW8"
                  id="CameraOneMapViewLink"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link1"
                >
                  Map View
                </a>
                <span className="home-text13">View Camera Log</span>
                <span className="home-text14">Most Recent Picture</span>
                <span className="home-date-time1">
                  <DateTimePrimitive
                    format="MMM D, YYYY h:mm A"
                    date="Mon Nov 25 2024 19:31:53 GMT-0500 (Eastern Standard Time)"
                  ></DateTimePrimitive>
                </span>
              </div>
            </li>
            <li className="home-camera-entry2 list-item">
              <div className="home-container3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="home-icon3"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2M9.29 16.29L5.7 12.7a.996.996 0 1 1 1.41-1.41L10 14.17l6.88-6.88a.996.996 0 1 1 1.41 1.41l-7.59 7.59a.996.996 0 0 1-1.41 0"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>
                  MgGalliard 047706
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://maps.app.goo.gl/MbjAAYyqyW5eY5xW8"
                  id="CameraOneMapViewLink"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link2"
                >
                  Map View
                </a>
                <span className="home-text16">View Camera Log</span>
                <span className="home-text17">Most Recent Picture</span>
                <span className="home-date-time2">
                  <DateTimePrimitive
                    format="MMM D, YYYY h:mm A"
                    date="Mon Nov 25 2024 19:31:53 GMT-0500 (Eastern Standard Time)"
                  ></DateTimePrimitive>
                </span>
              </div>
            </li>
            <li className="home-camera-entry12 list-item">
              <div className="home-container4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="home-icon5"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2M9.29 16.29L5.7 12.7a.996.996 0 1 1 1.41-1.41L10 14.17l6.88-6.88a.996.996 0 1 1 1.41 1.41l-7.59 7.59a.996.996 0 0 1-1.41 0"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>
                  MgGalliard 047706
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://maps.app.goo.gl/MbjAAYyqyW5eY5xW8"
                  id="CameraOneMapViewLink"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link3"
                >
                  Map View
                </a>
                <span className="home-text19">View Camera Log</span>
                <span className="home-text20">Most Recent Picture</span>
                <span className="home-date-time3">
                  <DateTimePrimitive
                    format="MMM D, YYYY h:mm A"
                    date="Mon Nov 25 2024 19:31:53 GMT-0500 (Eastern Standard Time)"
                  ></DateTimePrimitive>
                </span>
              </div>
            </li>
          </ul>
        </section>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            flex-direction: column;
          }
          .home-hero {
            width: 100%;
            height: 1000px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            background-color: var(--dl-color-gray-500);
          }
          .home-interfact-logo-big {
            width: 232px;
            height: 222px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-nav-bar {
            width: 100%;
            height: 65px;
            display: flex;
            max-width: 1200px;
            box-sizing: initial;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 50px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
            background-color: #ffffff;
          }
          .home-left {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .home-interfact-logo-small {
            width: 62px;
            height: 59px;
            animation-name: none;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-search-filters {
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-fourunits);
            animation-name: none;
            flex-direction: row;
            animation-delay: 0s;
            background-color: #d9d9d9;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-down-radio-button {
            margin-left: var(--dl-space-space-oneandhalfunits);
          }
          .home-blocked-radio-button {
            margin-left: var(--dl-space-space-oneandhalfunits);
          }
          .home-right {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-search-bar {
            width: 390px;
          }
          .home-search-button1 {
            width: 43px;
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
            display: flex;
            transition: 0.3s;
            align-items: center;
            margin-left: var(--dl-space-space-halfunit);
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 56px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row-reverse;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
            background-color: var(--dl-color-danger-500);
          }
          .home-search-button1:hover {
            background-color: #5228f5;
          }
          .home-text10 {
            color: rgb(255, 255, 255);
          }
          .home-search-button2 {
            width: 58px;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            margin-left: var(--dl-space-space-oneandhalfunits);
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 56px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .home-search-button2:hover {
            background-color: #5228f5;
          }
          .home-text11 {
            color: rgb(255, 255, 255);
          }
          .home-ul {
            height: 433px;
            border-color: var(--dl-color-gray-black);
            border-width: 2px;
            background-color: var(--dl-color-gray-white);
          }
          .home-camera-entry11 {
            height: 29px;
          }
          .home-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 3px;
            justify-content: flex-start;
          }
          .home-icon1 {
            fill: var(--dl-color-success-300);
            color: var(--dl-color-success-300);
            margin-right: var(--dl-space-space-halfunit);
          }
          .home-link1 {
            fill: var(--dl-color-template-blue-bg);
            color: var(--dl-color-template-blue-bg);
            margin-left: var(--dl-space-space-fiveunits);
          }
          .home-text13 {
            fill: var(--dl-color-template-blue-bg);
            color: var(--dl-color-template-blue-bg);
            margin-left: var(--dl-space-space-fiveunits);
            text-decoration: none;
          }
          .home-text14 {
            fill: var(--dl-color-template-blue-bg);
            color: var(--dl-color-template-blue-bg);
            margin-left: var(--dl-space-space-fourunits);
            text-decoration: none;
          }
          .home-date-time1 {
            margin-left: var(--dl-space-space-oneandhalfunits);
          }
          .home-camera-entry2 {
            height: 29px;
          }
          .home-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 3px;
            justify-content: flex-start;
          }
          .home-icon3 {
            fill: var(--dl-color-success-300);
            color: var(--dl-color-success-300);
            margin-right: var(--dl-space-space-halfunit);
          }
          .home-link2 {
            fill: var(--dl-color-template-blue-bg);
            color: var(--dl-color-template-blue-bg);
            margin-left: var(--dl-space-space-fiveunits);
          }
          .home-text16 {
            fill: var(--dl-color-template-blue-bg);
            color: var(--dl-color-template-blue-bg);
            margin-left: var(--dl-space-space-fiveunits);
            text-decoration: none;
          }
          .home-text17 {
            fill: var(--dl-color-template-blue-bg);
            color: var(--dl-color-template-blue-bg);
            margin-left: var(--dl-space-space-fourunits);
            text-decoration: none;
          }
          .home-date-time2 {
            margin-left: var(--dl-space-space-oneandhalfunits);
          }
          .home-camera-entry12 {
            height: 29px;
          }
          .home-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 3px;
            justify-content: flex-start;
          }
          .home-icon5 {
            fill: var(--dl-color-success-300);
            color: var(--dl-color-success-300);
            margin-right: var(--dl-space-space-halfunit);
          }
          .home-link3 {
            fill: var(--dl-color-template-blue-bg);
            color: var(--dl-color-template-blue-bg);
            margin-left: var(--dl-space-space-fiveunits);
          }
          .home-text19 {
            fill: var(--dl-color-template-blue-bg);
            color: var(--dl-color-template-blue-bg);
            margin-left: var(--dl-space-space-fiveunits);
            text-decoration: none;
          }
          .home-text20 {
            fill: var(--dl-color-template-blue-bg);
            color: var(--dl-color-template-blue-bg);
            margin-left: var(--dl-space-space-fourunits);
            text-decoration: none;
          }
          .home-date-time3 {
            margin-left: var(--dl-space-space-oneandhalfunits);
          }
          @media (max-width: 991px) {
            .home-hero {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-nav-bar {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .home-left {
              margin-left: var(--dl-space-space-halfunit);
            }
            .home-search-filters {
              display: none;
            }
            .home-search-button1 {
              display: none;
            }
            .home-search-button2 {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .home-hero {
              height: 620px;
              position: relative;
              padding-bottom: 180px;
              background-color: var(--dl-color-template-blue-bg);
            }
            .home-nav-bar {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-left {
              margin-left: var(--dl-space-space-unit);
            }
            .home-right {
              margin-right: var(--dl-space-space-unit);
            }
            .home-search-button1 {
              display: none;
            }
            .home-search-button2 {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              padding-bottom: 160px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
