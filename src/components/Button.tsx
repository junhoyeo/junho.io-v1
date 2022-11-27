import React from 'react';

import { ButtonComponent } from '@/types/html';

import { rhythm } from '../utils/typography';
import classes from './button.module.scss';

export const PrimaryButton: ButtonComponent = ({
  className,
  style,
  ...props
}) => (
  <button
    {...props}
    className={`${classes.btn} ${classes.btnPrimary} ${className || ''}`}
    style={{ padding: `${rhythm(0.55)} ${rhythm(0.65)}`, ...style }}
  />
);

export const SecondaryButton: ButtonComponent = ({
  className,
  style,
  ...props
}) => (
  <button
    {...props}
    className={`${classes.btn} ${classes.btnSecondary} ${className || ''}`}
    style={{ padding: `${rhythm(0.55)} ${rhythm(0.65)}`, ...style }}
  />
);
