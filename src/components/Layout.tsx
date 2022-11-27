'use client';

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

import Phone from '../components/Phone';
import { rhythm } from '../utils/typography';
import useWindowSize from '../utils/useWindowSize';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from './Phone/constants';
import classes from './layout.module.scss';

type LayoutProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ title, description, children }) => {
  const { screenWidth = 1980 } = useWindowSize();
  const [transformScale, setTransformScale] = useState<number>(1);

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
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div
            className={classes.brandWrapper}
            style={{ marginTop: rhythm(1.8), marginBottom: rhythm(1) }}
          >
            <Link href="/">
              <span className={classes.brand}>junho.io</span>
            </Link>
          </div>
          {title && <h1 className={classes.title}>{title}</h1>}
          {description && (
            <p
              className={classes.description}
              style={{ paddingBottom: rhythm(0.5) }}
            >
              {description}
            </p>
          )}
          <main>{children}</main>
        </div>
        <div ref={phoneContainerRef} className={classes.phoneContainer}>
          <Phone transformScale={transformScale} />
        </div>
      </div>
      <style jsx>{`
        /* :root {
          --device-height: ${DEVICE_HEIGHT}px;
          --bottom: ${DEVICE_HEIGHT * -0.55}px;
        } */

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
