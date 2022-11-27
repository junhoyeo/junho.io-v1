import React from 'react';

import { ButtonComponent } from '@/types/html';

import classes from './button.module.scss';

export const PrimaryButton: ButtonComponent = ({ className, ...props }) => (
  <button
    {...props}
    className={`${classes.btn} ${classes.btnPrimary} ${className || ''}`}
  />
);

export const SecondaryButton: ButtonComponent = ({ className, ...props }) => (
  <button
    {...props}
    className={`${classes.btn} ${classes.btnSecondary} ${className || ''}`}
  />
);
