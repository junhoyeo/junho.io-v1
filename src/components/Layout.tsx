'use client';

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

import Phone from '../components/Phone';
import { rhythm, typography } from '../utils/typography';
import useWindowSize from '../utils/useWindowSize';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from './Phone/constants';

type LayoutProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ title, description, children }) => {
  const { screenWidth = 1980 } = useWindowSize();
  const [transformScale, setTransformScale] = useState<number>(1);

  useEffect(() => {
    typography.injectStyles();
  }, []);

  useEffect(() => {
    if (screenWidth > 500) {
      setTransformScale(1);
      return;
    }
    const containerWidth = screenWidth * 0.9;
    setTransformScale(containerWidth / DEVICE_WIDTH);
  }, [screenWidth]);

  const phoneContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!phoneContainerRef.current) {
      return;
    }
    const deviceHeight = transformScale * DEVICE_HEIGHT;
    const bottom = deviceHeight * -0.55;
    document.documentElement.style.setProperty(
      '--device-height',
      `${deviceHeight}px`,
    );
    document.documentElement.style.setProperty('--bottom', `${bottom}px`);
  });

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div
            className="brand-wrapper"
            style={{ marginTop: rhythm(1.8), marginBottom: rhythm(1) }}
          >
            <Link href="/">
              <span className="brand">junho.io</span>
            </Link>
          </div>
          {title && <h1>{title}</h1>}
          {description && (
            <p style={{ paddingBottom: rhythm(0.5) }}>{description}</p>
          )}
          <main>{children}</main>
        </div>
        <div ref={phoneContainerRef} className="phone-container">
          <Phone transformScale={transformScale} />
        </div>
      </div>
      <style jsx>{`
        /* :root {
          --device-height: ${DEVICE_HEIGHT}px;
          --bottom: ${DEVICE_HEIGHT * -0.55}px;
        } */

        .wrapper {
          display: flex;
          margin: 0 auto;
          min-height: 100vh;
          max-width: 1080px;
          position: relative;
        }

        .container {
          margin-right: 32px;
          width: 55%;
          display: flex;
          flex-direction: column;
        }

        .container h1 {
          font-size: 2.5rem;
          line-height: 1.25;
        }

        .container p {
          font-weight: 400;
          font-size: 1.25rem;
          color: #707176;
          padding-bottom: 0.5rem;
          line-height: 1.45;
        }

        @media screen and (max-width: 1200px) {
          .wrapper {
            max-width: 900px;
          }
        }

        @media screen and (max-width: 1100px) {
          .wrapper {
            max-width: 850px;
          }
        }

        @media screen and (max-width: 1000px) {
          .wrapper {
            max-width: 75%;
            flex-direction: column;

            margin-bottom: 300px;
          }

          .container {
            margin-right: 0;
            width: 100%;
          }

          @media screen and (max-width: 330px) {
            .container h1 {
              font-size: 2rem;
            }
          }
        }

        @media screen and (max-width: 500px) {
          .wrapper {
            max-width: 90%;
          }
        }

        .brand-wrapper {
          margin-top: 1.8rem;
          margin-bottom: 1rem;
        }

        .brand {
          font-weight: 900;
          font-family: 'Montserrat', sans-serif;
          font-size: 2rem;
          color: #707176;
          cursor: pointer;
          width: fit-content;
          user-select: none;
        }

        .phone-container {
          position: sticky;
          top: 0;
          right: 0;
          height: 100vh;

          display: flex;
          justify-content: center;
          align-items: center;
        }

        @media screen and (max-height: 900px) {
          .phone-container {
            padding-top: 24px;
            align-items: flex-start;
          }
        }

        @media screen and (max-width: 1000px) {
          .phone-container {
            padding-top: unset;

            position: fixed;
            top: unset;
            left: 0;
            right: 0;
            bottom: -500px;
            pointer-events: none;
          }

          .phone-container > div {
            pointer-events: auto;
          }
        }

        @media screen and (max-width: 600px) {
          .phone-container {
            bottom: var(--bottom);
          }

          .phone-container,
          .phone-container > div {
            height: var(--device-height);
          }
        }
      `}</style>
    </>
  );
};

export default Layout;
